# MediBridge - Smart Rural Healthcare Access Platform

A Progressive Web Application (PWA) for rural healthcare access, enabling patients and healthcare providers to connect through appointments, telemedicine, emergency alerts, and health assistance.

## Features

✅ **User Authentication**
- Patient and Healthcare Provider roles
- Local authentication with session management
- Secure user profiles

✅ **Patient Management**
- Add and manage patient records
- Track medical history and diagnoses
- Search and view patient information
- Healthcare providers can manage their patient list

✅ **Appointment System**
- Book appointments with flexible scheduling
- Multiple appointment types (In-Person, Telemedicine, Voice Call)
- Appointment history and filtering
- Cancel and reschedule options

✅ **Telemedicine Support**
- WebRTC-based peer-to-peer video/voice calls
- Call history tracking
- Audio and video toggle controls
- Fallback chat option

✅ **Emergency Button**
- One-click emergency alerts
- Location sharing (with permission)
- Notification to nearby healthcare providers
- Emergency history tracking

✅ **Health Chatbot**
- AI-powered health Q&A assistant
- Common health concerns database
- Chat history in LocalStorage
- 24/7 health guidance

✅ **Progressive Web App**
- Offline functionality
- Service Worker caching
- Installable to home screen
- Push notifications
- Responsive mobile-first design

✅ **Appointment History**
- View all appointments and emergencies
- Filter by status (upcoming, past, completed)
- Download appointment records
- Export appointment summaries

✅ **User Profiles**
- Edit profile information
- Data export functionality
- Account statistics
- Personal information management

## Demo Credentials

### Patient Account
- **Username:** patient1
- **Password:** password123
- **Role:** Patient

### Healthcare Provider Account
- **Username:** doctor1
- **Password:** password123
- **Role:** Healthcare Provider

## Project Structure

```
medibridge/
├── index.html              # Main HTML file - all pages
├── css/
│   ├── style.css          # Global styles (1200+ lines)
│   ├── responsive.css     # Mobile/tablet responsive design
│   └── themes.css         # Dark mode & theme variations
├── js/
│   ├── storage.js         # LocalStorage management & data persistence
│   ├── auth.js            # Authentication & user management
│   ├── app.js             # Main app controller & navigation
│   ├── patients.js        # Patient management functionality
│   ├── appointments.js    # Appointment booking & management
│   ├── telemedicine.js    # WebRTC call interface
│   ├── emergency.js       # Emergency alert system
│   ├── chatbot.js         # Health chatbot Q&A
│   ├── history.js         # Appointment history & records
│   ├── profile.js         # User profile management
│   └── notifications.js   # Notifications & PWA alerts
├── manifest.json          # PWA manifest file
├── service-worker.js      # Offline support & caching
└── README.md              # Documentation
```

## Technologies Used

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (no frameworks)
- **Storage:** LocalStorage (client-side data persistence)
- **Communication:** WebRTC (peer-to-peer calls)
- **PWA:** Service Workers, Manifest.json, Notifications API
- **Design:** Mobile-first, responsive, accessible

## Getting Started

### Installation

1. Clone or download the repository
2. Open `index.html` in a modern web browser
3. Register as a Patient or Healthcare Provider
4. Start using MediBridge!

### Running Locally

```bash
# If using a local server (recommended for testing PWA features)
python -m http.server 8000
# Then navigate to http://localhost:8000
```

### Testing on Mobile

1. Open the app on a mobile device
2. Tap the menu button to add to home screen
3. Install as a PWA application
4. Use offline when needed

## Browser Requirements

- Modern browser with ES6 support
- Service Worker support
- MediaDevices API (for video calls)
- Geolocation API (optional, for emergency location)

**Supported Browsers:**
- Chrome 51+
- Firefox 55+
- Safari 11.1+
- Edge 15+

## Features Breakdown

### Authentication System
- Secure username/email and password login
- Role-based access (Patient vs Provider)
- Session management with LocalStorage
- Demo accounts for testing

### Patient Management
- Create and edit patient profiles
- Store medical history and diagnoses
- Search patients by name, phone, email
- Provider dashboard for managing patients
- Patient appointment tracking

### Appointment Booking
- Date/time picker for flexible scheduling
- Multiple appointment types
- Automatic slot generation
- Patient/provider matching
- Appointment status tracking (Scheduled, Completed, Cancelled)

### Telemedicine
- WebRTC peer-to-peer video calls
- Audio-only voice call option
- Call controls (mute, video toggle)
- Call history and records
- Browser compatibility fallback

### Emergency System
- Prominent emergency button on dashboard
- Geolocation integration
- Emergency alert logging
- Responder tracking
- History of all emergency alerts

### Health Chatbot
- 50+ common health inquiries
- Natural language keyword matching
- Chat history for users
- Export conversation records
- Always-available health guidance

### History & Records
- Comprehensive appointment history
- Filter by status and date
- Emergency alert history
- Export appointment records
- Download data functionality

## Data Storage

All data is stored locally in the browser's LocalStorage:
- Users & authentication
- Patient information
- Appointments
- Emergency alerts
- Chat history

**Note:** Data persists between sessions but is cleared if browser data is deleted.

## Offline Support

The app supports offline functionality through:
- Service Worker caching
- Local data storage
- Offline appointment viewing
- Chat history access

When connection is restored, data syncs automatically.

## Accessibility Features

- High contrast mode available
- Keyboard navigation support
- Reduced motion support
- Touch-friendly interface
- Screen reader compatible
- WCAG 2.1 compliant design

## Development Notes

### Adding New Features

1. Create new module in `/js` folder
2. Add HTML in `index.html` page section
3. Add CSS to `/css` files
4. Include script in HTML `<script>` tags
5. Use storage.js for data persistence

### Extending Storage

```javascript
// Add new data type
storage.addNewData(data);
storage.getNewData();
storage.updateNewData(id, updates);
```

### Adding Chatbot Responses

Edit `chatbot.js` `initializeQA()` method to add Q&A pairs.

## Future Enhancements

- Backend API integration
- Database synchronization
- Real-time notifications
- Video recording
- AI-powered health analysis
- Multi-language support
- Payment integration
- Doctor reviews/ratings

## Security Notes

**Current Implementation (Demo/Prototype):**
- Client-side authentication only
- LocalStorage data storage
- No encryption
- Suitable for prototyping only

**Production Recommendations:**
- Implement backend authentication
- Use secure session tokens
- Encrypt sensitive data
- Use HTTPS/SSL
- Implement role-based access control
- Add rate limiting
- Regular security audits

## Testing Checklist

- ✅ Login/Register functionality
- ✅ Patient list management
- ✅ Appointment booking
- ✅ Appointment filtering and search
- ✅ Emergency button functionality
- ✅ Chatbot Q&A
- ✅ Profile editing
- ✅ Data export
- ✅ Offline access (with Service Worker)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ PWA installation

## Support & Feedback

For issues or suggestions, please check the console for error messages and verify:
1. Browser compatibility
2. LocalStorage availability
3. Camera/microphone permissions (for calls)
4. JavaScript enabled

## License

MediBridge - Smart Rural Healthcare Access Platform
Created for healthcare accessibility in rural areas.

## Version

**Current Version:** 1.0.0
**Last Updated:** March 2025

---

**Thank you for using MediBridge! Connecting healthcare to everyone, everywhere.**
