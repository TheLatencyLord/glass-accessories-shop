import express from 'express';
import bcrypt from 'bcrypt';
import Product from '../models/Product.js';
import Category from '../models/Category.js';
import Order from '../models/Order.js';
import BulkPricing from '../models/BulkPricing.js';
import { verifyAdmin, generateToken } from '../middleware/auth.js';

const router = express.Router();

// ========== ADMIN LOGIN ==========
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Simple authentication (in production, use proper database)
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = generateToken(email);
      res.json({
        success: true,
        token,
        admin: { email },
      });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ========== CATEGORIES MANAGEMENT ==========

// Get all categories (admin)
router.get('/categories', verifyAdmin, async (req, res) => {
  try {
    const categories = await Category.find().sort({ order: 1 });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create category
router.post('/categories', verifyAdmin, async (req, res) => {
  try {
    const { name, description, icon, order } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Category name is required' });
    }

    const category = new Category({
      name,
      description,
      icon,
      order,
    });

    await category.save();
    res.status(201).json(category);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ error: 'Category already exists' });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

// Update category
router.put('/categories/:id', verifyAdmin, async (req, res) => {
  try {
    const { name, description, icon, order, isActive } = req.body;

    const category = await Category.findByIdAndUpdate(
      req.params.id,
      { name, description, icon, order, isActive },
      { new: true, runValidators: true }
    );

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete category
router.delete('/categories/:id', verifyAdmin, async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.json({ success: true, message: 'Category deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ========== PRODUCTS MANAGEMENT ==========

// Get all products (admin)
router.get('/products', verifyAdmin, async (req, res) => {
  try {
    const products = await Product.find()
      .populate('category')
      .sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create product
router.post('/products', verifyAdmin, async (req, res) => {
  try {
    const {
      name,
      description,
      category,
      categoryName,
      price,
      images,
      thumbnail,
      stock,
      sku,
      specifications,
    } = req.body;

    if (!name || !description || !category || !price) {
      return res.status(400).json({
        error: 'Name, description, category, and price are required',
      });
    }

    const product = new Product({
      name,
      description,
      category,
      categoryName,
      price,
      images,
      thumbnail,
      stock,
      sku,
      specifications: specifications || {},
    });

    await product.save();
    await product.populate('category');
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update product
router.put('/products/:id', verifyAdmin, async (req, res) => {
  try {
    const {
      name,
      description,
      category,
      categoryName,
      price,
      images,
      thumbnail,
      stock,
      sku,
      specifications,
      isActive,
      isPopular,
      isNew,
    } = req.body;

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        category,
        categoryName,
        price,
        images,
        thumbnail,
        stock,
        sku,
        specifications,
        isActive,
        isPopular,
        isNew,
      },
      { new: true, runValidators: true }
    ).populate('category');

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete product
router.delete('/products/:id', verifyAdmin, async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json({ success: true, message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ========== ORDERS MANAGEMENT ==========

// Get all orders
router.get('/orders', verifyAdmin, async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('items.productId')
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update order status
router.put('/orders/:orderId', verifyAdmin, async (req, res) => {
  try {
    const { status, paymentStatus, notes } = req.body;

    const order = await Order.findOneAndUpdate(
      { orderId: req.params.orderId },
      { status, paymentStatus, notes },
      { new: true }
    ).populate('items.productId');

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ========== BULK PRICING MANAGEMENT ==========

// Get bulk pricing
router.get('/bulk-pricing', verifyAdmin, async (req, res) => {
  try {
    const pricing = await BulkPricing.find().populate('applicableCategories');
    res.json(pricing);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create or update bulk pricing
router.post('/bulk-pricing', verifyAdmin, async (req, res) => {
  try {
    const { name, description, tiers, applicableCategories, isActive } = req.body;

    let pricing = await BulkPricing.findOne();

    if (pricing) {
      // Update existing
      pricing.name = name;
      pricing.description = description;
      pricing.tiers = tiers;
      pricing.applicableCategories = applicableCategories;
      pricing.isActive = isActive;
    } else {
      // Create new
      pricing = new BulkPricing({
        name,
        description,
        tiers,
        applicableCategories,
        isActive,
      });
    }

    await pricing.save();
    await pricing.populate('applicableCategories');
    res.json(pricing);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ========== DASHBOARD STATS ==========

router.get('/stats/overview', verifyAdmin, async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    const totalCategories = await Category.countDocuments();
    const totalOrders = await Order.countDocuments();
    const totalRevenue = await Order.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: '$summary.total' },
        },
      },
    ]);

    res.json({
      totalProducts,
      totalCategories,
      totalOrders,
      totalRevenue: totalRevenue[0]?.total || 0,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
