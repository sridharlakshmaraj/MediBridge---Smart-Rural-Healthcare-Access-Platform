// server.js - MediBridge Frontend Development Server
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname)));

// Serve index.html for all routes (Single Page Application)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║  ✅ MediBridge Frontend Server Running                     ║
║                                                            ║
║  📱 Open Browser:  http://localhost:${PORT}                    ║
║  🔧 Environment:   Development                            ║
║  💾 Storage:       Browser localStorage (Frontend Only)   ║
║                                                            ║
║  🧪 Test Credentials:                                      ║
║     Patient:  patient1 / password123                       ║
║     Doctor:   doctor1 / password123                        ║
║                                                            ║
║  📝 Features:                                              ║
║     ✓ Prescriptions (Role-based)                           ║
║     ✓ Medicine Reminders & Pre-booking                     ║
║     ✓ Appointments                                         ║
║     ✓ Telemedicine (WebRTC)                                ║
║     ✓ Health Chatbot                                       ║
║     ✓ Emergency Alerts                                     ║
║     ✓ Offline Support (PWA)                                ║
║                                                            ║
║  🛑 To stop: Press Ctrl+C                                  ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
    `);
});
