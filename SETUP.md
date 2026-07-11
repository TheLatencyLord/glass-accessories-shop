# Local Setup Guide - Glass & Accessories Shop

Apne website ko locally test kaise karte hain, ye guide mein batata hoon!

## 📋 Prerequisites (पहले ये install करो)

### 1. Node.js Install करो
- Download करो: https://nodejs.org
- 16+ version download करो
- Install करो aur verify करो:
  ```bash
  node --version
  npm --version
  ```

### 2. MongoDB Install करो (Local या Cloud)

#### **Option A: Local MongoDB (Recommended for testing)**

**Mac पर Homebrew से:**
```bash
# Homebrew se install करो
brew tap mongodb/brew
brew install mongodb-community

# Start करो
brew services start mongodb-community

# Verify करो
mongo --version
```

**Windows पर:**
1. जाओ: https://www.mongodb.com/try/download/community
2. Download करो Windows version
3. Install करो default settings से
4. MongoDB automatically start होगा

**Linux पर:**
```bash
# Ubuntu/Debian
sudo apt-get install mongodb

# Start करो
sudo systemctl start mongodb
```

#### **Option B: MongoDB Atlas (Cloud - आसान)**
1. जाओ: https://www.mongodb.com/cloud/atlas
2. Free account बनाओ
3. Cluster create करो (M0 free tier)
4. Connection string copy करो
5. `.env` में paste करो

---

## 🚀 Project Setup (Local पर चलाने के लिए)

### Step 1: Project को एक folder में रखो

```bash
# जहाँ आप project चाहते हो वहाँ जाओ
cd /Users/nikhil.raj_flx/workspace/glass-accessories-shop
```

### Step 2: .env File बनाओ

```bash
# Template से copy करो
cp .env.example .env

# Text editor में खोलो
nano .env
# या Visual Studio Code में खोलो
```

### Step 3: .env File में values डालो

```bash
# === SERVER CONFIGURATION ===
PORT=3000
NODE_ENV=development

# === DATABASE ===
# अगर Local MongoDB है तो:
MONGO_URI=mongodb://localhost:27017/glass-accessories-shop

# अगर MongoDB Atlas है तो (copy-paste करो connection string):
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/glass-shop

# === JWT & SECURITY ===
JWT_SECRET=my-super-secret-key-12345
JWT_EXPIRE=7d

# === ADMIN CREDENTIALS ===
ADMIN_EMAIL=admin@glassshop.com
ADMIN_PASSWORD=Admin@123

# === WHATSAPP CONFIGURATION ===
WHATSAPP_NUMBER=919876543210
WHATSAPP_MESSAGE=Hi! I'm interested in your mobile glass and accessories.

# === BUSINESS INFO ===
BUSINESS_NAME=Glass & Accessories Shop
BUSINESS_PHONE=+919876543210
BUSINESS_EMAIL=info@glassshop.com

# === FRONTEND CONFIGURATION ===
VITE_API_URL=http://localhost:3000
```

### Step 4: Dependencies Install करो

```bash
# सब packages install करो
npm run setup

# या manually:
npm install
cd client
npm install
cd ..
```

---

## ▶️ Run करो (दोनों Terminal में)

### Terminal 1: Backend Server

```bash
npm run server:dev
```

**Expected Output:**
```
✅ MongoDB connected successfully!
🚀 Server running on http://localhost:3000
📝 API Health: http://localhost:3000/api/health
```

### Terminal 2: Frontend Client

```bash
npm run client:dev
```

**Expected Output:**
```
VITE v4.4.9  ready in 123 ms

➜  Local:   http://localhost:5173/
```

---

## 🌐 Website Access करो

### Customer Side:
- **Homepage:** http://localhost:5173/
- **Products:** http://localhost:5173/products
- **Cart:** http://localhost:5173/cart

### Admin Side:
- **Admin Login:** http://localhost:5173/admin/login
- **Email:** admin@glassshop.com
- **Password:** Admin@123
- **Admin Dashboard:** http://localhost:5173/admin/dashboard

---

## 📝 First Time Setup - Products Add करो

1. **Admin login करो:**
   - जाओ: http://localhost:5173/admin/login
   - Email: admin@glassshop.com
   - Password: Admin@123

2. **Category बनाओ:**
   - Menu में जाओ "Manage Categories"
   - Click करो "Add Category"
   - Examples:
     - 📱 Tempered Glass
     - 🔌 Chargers & Cables
     - 📢 Speakers
     - 💼 Mobile Covers

3. **Products add करो:**
   - Menu में जाओ "Manage Products"
   - Click करो "Add Product"
   - Details भरो:
     - Name: Tempered Glass for iPhone 13
     - Description: High quality, 9H hardness
     - Category: Tempered Glass
     - Price: ₹199
     - Stock: 100

4. **Orders देखो:**
   - Menu में जाओ "View Orders"
   - Customers के orders दिखेंगे

---

## ✅ API Testing करो

### Health Check:
```bash
curl http://localhost:3000/api/health
```

### Get All Products:
```bash
curl http://localhost:3000/api/products
```

### Get All Categories:
```bash
curl http://localhost:3000/api/categories
```

### Create Order:
```bash
curl -X POST http://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "items": [{"quantity": 5, "price": 199, "productName": "Tempered Glass"}],
    "customer": {"name": "John Doe", "email": "john@example.com", "phone": "9876543210"}
  }'
```

---

## 🆘 Common Issues & Solutions

### Issue 1: "Cannot connect to MongoDB"

**Solution:**
```bash
# Check if MongoDB is running
# Mac:
brew services list

# If not running:
brew services start mongodb-community

# Windows: Check MongoDB service in Services app
# Linux:
sudo systemctl status mongodb
```

### Issue 2: "Port 3000 already in use"

**Solution:**
```bash
# Kill existing process on port 3000
# Mac/Linux:
lsof -ti:3000 | xargs kill -9

# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Issue 3: "Cannot find module 'express'"

**Solution:**
```bash
# Re-install dependencies
npm install
cd client && npm install
cd ..
```

### Issue 4: "Admin login नहीं हो रहा"

**Solution:**
- .env file में ADMIN_EMAIL aur ADMIN_PASSWORD check करो
- Default credentials हैं:
  - Email: admin@glassshop.com
  - Password: Admin@123

### Issue 5: "Products नहीं दिख रहे"

**Solution:**
```bash
# MongoDB में check करो क्या data है
# Terminal में यह type करो:
mongo

# फिर:
use glass-accessories-shop
db.products.find()
db.categories.find()

# अगर empty है तो admin panel से add करो
```

### Issue 6: "VITE error when loading page"

**Solution:**
```bash
# Frontend को restart करो
# Terminal 2 में: Ctrl+C
# फिर फिर से:
npm run client:dev
```

---

## 📊 Database Structure

### Collections जो automatically create होंगे:

**Categories:**
```json
{
  "_id": "...",
  "name": "Tempered Glass",
  "description": "Premium glass",
  "icon": "📱",
  "isActive": true,
  "createdAt": "2024-01-01T..."
}
```

**Products:**
```json
{
  "_id": "...",
  "name": "Tempered Glass for iPhone",
  "description": "9H Hardness",
  "category": "...",
  "categoryName": "Tempered Glass",
  "price": 199,
  "stock": 100,
  "specifications": {"material": "Glass", "hardness": "9H"}
}
```

**Orders:**
```json
{
  "orderId": "ORD-1704067200000-abc123",
  "items": [...],
  "customer": {...},
  "summary": {
    "subtotal": 1000,
    "discount": 100,
    "tax": 162,
    "total": 1062
  },
  "status": "pending"
}
```

---

## 🎯 Testing Workflow

### 1️⃣ Homepage check करो
- http://localhost:5173
- Categories दिखे?
- Latest products दिख रहे हैं?

### 2️⃣ Product add करो (Admin)
- Login करो admin panel में
- कुछ categories add करो
- कुछ products add करो

### 3️⃣ Products browse करो (Customer)
- Homepage से category चुनो
- Products page खोलो
- Product detail देखो

### 4️⃣ Cart test करो
- कुछ products cart में डालो
- Bulk pricing देखो (अगर quantity ज्यादा है)
- Checkout करो

### 5️⃣ Order place करो
- Form भरो
- Order place करो
- Order confirmation page देखो
- WhatsApp link क्लिक करो

---

## 🧹 Clean Up (Testing के बाद)

### सब Mongo data delete करो:
```bash
mongo
use glass-accessories-shop
db.dropDatabase()
exit
```

### सब dependencies remove करो:
```bash
rm -rf node_modules
rm -rf client/node_modules
npm run setup  # फिर से install करो
```

---

## 📱 Mobile Testing

Website को mobile पर test करने के लिए:

1. **Same network पर access करो:**
   ```bash
   # Terminal में check करो local IP:
   ifconfig | grep "inet "
   # Example: 192.168.1.100
   
   # Mobile पर browser खोलो:
   http://192.168.1.100:5173
   ```

2. **या Chrome DevTools use करो:**
   - Browser में F12 दबाओ
   - Device toolbar icon click करो (Ctrl+Shift+M)
   - Responsive view में देखो

---

## 🚀 Performance Tips

1. **Database indexing:**
   ```bash
   # MongoDB में automatic index बन जाते हैं
   ```

2. **Clear browser cache:**
   - Ctrl+Shift+Delete (Windows/Linux)
   - Cmd+Shift+Delete (Mac)

3. **Use Network tab:**
   - F12 → Network tab
   - API calls check करो
   - Response times देखो

---

## ✨ Next Steps

अगर local testing successfully हो गया तो:
1. DEPLOYMENT.md पढ़ो
2. Domain aur hosting खरीदो
3. Production environment setup करो
4. Live deploy करो!

---

**Happy Testing! 🎉**

कोई problem हो तो हमें बता! 🚀
