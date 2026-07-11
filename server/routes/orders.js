import express from 'express';
import Order from '../models/Order.js';
import BulkPricing from '../models/BulkPricing.js';

const router = express.Router();

// Calculate bulk discount
const calculateBulkDiscount = async (items) => {
  let totalQuantity = 0;
  items.forEach(item => {
    totalQuantity += item.quantity;
  });

  const bulkPricing = await BulkPricing.findOne({ isActive: true });
  
  if (!bulkPricing) {
    return { discountPercentage: 0, isBulk: false };
  }

  for (const tier of bulkPricing.tiers) {
    const meetsMinimum = totalQuantity >= tier.minQuantity;
    const meetsMaximum = tier.maxQuantity === null || totalQuantity <= tier.maxQuantity;
    
    if (meetsMinimum && meetsMaximum) {
      return {
        discountPercentage: tier.discountPercentage,
        isBulk: true,
      };
    }
  }

  return { discountPercentage: 0, isBulk: false };
};

// Create order
router.post('/', async (req, res) => {
  try {
    const { items, customer, notes } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'Order must have items' });
    }

    if (!customer || !customer.name || !customer.email || !customer.phone) {
      return res.status(400).json({ error: 'Customer information is required' });
    }

    // Calculate totals
    let subtotal = 0;
    items.forEach(item => {
      subtotal += item.price * item.quantity;
    });

    const bulkInfo = await calculateBulkDiscount(items);
    const discountAmount = subtotal * (bulkInfo.discountPercentage / 100);
    const tax = (subtotal - discountAmount) * 0.18; // 18% GST
    const total = subtotal - discountAmount + tax;

    const order = new Order({
      items,
      customer,
      summary: {
        subtotal,
        discount: discountAmount,
        tax,
        total,
        isBulkOrder: bulkInfo.isBulk,
        bulkDiscountPercentage: bulkInfo.discountPercentage,
      },
      notes,
    });

    await order.save();
    
    res.status(201).json({
      success: true,
      orderId: order.orderId,
      order,
      whatsappLink: `https://wa.me/${process.env.WHATSAPP_NUMBER}?text=I%20have%20placed%20order%20${order.orderId}%20and%20want%20to%20discuss%20further.`,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get order by ID
router.get('/:orderId', async (req, res) => {
  try {
    const order = await Order.findOne({ orderId: req.params.orderId }).populate('items.productId');
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
