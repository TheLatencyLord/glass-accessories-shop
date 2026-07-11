# 🚀 Quick Start (Start in 5 Minutes)

## Step 1: Start MongoDB (one time)

**Mac:**
```bash
brew services start mongodb-community
```

**Windows:** Automatically running

**Linux:**
```bash
sudo systemctl start mongodb
```

---

## Step 2: Create .env File

```bash
cp .env.example .env
```

**Edit .env (Mac/Linux):**
```bash
nano .env
# Check this section:
# MONGO_URI=mongodb://localhost:27017/glass-accessories-shop
# JWT_SECRET=my-super-secret-key-12345
# ADMIN_EMAIL=admin@glassshop.com
# ADMIN_PASSWORD=Admin@123
# WHATSAPP_NUMBER=919876543210
```

---

## Step 3: Install Dependencies (one time)

```bash
npm run setup
```

---

## Step 4: Start Both Servers

**Terminal 1 - Backend (Port 3000):**
```bash
npm run server:dev
```

Wait until:
```
✅ MongoDB connected successfully!
🚀 Server running on http://localhost:3000
```

**Terminal 2 - Frontend (Port 5173):**
```bash
npm run client:dev
```

---

## Step 5: Open Browser

```
http://localhost:5173
```

---

## 🎯 First Things To Do

### 1. Admin Login
```
URL: http://localhost:5173/admin/login
Email: admin@glassshop.com
Password: Admin@123
```

### 2. Create Categories
```
Dashboard → Manage Categories → Add Category
Examples:
- 📱 Tempered Glass
- 🔌 Chargers
- 📢 Speakers
- 💼 Covers
```

### 3. Add Products
```
Dashboard → Manage Products → Add Product
Example:
  Name: Tempered Glass for iPhone
  Description: 9H Hardness, Premium Quality
  Category: Tempered Glass
  Price: 199
  Stock: 100
```

### 4. Shop As Customer (Customer side)
```
Homepage → Browse Products → Add to Cart → Checkout
```

---

## 📋 Admin Credentials

```
Email: admin@glassshop.com
Password: Admin@123
```

To change them, update .env and restart the server.

---

## 🔗 Important URLs

| Feature | URL |
|---------|-----|
| Homepage | http://localhost:5173 |
| Products | http://localhost:5173/products |
| Cart | http://localhost:5173/cart |
| Admin Login | http://localhost:5173/admin/login |
| Admin Dashboard | http://localhost:5173/admin/dashboard |
| API Health | http://localhost:3000/api/health |

---

## 🆘 Quick Troubleshooting

### "Cannot connect to MongoDB"
```bash
# Check if MongoDB is running
brew services list  # Mac
# Start it:
brew services start mongodb-community
```

### "Port 3000 already in use"
```bash
# Kill process
lsof -ti:3000 | xargs kill -9
```

### "Admin password is incorrect"
```bash
# Check .env
cat .env | grep ADMIN_
# Then restart server
```

---

## 📚 Full Documentation

- **Setup Guide:** SETUP.md
- **Deployment Guide:** DEPLOYMENT.md
- **Project Info:** README.md

---

## ✨ Features Ready

✅ Homepage with categories & products
✅ Product browsing & filtering
✅ Shopping cart with local storage
✅ Checkout & order placement
✅ WhatsApp chat integration
✅ Bulk order discounts (5-15%)
✅ Admin panel for management
✅ Category management
✅ Product management
✅ Order tracking

---

**Ready? Start coding! 🎉**

```bash
npm run server:dev  # Terminal 1
npm run client:dev  # Terminal 2
```

Then visit: http://localhost:5173
