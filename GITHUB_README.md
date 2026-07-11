# 🛡️ Ankit Mobile Armor - Wholesale E-Commerce Platform

Premium tempered glass & mobile accessories wholesale distributor website.

## 📋 Quick Overview

This is a complete full-stack e-commerce platform built for B2B wholesale:
- 🎯 **Wholesale Specialist** - Focus on bulk orders with auto-calculated discounts
- 📦 **Product Management** - Admin panel to add/edit/delete products and categories
- 🛒 **Shopping Cart** - Complete cart with bulk pricing tiers
- 💰 **Bulk Discounts** - Automatic discounts: 5% (10-50), 10% (51-100), 15% (100+)
- 📱 **WhatsApp Integration** - Direct WhatsApp contact for inquiries
- 🖼️ **Image Uploads** - Add product images during product creation
- 📊 **Analytics Dashboard** - View products, categories, orders, revenue

---

## 🚀 Deployment

### **LIVE Website** (Completely FREE)
Website is live on Render.com - See deployment guide for setup!

**Status:** Ready to deploy  
**Framework:** React + Node.js + MongoDB  
**Hosting:** Render.com (Free Forever)  
**Database:** MongoDB Atlas (Free 512MB)

---

## 💻 Tech Stack

### Frontend
- React 18.2 + Vite 4.4
- Zustand for state management
- Responsive design (Mobile, Tablet, Desktop)
- Modern UI with animations

### Backend
- Node.js + Express 4.18
- MongoDB 7.5 with Mongoose
- JWT Authentication
- RESTful API

### Database
- MongoDB Atlas Cloud (Free tier)
- 4 Collections: Products, Categories, Orders, BulkPricing

---

## 📁 Project Structure

```
glass-accessories-shop/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── pages/         # All pages
│   │   ├── components/    # Reusable components
│   │   ├── store/         # Zustand stores
│   │   ├── api/           # API calls
│   │   └── App.jsx        # Main app
│   └── package.json
├── server/                # Node.js Backend
│   ├── routes/            # API endpoints
│   ├── models/            # MongoDB models
│   ├── middleware/        # Auth, etc
│   ├── index.js           # Server entry
│   └── seedCategories.js  # Seed script
├── package.json           # Root package
├── .env                   # Environment variables
└── render.yaml            # Render deployment config
```

---

## 🎯 Features

### Customer Features
- ✅ Browse products by category
- ✅ View product details
- ✅ Add to shopping cart
- ✅ Automatic bulk discounts (5-15%)
- ✅ Checkout process
- ✅ WhatsApp for inquiries
- ✅ Order confirmation
- ✅ Responsive mobile design

### Admin Features
- ✅ Admin login & JWT authentication
- ✅ Dashboard with stats
- ✅ Product management (Add/Edit/Delete)
- ✅ Category management
- ✅ Order management
- ✅ Bulk pricing configuration
- ✅ Image upload for products

### Special Features
- 🎁 Automatic bulk discounts based on quantity
- 📸 Product image uploads
- 🏷️ 10 tempered glass varieties
- 💬 WhatsApp Business integration
- 📊 Order tracking
- ⚡ Real-time cart calculations

---

## 🔧 Installation & Setup

### Prerequisites
- Node.js 14+
- npm or yarn
- MongoDB Atlas account (free)
- Git

### Local Setup

1. **Clone Repository**
```bash
git clone https://github.com/YOUR_USERNAME/glass-accessories-shop.git
cd glass-accessories-shop
```

2. **Install Dependencies**
```bash
npm run setup
```

3. **Configure Environment**
```bash
cp .env.example .env
# Edit .env with your MongoDB URI and settings
```

4. **Seed Database**
```bash
npm run seed
```

5. **Start Development Servers**

Terminal 1 (Backend):
```bash
npm run server:dev
```

Terminal 2 (Frontend):
```bash
npm run client:dev
```

6. **Access Website**
- Frontend: http://localhost:5173
- Admin: http://localhost:5173 (click Admin button)
- Backend API: http://localhost:3000

---

## 📚 Available Scripts

```bash
npm run setup         # Install all dependencies
npm run seed          # Seed 12 categories into database
npm run server:dev    # Start backend dev server with hot reload
npm run client:dev    # Start frontend dev server
npm run start         # Start production server
npm run build         # Build frontend for production
```

---

## 🔐 Admin Credentials

Default admin account (for development):
- **Email:** admin@glassshop.com
- **Password:** Admin@123

⚠️ Change these in production!

---

## 🌐 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product details
- `POST /api/admin/products` - Create product (admin only)
- `PUT /api/admin/products/:id` - Update product (admin only)
- `DELETE /api/admin/products/:id` - Delete product (admin only)

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/admin/categories` - Create category (admin only)
- `PUT /api/admin/categories/:id` - Update category (admin only)
- `DELETE /api/admin/categories/:id` - Delete category (admin only)

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders/:orderId` - Get order details
- `PUT /api/admin/orders/:orderId` - Update order status (admin only)

### Bulk Pricing
- `GET /api/bulk-pricing` - Get bulk pricing tiers
- `POST /api/admin/bulk-pricing` - Update bulk pricing (admin only)

### Admin
- `POST /api/admin/login` - Admin login
- `GET /api/admin/stats/overview` - Dashboard statistics

---

## 🚀 Deployment (Render.com)

### Steps:
1. Push code to GitHub
2. Connect GitHub to Render
3. Deploy backend as Web Service
4. Deploy frontend as Static Site
5. Set environment variables
6. Go live! 🎉

**See DEPLOYMENT_GUIDE.md for detailed instructions**

---

## 📦 Database Schema

### Products
```javascript
{
  name: String,
  description: String,
  category: ObjectId (ref: Category),
  price: Number,
  images: [String],
  thumbnail: String,
  stock: Number,
  specifications: Map,
  ratings: { average, count },
  isPopular: Boolean,
  isNew: Boolean
}
```

### Categories
```javascript
{
  name: String (unique),
  description: String,
  icon: String,
  image: String,
  isActive: Boolean,
  order: Number
}
```

### Orders
```javascript
{
  orderId: String (unique),
  items: [{productId, quantity, price}],
  customer: { name, email, phone, address },
  summary: { subtotal, discount, tax, total },
  status: String,
  paymentStatus: String,
  createdAt: Date
}
```

---

## 🎨 Design Features

- Modern gradient backgrounds
- Smooth animations and transitions
- Mobile-first responsive design
- Professional color scheme (Orange #f97316)
- Accessibility-friendly UI
- Dark mode ready components

---

## 🤝 Contributing

This is a custom project for Ankit Mobile Armor. For contributions or features, please contact the developer.

---

## 📞 Contact

**Ankit Mobile Armor**
- 📱 WhatsApp: +91-9717982082
- 📧 Email: srivastavaankit657@gmail.com
- 📍 Address: Shop No.10, 13/5, Mahajalan Plaza, Karol Bagh, New Delhi-110005
- 🌐 Website: (Live on Render)

---

## 📄 License

This project is custom-built for Ankit Mobile Armor. All rights reserved.

---

## 🎯 Key Metrics

- **Pages:** 12+ customer pages + 5 admin pages
- **API Endpoints:** 15+
- **Categories:** 12 (Including 10 tempered glass varieties)
- **Features:** 20+
- **Code Files:** 47
- **Installation:** Single command (`npm run setup`)
- **Deployment:** Completely free on Render.com

---

**Built with ❤️ for Ankit Mobile Armor - Wholesale Specialist**

Last Updated: July 2024
