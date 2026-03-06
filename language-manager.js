// Language Translation System for MediBridge
// மெடிபிரிஜ் மொழி மொழிபெயர்ப்பு

const LANGUAGE_TRANSLATIONS = {
    'en': {
        // Navigation
        'nav_home': 'Home',
        'nav_profile': 'Profile',
        'nav_appointments': 'Appointments',
        'nav_patients': 'Patients',
        'nav_history': 'History',
        'nav_logout': 'Logout',

        // Login/Register
        'page_title': 'MediBridge - Smart Rural Healthcare Access Platform',
        'login_heading': 'Login',
        'register_heading': 'Register',
        'username': 'Username',
        'email': 'Email',
        'password': 'Password',
        'role': 'I am a:',
        'patient_role': 'Patient',
        'provider_role': 'Healthcare Provider',
        'login_btn': 'Login',
        'register_btn': 'Register',
        'toggle_register': 'Don\'t have an account? Register',
        'toggle_login': 'Already have an account? Login',

        // Dashboard
        'welcome': 'Welcome to MediBridge',
        'dashboard': 'Dashboard',
        'quick_actions': 'Quick Actions',
        'manage_patients': 'Manage Patients',
        'schedule_appointment': 'Schedule Appointment',
        'health_chatbot': 'Health Chatbot',
        'view_history': 'View History',
        'e_prescription': 'E-Prescription',
        'medicine_status': 'Medicine Status',
        'prebook_medicines': 'Pre-book Medicines',

        // Appointments
        'appointments': 'Appointments',
        'appointment_date': 'Date',
        'appointment_time': 'Time',
        'appointment_doctor': 'Doctor',
        'appointment_type': 'Type',
        'appointment_reason': 'Reason',
        'book_appointment': 'Book Appointment',
        'upcoming_appointments': 'Upcoming Appointments',

        // Prescriptions
        'prescriptions': 'Prescriptions',
        'my_prescriptions': 'My E-Prescriptions',
        'prescriptions_created': 'E-Prescriptions I Created',
        'create_prescription': 'Create E-Prescription',
        'patient_name': 'Patient Name',
        'patient_age': 'Age',
        'diagnosis': 'Diagnosis',
        'medications': 'Medications/Drugs',
        'doctor_name': 'Doctor Name',
        'license_no': 'License No',
        'download_pdf': 'Download PDF',
        'view_details': 'View Details',
        'delete': 'Delete',

        // Medicines
        'medicine_status': 'Medicine Status & Refill Tracker',
        'add_medicine': 'Add Medicine Purchase',
        'medicine_name': 'Medicine Name',
        'dosage': 'Dosage',
        'quantity': 'Quantity',
        'purchase_date': 'Purchase Date',
        'expiry_date': 'Expiry Date',
        'record_purchase': 'Record Purchase',

        // Profile
        'profile': 'Profile',
        'personal_info': 'Personal Information',
        'member_since': 'Member Since',
        'phone': 'Phone',
        'address': 'Address',
        'specialization': 'Specialization',
        'account_stats': 'Account Statistics',

        // Buttons
        'save': 'Save',
        'cancel': 'Cancel',
        'close': 'Close',
        'submit': 'Submit',
        'search': 'Search',
        'add': 'Add',
        'edit': 'Edit',
        'update': 'Update',
        'yes': 'Yes',
        'no': 'No',

        // Messages
        'loading': 'Loading...',
        'success': 'Success!',
        'error': 'Error',
        'warning': 'Warning',
        'no_data': 'No data found',
    },

    'ta': {
        // Navigation
        'nav_home': 'முகப்பு',
        'nav_profile': 'சுயவிவரம்',
        'nav_appointments': 'சந்திப்புகள்',
        'nav_patients': 'நோயாளிகள்',
        'nav_history': 'வரலாறு',
        'nav_logout': 'வெளியேறு',

        // Login/Register
        'page_title': 'மெடிபிரிஜ் - ஸ்மார்ட் கிராமப்புற சுகாதார அணுகல் தளம்',
        'login_heading': 'உள்நுழைவு',
        'register_heading': 'பதிவு செய்யவும்',
        'username': 'வகைப்பட்ட பெயர்',
        'email': 'மின்னஞ்சல்',
        'password': 'கடவுச்சொல்',
        'role': 'நான்:',
        'patient_role': 'நோயாளி',
        'provider_role': 'சுகாதார வழங்குநர்',
        'login_btn': 'உள்நுழைவு',
        'register_btn': 'பதிவு செய்யவும்',
        'toggle_register': 'ஒரு கணக்கு இல்லையா? பதிவு செய்யவும்',
        'toggle_login': 'ஈடாக ஒரு கணக்கு உள்ளது? உள்நுழைவு',

        // Dashboard
        'welcome': 'மெடிபிரிஜுக்கு வரவேற்கிறோம்',
        'dashboard': 'டாஷ்போர்ড்',
        'quick_actions': 'விரைவு செயல்கள்',
        'manage_patients': 'நோயாளிகளை நிர்வகிக்கவும்',
        'schedule_appointment': 'சந்திப்பு திட்டமிடவும்',
        'health_chatbot': 'சுகாதார சாட்போட்',
        'view_history': 'வரலாறு பார்க்கவும்',
        'e_prescription': 'ই-பரிந்துரை',
        'medicine_status': 'மருந்து நிலை',
        'prebook_medicines': 'மருந்துகள் முன்கூட்டியே புக்க செய்யவும்',

        // Appointments
        'appointments': 'சந்திப்புகள்',
        'appointment_date': 'திகதி',
        'appointment_time': 'நேரம்',
        'appointment_doctor': 'மருத்துவர்',
        'appointment_type': 'வகை',
        'appointment_reason': 'காரணம்',
        'book_appointment': 'சந்திப்பு புக்க செய்யவும்',
        'upcoming_appointments': 'வரவிருக்கும் சந்திப்புகள்',

        // Prescriptions
        'prescriptions': 'பரிந்துरைகள்',
        'my_prescriptions': 'என் ই-பரிந்துரைகள்',
        'prescriptions_created': 'நான் உருவாக்கிய ई-பरिश्रैंक',
        'create_prescription': 'ई-परिश्रैंक உருவாக்கவும்',
        'patient_name': 'நோயாளியின் பெயர்',
        'patient_age': 'வயது',
        'diagnosis': 'நோய் தீர்மானம்',
        'medications': 'மருந்துகள்/மედிசின்',
        'doctor_name': 'மருத்துவர் பெயர்',
        'license_no': 'உரிமை எண்',
        'download_pdf': 'PDF பதிவிறக்கவும்',
        'view_details': 'விவரங்களைப் பார்க்கவும்',
        'delete': 'நீக்கவும்',

        // Medicines
        'medicine_status': 'மருந்து நிலை & மீட்டெடுப்பு ட்র்যாக்கர்',
        'add_medicine': 'மருந்து கொள்முதல் சேர்க்கவும்',
        'medicine_name': 'மருந்தின் பெயர்',
        'dosage': 'மாত்திரை',
        'quantity': 'அளவு',
        'purchase_date': 'கொள்முதல் தேதி',
        'expiry_date': 'பதவி நீக்கம் தேதி',
        'record_purchase': 'கொள்முதல் பதிவு செய்யவும்',

        // Profile
        'profile': 'சுயவிவரம்',
        'personal_info': 'தனிப்பட்ட தகவல்',
        'member_since': 'உறுப்பினர் முதல்',
        'phone': 'தொலைபேசி',
        'address': 'முகவரி',
        'specialization': 'சிறப்பு',
        'account_stats': 'கணக்கு புள்ளிவிவரங்கள்',

        // Buttons
        'save': 'சேமிக்கவும்',
        'cancel': 'ரத்து செய்யவும்',
        'close': 'மூடவும்',
        'submit': 'சமர்ப்பிக்கவும்',
        'search': 'தேடு',
        'add': 'சேர்க்க',
        'edit': 'திருத்தவும்',
        'update': 'புதுப்பிக்கவும்',
        'yes': 'ஆம்',
        'no': 'இல்லை',

        // Messages
        'loading': 'ஏற்றுதல்...',
        'success': 'வெற்றி!',
        'error': 'பிழை',
        'warning': 'எச்சரிக்கை',
        'no_data': 'தரவு கண்டறியப்படவில்லை',
    }
};

// Language Manager Class
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('selectedLanguage') || 'en';
        // Start with basic translations
        this.translations = LANGUAGE_TRANSLATIONS;

        // Merge comprehensive translations if available
        if (typeof COMPREHENSIVE_LANGUAGE_TRANSLATIONS !== 'undefined') {
            this.mergeTranslations(COMPREHENSIVE_LANGUAGE_TRANSLATIONS);
        }
    }

    mergeTranslations(newTranslations) {
        // Merge new translations into existing ones
        for (const lang in newTranslations) {
            if (!this.translations[lang]) {
                this.translations[lang] = {};
            }
            // Merge all keys, giving priority to new translations
            Object.assign(this.translations[lang], newTranslations[lang]);
        }
    }

    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('selectedLanguage', lang);
            this.applyTranslations();
            return true;
        }
        return false;
    }

    getTranslation(key) {
        return this.translations[this.currentLanguage][key] ||
               this.translations['en'][key] ||
               key;
    }

    applyTranslations() {
        // Translate all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);

            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });

        // Translate all elements with data-i18n-title attribute
        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            const translation = this.getTranslation(key);
            element.title = translation;
        });

        // Update direction for Tamil (right-to-left if needed)
        if (this.currentLanguage === 'ta') {
            document.documentElement.lang = 'ta';
            document.body.style.fontFamily = 'Arial, "Tamil Font", sans-serif';
        } else {
            document.documentElement.lang = 'en';
            document.body.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
        }
    }
}

// Initialize language manager globally
const languageManager = new LanguageManager();

// Global function to change language
window.changeWebsiteLanguage = function(lang) {
    languageManager.setLanguage(lang);
    window.app?.showToast('success', `✅ Language changed to ${lang.toUpperCase()}`);
};

// Apply translations on page load
document.addEventListener('DOMContentLoaded', () => {
    languageManager.applyTranslations();
});

console.log('✅ Language Translation System initialized');
