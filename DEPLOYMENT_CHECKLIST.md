# ✅ Deployment Checklist - Ankit Mobile Armor

## **BEFORE DEPLOYMENT:**

- [ ] Local website runs perfectly (`npm run server:dev` + `npm run client:dev`)
- [ ] Admin panel works (login with admin@glassshop.com / Admin@123)
- [ ] Can add products with images
- [ ] Shopping cart works
- [ ] Bulk discounts calculate
- [ ] WhatsApp links work
- [ ] All company details correct:
  - [ ] Name: Ankit Mobile Armor
  - [ ] Phone: 9717982082
  - [ ] Email: srivastavaankit657@gmail.com
  - [ ] Address: Shop No.10, 13/5, Mahajalan Plaza, Karol Bagh, New Delhi-110005

---

## **DEPLOYMENT STEPS:**

### **Step 1: Push to GitHub**
- [ ] Create GitHub account (if not already)
- [ ] Create new empty repository: `glass-accessories-shop`
- [ ] Run these commands in project folder:
  ```bash
  git init
  git add .
  git commit -m "Initial commit"
  git remote add origin https://github.com/YOUR_USERNAME/glass-accessories-shop.git
  git branch -M main
  git push -u origin main
  ```
- [ ] Verify code is on GitHub

### **Step 2: Deploy Backend (API) on Render**
- [ ] Go to render.com → Sign up
- [ ] Create Web Service
- [ ] Connect GitHub repository
- [ ] Configure:
  - Name: `ankit-mobile-armor-api`
  - Build: `npm install`
  - Start: `node server/index.js`
  - Plan: Free
- [ ] Add ALL environment variables from DEPLOYMENT_GUIDE.md
- [ ] Click "Deploy"
- [ ] Wait 10-15 minutes
- [ ] Copy the API URL (looks like: `https://ankit-mobile-armor-api.onrender.com`)

### **Step 3: Deploy Frontend (Website) on Render**
- [ ] Create Static Site
- [ ] Connect same GitHub repository
- [ ] Configure:
  - Build Command: `cd client && npm install && npm run build`
  - Publish directory: `client/dist`
- [ ] Add environment variable:
  - `VITE_API_URL` = (paste the API URL from Step 2)
- [ ] Click "Deploy"
- [ ] Wait 10-15 minutes
- [ ] Get your live website URL!

---

## **AFTER DEPLOYMENT:**

- [ ] Test homepage at your new URL
- [ ] Test admin login
- [ ] Test product browsing
- [ ] Test shopping cart
- [ ] Test WhatsApp integration
- [ ] Test bulk discounts
- [ ] Test image uploads

---

## **IMPORTANT DETAILS:**

**Your MongoDB Connection String:**
```
mongodb+srv://nikhilrajflx:Nikhil%401806@cluster0.4ltnovm.mongodb.net/glass-accessories-shop?appName=Cluster0
```

**Admin Credentials:**
- Email: `admin@glassshop.com`
- Password: `Admin@123`

**Company Details:**
- Name: Ankit Mobile Armor
- Phone: 9717982082
- Email: srivastavaankit657@gmail.com
- Address: Shop No.10, 13/5, Mahajalan Plaza, Karol Bagh, New Delhi-110005

---

## **FILES READY FOR DEPLOYMENT:**

✅ `.gitignore` - Configured
✅ `render.yaml` - Configured
✅ `package.json` - Updated with build scripts
✅ All code - Ready to deploy
✅ MongoDB Atlas - Already set up
✅ Environment variables - Documented

**Everything is ready! You just need to push to GitHub.** 🚀

---

## **NEXT STEP FOR YOU:**

1. Create GitHub account (if needed)
2. Create empty repository named: `glass-accessories-shop`
3. Run the git commands to push your code
4. Send me the GitHub URL
5. I'll guide you through Render deployment if you get stuck

**Let's go LIVE!** 🎉
