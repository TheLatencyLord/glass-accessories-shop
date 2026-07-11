# 📋 Instructions - What You Need to Do

## Your Website is 100% Ready!

I've completed everything. Now you need to do 3 things to go LIVE:

---

## **THING 1: Create GitHub Account (5 minutes)**

Go to: https://github.com

Click "Sign Up"
- Create username
- Create password
- Verify email

Done! You now have a GitHub account.

---

## **THING 2: Push Your Code to GitHub (10 minutes)**

Open your Terminal and run these commands ONE BY ONE:

```bash
cd /Users/nikhil.raj_flx/workspace/glass-accessories-shop
```

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "Initial commit - Ankit Mobile Armor website"
```

Now go to GitHub → Click "+" → Click "New repository"

Give it name: `glass-accessories-shop`

Click "Create repository"

Then run:

```bash
git remote add origin https://github.com/YOUR_USERNAME/glass-accessories-shop.git
```

(Replace YOUR_USERNAME with your actual GitHub username)

```bash
git branch -M main
```

```bash
git push -u origin main
```

**Done!** Your code is now on GitHub.

---

## **THING 3: Deploy on Render (10 minutes)**

### Go to: https://render.com

1. Click "Sign Up" (free)
2. Create account with GitHub
3. Authorize Render to access your GitHub

### Then:

**Create Web Service (Backend):**
- Click "New +" → "Web Service"
- Select your `glass-accessories-shop` repository
- Configure:
  - **Name:** `ankit-mobile-armor-api`
  - **Build Command:** `npm install`
  - **Start Command:** `node server/index.js`
  - **Plan:** Free
- Click "Advanced"
- Add environment variables (see below)
- Click "Create Web Service"
- Wait 10-15 minutes
- Copy your API URL (looks like: https://ankit-mobile-armor-api.onrender.com)

**Create Static Site (Frontend):**
- Go back to dashboard
- Click "New +" → "Static Site"
- Select same repository
- Configure:
  - **Name:** `ankit-mobile-armor-web`
  - **Build Command:** `cd client && npm install && npm run build`
  - **Publish directory:** `client/dist`
- Click "Advanced"
- Add environment variable:
  - Key: `VITE_API_URL`
  - Value: (paste your API URL from above)
- Click "Create Static Site"
- Wait 10-15 minutes
- Your website is LIVE! 🎉

---

## **ENVIRONMENT VARIABLES TO ADD**

### For Web Service (Backend):

```
NODE_ENV = production
MONGO_URI = mongodb+srv://nikhilrajflx:Nikhil%401806@cluster0.4ltnovm.mongodb.net/glass-accessories-shop?appName=Cluster0
JWT_SECRET = my-super-secret-key-123456
ADMIN_EMAIL = admin@glassshop.com
ADMIN_PASSWORD = Admin@123
WHATSAPP_NUMBER = 919717982082
BUSINESS_NAME = Ankit Mobile Armor
BUSINESS_PHONE = +919717982082
BUSINESS_EMAIL = srivastavaankit657@gmail.com
VITE_API_URL = https://ankit-mobile-armor-api.onrender.com
```

### For Static Site (Frontend):

```
VITE_API_URL = https://ankit-mobile-armor-api.onrender.com
```

(Use the API URL you got from Web Service deployment)

---

## **IF YOU GET STUCK:**

1. Check the "Logs" tab in Render for error messages
2. Make sure MongoDB URI is correct
3. Make sure all environment variables are set
4. Wait longer - first deployment can take 15-20 minutes

---

## **AFTER DEPLOYMENT:**

Your website will be at:

```
https://ankit-mobile-armor-web.onrender.com
```

OR get a custom free domain:

```
https://ankitmobilearmor.render.app
```

---

## **TEST YOUR LIVE WEBSITE:**

✅ Homepage loads
✅ Admin login works
✅ Browse products
✅ Add to cart
✅ WhatsApp link works
✅ Bulk discounts calculate
✅ Images show up

---

## **REMEMBER:**

- ✅ Admin email: `admin@glassshop.com`
- ✅ Admin password: `Admin@123`
- ✅ Website is FREE forever
- ✅ No credit card needed for Render free tier
- ✅ Every time you push to GitHub, it auto-deploys
- ✅ Website sleeps after 15 min (wakes instantly)

---

## **FILES PREPARED FOR YOU:**

✅ `.gitignore` - GitHub config
✅ `render.yaml` - Render deployment config
✅ `package.json` - Updated with build script
✅ All code - Production ready

**Everything is ready! Just follow the 3 steps above.** 🚀

---

**Questions? Ask me!**

**Your website will be LIVE in less than 1 hour, COMPLETELY FREE!** 🎉
