import express from 'express';
import BulkPricing from '../models/BulkPricing.js';

const router = express.Router();

// Get bulk pricing rules
router.get('/', async (req, res) => {
  try {
    const pricing = await BulkPricing.find({ isActive: true })
      .populate('applicableCategories');
    
    if (!pricing || pricing.length === 0) {
      // Return default pricing
      return res.json([
        {
          name: 'Standard Bulk Rates',
          tiers: [
            { minQuantity: 10, maxQuantity: 50, discountPercentage: 5 },
            { minQuantity: 51, maxQuantity: 100, discountPercentage: 10 },
            { minQuantity: 101, maxQuantity: null, discountPercentage: 15 },
          ],
        },
      ]);
    }
    
    res.json(pricing);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
