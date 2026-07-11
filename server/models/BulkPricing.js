import mongoose from 'mongoose';

const bulkPricingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      // Example: "Tempered Glass Bulk Rates"
    },
    description: String,
    tiers: [
      {
        minQuantity: {
          type: Number,
          required: true,
          min: 1,
        },
        maxQuantity: {
          type: Number,
          default: null, // null means unlimited
        },
        discountPercentage: {
          type: Number,
          required: true,
          min: 0,
          max: 100,
        },
        discountType: {
          type: String,
          enum: ['percentage', 'fixed'],
          default: 'percentage',
        },
      },
    ],
    applicableCategories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('BulkPricing', bulkPricingSchema);
