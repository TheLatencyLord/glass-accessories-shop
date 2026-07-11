import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Category from './models/Category.js';

dotenv.config();

const initialCategories = [
  {
    name: '0.33 Flexible Glass',
    description: 'Premium flexible tempered glass protectors',
    icon: '📱',
    order: 1,
  },
  {
    name: 'Privacy Glass',
    description: 'Privacy tempered glass screen protectors',
    icon: '🔒',
    order: 2,
  },
  {
    name: 'UV Glass',
    description: 'UV protective tempered glass',
    icon: '☀️',
    order: 3,
  },
  {
    name: 'Matt Glass',
    description: 'Matte finish tempered glass',
    icon: '✨',
    order: 4,
  },
  {
    name: 'Watch Glass',
    description: 'Tempered glass for smartwatches',
    icon: '⌚',
    order: 5,
  },
  {
    name: 'Anti Bul Glass',
    description: 'Anti-bullous tempered glass',
    icon: '🛡️',
    order: 6,
  },
  {
    name: 'AG Matt Glass',
    description: 'Anti-glare matte tempered glass',
    icon: '✨',
    order: 7,
  },
  {
    name: 'Dust Proof Glass',
    description: 'Dust proof tempered glass protectors',
    icon: '🌫️',
    order: 8,
  },
  {
    name: '11D Tempered Glass',
    description: '11D tempered glass screen protectors',
    icon: '🔷',
    order: 9,
  },
  {
    name: '18D Tempered Glass',
    description: '18D tempered glass screen protectors',
    icon: '🔹',
    order: 10,
  },
  {
    name: 'Mobile Chargers',
    description: 'Fast charging solutions for all devices',
    icon: '🔌',
    order: 11,
  },
  {
    name: 'USB Cables',
    description: 'Durable and reliable charging cables',
    icon: '🔗',
    order: 12,
  },
];

const seedDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/glass-accessories-shop';
    
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✅ MongoDB connected');

    // Check if categories already exist
    const existingCount = await Category.countDocuments();
    if (existingCount > 0) {
      console.log(`📊 Database already has ${existingCount} categories. Skipping seed.`);
      process.exit(0);
    }

    // Insert initial categories
    const result = await Category.insertMany(initialCategories);
    console.log(`✅ Successfully added ${result.length} categories:`);
    result.forEach(cat => {
      console.log(`  - ${cat.icon} ${cat.name}`);
    });

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDB();
