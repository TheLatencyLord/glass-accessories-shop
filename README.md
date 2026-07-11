# Glass & Mobile Accessories E-Commerce Store

Aapke wholesale mobile glass aur accessories business ke liye complete e-commerce solution.

## 🎯 Features

### Customer Side
- 📱 Product listing by categories (Tempered Glass, Chargers, Cables, Speakers, Covers, etc.)
- 🛒 Shopping cart functionality
- 💳 Checkout page
- 📞 WhatsApp integration for inquiries
- 💰 Bulk order rates - automatic discount based on quantity
- 🔍 Product search aur filter
- ⭐ Product ratings

### Admin Side
- ➕ Add new categories
- ➕ Add new products with images
- ✏️ Edit products aur categories
- 🗑️ Delete products
- 📊 View all orders
- 👥 Manage bulk pricing rules
- 📈 Dashboard with statistics

## 🛠️ Tech Stack

```
Frontend: React.js + Vite (Modern & Fast)
Backend: Node.js + Express (API Server)
Database: MongoDB (Product storage)
Authentication: JWT (Admin login)
```

## 📁 Project Structure

```
glass-accessories-shop/
├── server/                    # Backend
│   ├── index.js
│   ├── models/               # Database schemas
│   │   ├── Product.js
│   │   ├── Category.js
│   │   ├── Order.js
│   │   └── BulkPricing.js
│   ├── routes/               # API endpoints
│   │   ├── products.js
│   │   ├── categories.js
│   │   ├── orders.js
│   │   └── admin.js
│   ├── controllers/          # Business logic
│   ├── middleware/           # Auth middleware
│   └── config/               # Configuration
├── client/                   # Frontend (React)
│   ├── src/
│   │   ├── components/       # UI components
│   │   ├── pages/            # Pages
│   │   ├── contexts/         # State management
│   │   └── App.jsx
│   └── package.json
├── .env.example              # Environment variables
└── README.md
```

## 🚀 Quick Start (Local)

### Prerequisites
- Node.js 16+
- MongoDB (Local ya MongoDB Atlas)

### Installation

```bash
# 1. Install dependencies
npm run setup

# 2. Copy .env.example to .env aur values fill karo
cp .env.example .env

# 3. MongoDB setup karo (dekho SETUP.md)

# 4. Server start karo (ek terminal mein)
npm run server:dev

# 5. Client start karo (dusre terminal mein)
npm run client:dev

# Website open hoga: http://localhost:5173
# Admin panel: http://localhost:5173/admin
```

## 📋 .env File Setup

```
# Server
MONGO_URI=mongodb://localhost:27017/glass-shop
JWT_SECRET=your-secret-key-here-keep-it-safe
ADMIN_EMAIL=your-email@example.com
ADMIN_PASSWORD=your-secure-password

# WhatsApp
WHATSAPP_NUMBER=919876543210

# Frontend
VITE_API_URL=http://localhost:3000
```

## 🗄️ MongoDB Setup

### Local MongoDB (Mac)
```bash
# Install MongoDB via Homebrew
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB
brew services start mongodb-community

# Check if running
mongo
```

### Or Use MongoDB Atlas (Cloud - Recommended)
1. Jaao: https://www.mongodb.com/cloud/atlas
2. Free account banao
3. Cluster create karo
4. Connection string copy karo
5. .env mein paste karo
```
MONGO_URI=mongodb+srv://user:password@cluster.mongodb.net/glass-shop
```

## 📦 API Endpoints (Backend)

### Products
- `GET /api/products` - Sab products get karo
- `GET /api/products/:id` - Ek product get karo
- `POST /api/admin/products` - New product add karo
- `PUT /api/admin/products/:id` - Product update karo
- `DELETE /api/admin/products/:id` - Product delete karo

### Categories
- `GET /api/categories` - Sab categories
- `POST /api/admin/categories` - Category add karo
- `PUT /api/admin/categories/:id` - Category update karo
- `DELETE /api/admin/categories/:id` - Category delete karo

### Orders
- `POST /api/orders` - Order place karo
- `GET /api/orders/:id` - Order details
- `GET /api/admin/orders` - Sab orders (admin)

### Bulk Pricing
- `GET /api/bulk-pricing` - Bulk rates dekho
- `POST /api/admin/bulk-pricing` - Rates set karo

## 🔐 Admin Login

Default credentials (.env mein set karo):
- Email: admin@glassshop.com
- Password: Admin@123

## 🌐 Deployment Guide

Dekho DEPLOYMENT.md file

## 💡 Features Overview

### 1️⃣ Bulk Order Rates
Automatically calculate discounts:
- 10-50 items: 5% discount
- 51-100 items: 10% discount
- 100+ items: 15% discount

### 2️⃣ WhatsApp Integration
Customer direct WhatsApp pe inquire kar sakta hai

### 3️⃣ Shopping Cart
Cart ko local storage mein save hota hai

### 4️⃣ Admin Panel
Complete control over products aur categories

## 📞 Support

Kisi problem ho to batao!
