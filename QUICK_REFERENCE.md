# ⚡ Quick Reference Card

## 🎯 3 STEPS TO GO LIVE

### Step 1: GitHub
```bash
cd /Users/nikhil.raj_flx/workspace/glass-accessories-shop
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/glass-accessories-shop.git
git push -u origin main
```

### Step 2: Render Web Service (Backend)
- Go to render.com → New Web Service
- Connect GitHub repo
- Name: `ankit-mobile-armor-api`
- Build: `npm install`
- Start: `node server/index.js`
- Plan: Free
- Add env vars (see below)
- Deploy

### Step 3: Render Static Site (Frontend)
- New Static Site
- Same repo
- Build: `cd client && npm install && npm run build`
- Publish: `client/dist`
- Add: `VITE_API_URL` = (your API URL)
- Deploy

---

## 🔑 Environment Variables

### Backend (Web Service):
```
NODE_ENV = production
MONGO_URI = mongodb+srv://nikhilrajflx:Nikhil%401806@cluster0.4ltnovm.mongodb.net/glass-accessories-shop?appName=Cluster0
JWT_SECRET = my-super-secret-key
ADMIN_EMAIL = admin@glassshop.com
ADMIN_PASSWORD = Admin@123
WHATSAPP_NUMBER = 919717982082
BUSINESS_NAME = Ankit Mobile Armor
BUSINESS_PHONE = +919717982082
BUSINESS_EMAIL = srivastavaankit657@gmail.com
```

### Frontend (Static Site):
```
VITE_API_URL = https://ankit-mobile-armor-api.onrender.com
```

---

## 📱 Admin Login

**Email:** admin@glassshop.com  
**Password:** Admin@123

---

## 🔗 Useful Links

- GitHub: https://github.com
- Render: https://render.com
- MongoDB Atlas: https://www.mongodb.com/cloud/atlas

---

## 📊 What You'll Get

```
✅ Live Website: https://ankit-mobile-armor-web.onrender.com
✅ API: https://ankit-mobile-armor-api.onrender.com
✅ Free Domain: https://ankitmobilearmor.render.app
✅ HTTPS/SSL: Automatic
✅ Cost: $0/month forever
```

---

## 🚀 Local Development

```bash
npm run setup      # Install
npm run seed       # Add categories
npm run server:dev # Backend
npm run client:dev # Frontend
```

Open: http://localhost:5173

---

## 📝 Commands Cheat Sheet

| Command | What it does |
|---------|-------------|
| `npm run setup` | Install all dependencies |
| `npm run seed` | Add 12 categories to DB |
| `npm run server:dev` | Start backend (dev) |
| `npm run client:dev` | Start frontend (dev) |
| `npm run start` | Start backend (production) |
| `npm run build` | Build frontend for production |

---

## ⚠️ If Deployment Fails

1. Check Render logs
2. Verify MongoDB URI
3. Verify all env vars set
4. Check GitHub connection
5. Wait 15+ minutes (first deploy is slow)
6. Ask for help

---

## 💰 Cost

| Item | Cost |
|------|------|
| Website Hosting | FREE |
| Backend Server | FREE |
| Database | FREE |
| SSL Certificate | FREE |
| Domain | FREE |
| **TOTAL** | **$0/month** |

---

## ✅ Pre-Deployment Checklist

- [ ] Website works locally
- [ ] Admin login works
- [ ] Products can be added
- [ ] Images upload properly
- [ ] WhatsApp links work
- [ ] Code is on GitHub
- [ ] All env vars collected
- [ ] MongoDB URI copied

---

## 📞 Contact Info (Already Added)

📱 **Phone:** +91-9717982082  
📧 **Email:** srivastavaankit657@gmail.com  
📍 **Address:** Shop No.10, 13/5, Mahajalan Plaza, Karol Bagh, New Delhi-110005

---

## 🎯 Categories (12 Total)

1. 0.33 Flexible Glass
2. Privacy Glass
3. UV Glass
4. Matt Glass
5. Watch Glass
6. Anti Bul Glass
7. AG Matt Glass
8. Dust Proof Glass
9. 11D Tempered Glass
10. 18D Tempered Glass
11. Mobile Chargers
12. USB Cables

---

## 📄 Important Files

- `INSTRUCTIONS_FOR_YOU.md` ← Read this first!
- `DEPLOYMENT_GUIDE.md` - Detailed steps
- `FINAL_SUMMARY.md` - What was built
- `GITHUB_README.md` - GitHub documentation

---

## 🎉 Success Looks Like

✅ Homepage loads  
✅ Admin panel works  
✅ Products display  
✅ Cart calculates  
✅ WhatsApp works  
✅ Images show up  

---

**Everything is ready. Push to GitHub and deploy!** 🚀
