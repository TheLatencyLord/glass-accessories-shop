# Deployment Guide - Glass & Accessories Shop

Ab hum deployment ke steps dekhtey hain. Aapko ek fully functional website banani hai jo internet pe access ho sake.

## 📋 Deployment Steps (मतलब: Internet pe launch kaise kare)

### **Step 1: Domain खरीदें (₹200-500/year)**

Domain matlab aapka website ka nam jo log browser mein type kare.

**कहाँ से खरीदें:**
- GoDaddy: https://www.godaddy.com
- Namecheap: https://www.namecheap.com
- Google Domains: https://domains.google

**Example:** glassaccessoriesindia.com

**Process:**
1. Website par jaao
2. "Buy Domain" par click karo
3. Apna brand name search karo
4. ₹300-500 pay karo (per year)
5. Domain mil jaayega

---

### **Step 2: Hosting खरीदें (₹2000-5000/month)**

Hosting matlab jaha aapka code/website store hota hai.

#### **Option A: Vercel (Recommended - सबसे आसान)**

Free + Paid tiers available.

**Setup:**
```bash
# 1. Vercel account banao: https://vercel.com
# 2. GitHub connect karo (optional but helpful)
# 3. Project upload karo

# Deploy command:
npm run build
npm run server:build
```

Cost: ₹0-5000/month (depending on traffic)

#### **Option B: AWS (Amazon Web Services)**

More powerful, but complex.

- EC2: ₹1000-3000/month
- RDS (Database): ₹1000-2000/month

#### **Option C: Heroku (सबसे सरल)**

Pehle free tha, ab paid hai.

Cost: ₹500-2000/month (Hobby tier)

#### **Option D: Railway.app (नया और अच्छा)**

https://railway.app

Cost: Pay as you go (~₹500-1000/month)

---

### **Step 3: Database Setup (MongoDB)**

#### **Option A: MongoDB Atlas (Recommended - Free)**

1. https://www.mongodb.com/cloud/atlas जाओ
2. Free account बनाओ
3. Cluster create करो (M0 - free tier)
4. Connection string copy करो
5. `.env` file में add करो:
   ```
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/glass-shop
   ```

#### **Option B: Local Server (अगर अपना server चलाना है)**

खुद MongoDB install करना होगा hosting provider के server पर.

---

## 🚀 Complete Deployment Walkthrough

### **Using Vercel (सबसे आसान तरीका)**

#### **Step 1: Prepare Code**

```bash
# Project ready करो
cd /Users/nikhil.raj_flx/workspace/glass-accessories-shop

# सब dependencies install करो
npm run setup

# Local test करो
npm run server:dev  # Terminal 1
npm run client:dev  # Terminal 2

# http://localhost:5173 पर check करो
```

#### **Step 2: Push to GitHub**

```bash
# GitHub पर project upload करो
git init
git add .
git commit -m "Initial commit"
git push origin main
```

#### **Step 3: Deploy on Vercel**

1. https://vercel.com/new जाओ
2. GitHub repo select करो
3. Environment variables add करो:
   - `MONGO_URI` = आपका MongoDB Atlas connection string
   - `JWT_SECRET` = कोई secure random string
   - `ADMIN_EMAIL` = admin@glassshop.com
   - `ADMIN_PASSWORD` = आपका password
   - `WHATSAPP_NUMBER` = आपका WhatsApp number

4. Deploy करो!

#### **Step 4: Connect Domain**

1. Vercel dashboard में जाओ
2. Project select करो
3. Settings → Domains
4. अपना domain add करो (जो आपने GoDaddy से खरीदा है)
5. GoDaddy में Nameservers update करो (Vercel दिए गए)

---

## 🌐 Domain Nameserver Configuration

**अगर GoDaddy से domain खरीदा है:**

1. GoDaddy Dashboard खोलो
2. Domains → अपना domain select करो
3. DNS settings खोलो
4. Nameservers update करो:
   - NS1.VERCEL-DNS.COM
   - NS2.VERCEL-DNS.COM

---

## 📱 WhatsApp Integration Setup

`.env` में यह add करो:

```
WHATSAPP_NUMBER=919876543210
```

Replace करो अपना actual WhatsApp number से (country code के साथ).

Example:
- India: 919876543210 (91 = country code)
- USA: 12025551234 (1 = country code)

---

## 💳 Payment Gateway (Optional - Future)

अभी cash payment on delivery है. Later आप add कर सकते हो:

- **Razorpay**: https://razorpay.com (Popular in India)
- **Stripe**: https://stripe.com (International)
- **PayPal**: https://www.paypal.com

---

## 🔐 Security Checklist

Deployment से पहले check करो:

- [ ] `.env` file secure है (production values डालो)
- [ ] `JWT_SECRET` एक strong random string है
- [ ] Database password strong है
- [ ] ADMIN_PASSWORD change कर दिया
- [ ] HTTPS enabled है (Vercel automatically करता है)

---

## 📊 Admin Panel Access

**Your website live होने के बाद:**

1. https://yourwebsite.com/admin/login जाओ
2. Login करो:
   - Email: admin@glassshop.com
   - Password: (जो आपने .env में set किया)
3. Products add करो
4. Orders देखो
5. Categories manage करो

---

## 🆘 Troubleshooting

### Problem: "Cannot connect to MongoDB"

**Solution:**
- MongoDB Atlas में IP whitelist check करो
- Connection string सही है की नहीं verify करो
- Network connection check करो

### Problem: "Admin login नहीं हो रहा"

**Solution:**
- Email/Password exactly match करना चाहिए (.env में जो है)
- .env file reload करने के लिए server restart करो

### Problem: "Products नहीं दिख रहे"

**Solution:**
- Admin panel से कुछ products add करो
- Check करो database में data है की नहीं

### Problem: "Slow website"

**Solution:**
- Database queries optimize करो
- Images compress करो
- CDN use करो (Cloudflare - free)

---

## 💰 Monthly Cost Estimate

| Item | Cost | Notes |
|------|------|-------|
| Domain | ₹0 | (already bought) |
| Hosting (Vercel) | ₹0-2000 | Pay as you go |
| Database (MongoDB) | ₹0 | Free tier, 512MB |
| Email Service | ₹0-500 | Optional |
| **Total** | **₹0-2500/month** | Minimal cost! |

---

## 🚀 Next Steps (Future Features)

1. **Payment Gateway** - Razorpay integration
2. **Email Notifications** - Order confirmations
3. **SMS Alerts** - Order updates
4. **Analytics** - Traffic monitoring
5. **Inventory Alerts** - Low stock notifications
6. **Customer Accounts** - Order history, saved items

---

## 📞 Support

अगर कोई problem हो तो:

1. Console logs देखो (browser F12)
2. Server logs check करो
3. Database connection verify करो
4. Vercel logs देखो

---

**Happy Deployment! 🎉**
