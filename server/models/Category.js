import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Category name is required'],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '📦', // Emoji icon
    },
    image: {
      type: String,
      default: null, // URL to category image
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0, // For sorting categories
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Category', categorySchema);
