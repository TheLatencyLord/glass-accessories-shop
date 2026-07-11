import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      unique: true,
      required: true,
      default: () => 'ORD-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        productName: String,
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        price: {
          type: Number,
          required: true,
        },
        priceAtPurchase: Number,
        subtotal: Number,
      },
    ],
    customer: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      company: String,
      address: {
        street: String,
        city: String,
        state: String,
        zip: String,
        country: {
          type: String,
          default: 'India',
        },
      },
    },
    summary: {
      subtotal: Number,
      discount: {
        type: Number,
        default: 0,
      },
      tax: {
        type: Number,
        default: 0,
      },
      total: Number,
      isBulkOrder: {
        type: Boolean,
        default: false,
      },
      bulkDiscountPercentage: {
        type: Number,
        default: 0,
      },
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'],
      default: 'pending',
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'completed', 'failed'],
      default: 'pending',
    },
    notes: String,
    whatsappMessage: {
      sent: {
        type: Boolean,
        default: false,
      },
      timestamp: Date,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Order', orderSchema);
