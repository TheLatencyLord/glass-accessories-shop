# 🚀 Deployment Guide - Ankit Mobile Armor Website

Your website is ready to go LIVE completely FREE! Follow these simple steps:

---

## **STEP 1: Push Code to GitHub (10 minutes)**

### What You Need:
- GitHub Account (free at github.com)
- Git installed on your computer

### Steps:

```bash
# Go to your project folder
cd /Users/nikhil.raj_flx/workspace/glass-accessories-shop

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Ankit Mobile Armor website"

# Create a new repository on GitHub (name it: glass-accessories-shop)
# Then run:
git remote add origin https://github.com/YOUR_USERNAME/glass-accessories-shop.git
git branch -M main
git push -u origin main
```

**That's it! Your code is now on GitHub.**

---

## **STEP 2: Deploy on Render (5 minutes)**

### Go to: https://render.com

1. **Sign Up** (free account)
2. **Click "New +"** → Select **"Web Service"**
3. **Connect GitHub**
   - Click "Connect account" 
   - Authorize Render to access GitHub
   - Select repository: `glass-accessories-shop`
   - Click "Connect"

4. **Configure Service:**
   - **Name:** `ankit-mobile-armor-api`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `node server/index.js`
   - **Plan:** Free

5. **Add Environment Variables:**
   Click "Advanced" and add these:

   ```
   NODE_ENV = production
   MONGO_URI = mongodb+srv://nikhilrajflx:Nikhil%401806@cluster0.4ltnovm.mongodb.net/glass-accessories-shop?appName=Cluster0
   JWT_SECRET = your-super-secret-key-change-this-in-production
   ADMIN_EMAIL = admin@glassshop.com
   ADMIN_PASSWORD = Admin@123
   WHATSAPP_NUMBER = 919717982082
   BUSINESS_NAME = Ankit Mobile Armor
   BUSINESS_PHONE = +919717982082
   BUSINESS_EMAIL = srivastavaankit657@gmail.com
   VITE_API_URL = https://ankit-mobile-armor-api.onrender.com
   ```

6. **Click "Create Web Service"** → Wait 5-10 minutes for deployment

7. **You'll get a URL like:** `https://ankit-mobile-armor-api.onrender.com`
   - Copy this URL

---

## **STEP 3: Deploy Frontend (5 minutes)**

1. **Go back to Render Dashboard**
2. **Click "New +"** → Select **"Static Site"**
3. **Connect GitHub** (same repository)
4. **Configure:**
   - **Name:** `ankit-mobile-armor-web`
   - **Build Command:** `cd client && npm install && npm run build`
   - **Publish directory:** `client/dist`
   - **Plan:** Free

5. **Add Environment Variable:**
   ```
   VITE_API_URL = https://ankit-mobile-armor-api.onrender.com
   ```
   (Use the API URL from Step 2)

6. **Click "Create Static Site"** → Wait 5-10 minutes

7. **You'll get a URL like:** `https://ankit-mobile-armor-web.onrender.com`

---

## **STEP 4: Test Your Live Website! 🎉**

Open in browser: `https://ankit-mobile-armor-web.onrender.com`

### Test These:
- ✅ Homepage loads with your company branding
- ✅ Admin login works (admin@glassshop.com / Admin@123)
- ✅ Add products with images
- ✅ Browse products
- ✅ Shopping cart works
- ✅ Bulk discounts calculate
- ✅ WhatsApp button works

---

## **IMPORTANT NOTES:**

### ⚠️ First-Time Deployments:
- Render takes 10-15 minutes to build
- If you see errors, go to "Logs" tab to see what went wrong
- Common issue: Wrong MongoDB URI - double-check it!

### ⚡ Free Tier Limits:
- Website will sleep after 15 minutes of no activity (auto-wakes up)
- This is fine for a business site - it wakes instantly on first visit

### 🔄 Auto-Deploy:
- Every time you push to GitHub, Render automatically redeploys!
- Just do: `git add .` → `git commit -m "..."` → `git push`

---

## **STEP 5: Custom Domain (Optional - Also FREE)**

Want your own domain? You already have one:
- **Free domain:** `ankitmobilearmor.render.app` (automatic)
- Or buy a cheap domain ($3-5/year) and connect to Render

---

## **WHAT I STILL NEED FROM YOU:**

Since I can't push to GitHub directly, here's what you need to do:

### **On Your Computer:**

```bash
# 1. Go to project folder
cd /Users/nikhil.raj_flx/workspace/glass-accessories-shop

# 2. Initialize git
git init

# 3. Add all files
git add .

# 4. Create commit
git commit -m "Initial Ankit Mobile Armor website commit"

# 5. Create NEW empty repository on GitHub (DON'T initialize with README)

# 6. Copy the commands from GitHub (they'll look like this):
git remote add origin https://github.com/YOUR_USERNAME/glass-accessories-shop.git
git branch -M main
git push -u origin main
```

**Then come back and tell me:**
- ✅ GitHub repository URL
- ✅ Your MongoDB connection string (already have it)
- ✅ Admin password you want to use

And I'll help you complete Render deployment!

---

## **Quick Troubleshooting:**

| Problem | Solution |
|---------|----------|
| "Cannot find module" | Check MongoDB is running |
| "Deployment failed" | Check logs in Render |
| "MongoDB connection error" | Verify MONGO_URI is correct |
| "Website shows blank page" | Check VITE_API_URL is correct |

---

**Your website will be LIVE completely FREE, FOREVER!** 🚀🎉

Questions? Ask me anything!
