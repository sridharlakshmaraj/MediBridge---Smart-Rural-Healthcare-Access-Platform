# 🚀 MediBridge - Quick Start Guide

## Option 1: Frontend Development Server (Currently Set Up)

### Prerequisites
- **Node.js** (LTS version) - Download from https://nodejs.org/

### Quick Start Commands

#### **Step 1: Open Terminal/Command Prompt**
Navigate to the MediBridge project folder:
```bash
cd d:\MEDIBRIDGE-SMART\ RURAL\ HEALTHCARE\ ACCESS\ PLATFORM
```

#### **Step 2: Install Dependencies** (First time only)
```bash
npm install
```

This will install:
- `express` - Web server framework
- `nodemon` - Auto-restart on file changes (optional)

Wait for it to complete (~2-3 minutes)

#### **Step 3: Start the Server**
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

#### **Step 4: Open in Browser**
Once you see the startup message, open your browser and go to:
```
http://localhost:3000
```

---

## 🧪 Test Credentials

**As Patient:**
- Username: `patient1`
- Password: `password123`

**As Healthcare Provider:**
- Username: `doctor1`
- Password: `password123`

---

## 📋 What You Can Do

### Patient Role
- ✅ View prescriptions (read-only)
- ✅ Record medicine purchases
- ✅ Get medicine reminders
- ✅ Pre-book medicines
- ✅ Schedule appointments
- ✅ Chat with health chatbot
- ✅ Send emergency alerts
- ✅ View appointment history

### Healthcare Provider Role
- ✅ Create prescriptions
- ✅ View prescriptions they created
- ✅ Delete/manage prescriptions
- ✅ View patient appointments
- ✅ Schedule appointments with patients
- ✅ Send notifications

---

## 💾 Data Storage

All data is stored in **browser localStorage**:
- User accounts
- Appointments
- Prescriptions
- Medicine records
- Chat history

**Note:** Data persists until browser cache is cleared

---

## 🛑 Stop the Server

Press `Ctrl+C` in the terminal

---

## 📊 Project Structure

```
medibridge/
├── index.html              # Main app page
├── package.json           # Dependencies config
├── server.js              # Development server
├── service-worker.js      # PWA offline support
├── manifest.json          # PWA configuration
│
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── themes.css
│
└── js/
    ├── app.js              # Main controller
    ├── auth.js             # Authentication
    ├── eprescription.js    # Prescriptions
    ├── medicine-reminder.js # Medicine tracking
    ├── storage.js          # Data persistence
    ├── telemedicine.js     # Video calls
    └── ... (other modules)
```

---

## 🔧 Troubleshooting

### Error: `npm: command not found`
- **Solution:** Install Node.js from https://nodejs.org/
- Then restart your terminal

### Error: `Port 3000 already in use`
- **Solution:** Another app is using port 3000
  ```bash
  # Use different port
  PORT=3001 npm start
  # Then visit http://localhost:3001
  ```

### Error: `Cannot find module 'express'`
- **Solution:** Run `npm install` again
  ```bash
  npm install
  npm start
  ```

### Data not persisting
- **Cause:** Browser storage cleared
- **Solution:** Your data is stored in browser localStorage. Don't clear browser cache, or data will be lost

---

## 🌐 Accessing From Other Devices

On the same network:
1. Find your computer's IP address:
   ```bash
   # Windows
   ipconfig

   # Mac/Linux
   ifconfig
   ```

2. Look for IPv4 address (e.g., 192.168.1.100)

3. On another device, visit:
   ```
   http://192.168.1.100:3000
   ```

---

## 📱 PWA Features

MediBridge is a Progressive Web App:

- **Offline Access:** Works without internet
- **Install as App:** Add to home screen
- **Background Sync:** Syncs data when online
- **Push Notifications:** Medical reminders

To install on mobile:
1. Open in mobile browser
2. Tap **Share** → **Add to Home Screen**

---

## ⚠️ Important Notes

### Current Limitations (Frontend Only)
- ✅ All data stored locally
- ❌ No cloud backup
- ❌ No multi-device sync
- ❌ No HIPAA compliance
- ❌ For development/testing only

### To Use in Production
See "Option 2" for backend database setup

---

## 📞 Support

- Check browser console for errors: `F12` or `Ctrl+Shift+K`
- All data in localStorage persists across sessions
- Clear browser cache to reset everything

---

## 🎯 Next Steps

1. **Test the app** - Try all features with test credentials
2. **Explore data** - Open browser DevTools (F12) → Application → localStorage
3. **Deploy** - Later: Consider Option 2 with backend database
4. **Customize** - Edit JavaScript files and refresh browser

Happy healthcare! 🏥✨
