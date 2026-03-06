// MediBridge - Chatbot Module

class HealthChatbot {
    constructor() {
        this.qa = this.initializeQA();
        this.setupListeners();
    }

    initializeQA() {
        return{
            'fever': 'A fever usually indicates your body is fighting an infection. Stay hydrated, rest, and monitor your temperature. Seek medical attention if fever exceeds 103°F (39.4°C) or persists beyond 3 days.',
            'headache': 'Headaches can have many causes. Try resting in a dark room, staying hydrated, and using over-the-counter pain relievers. If accompanied by stiff neck, vision changes, or severe pain, seek immediate medical help.',
            'cough': 'Coughs can be due to various causes. Drink warm liquids, use honey or cough drops, and get adequate rest. If cough persists more than a week or you\'re coughing blood, consult a doctor.',
            'cold': 'Common colds usually resolve on their own. Rest, stay hydrated, eat nutritious food, and use saline nasal drops. Most symptoms improve within 7-10 days.',
            'flu': 'Flu symptoms include fever, body aches, and fatigue. Stay home, rest, and hydrate well. Antiviral medications may help if started early. Seek medical attention if symptoms worsen.',
            'sore throat': 'For a sore throat, try warm salt water gargles, throat lozenges, and warm beverages. Avoid smoking and secondhand smoke. See a doctor if pain is severe or persists over a week.',
            'blood pressure': 'Monitor your blood pressure regularly. Keep sodium intake low, exercise regularly, manage stress, and take prescribed medications as directed. Consult your doctor for personalized advice.',
            'diabetes': 'Manage diabetes through diet, exercise, and medication. Check blood sugar levels as recommended, maintain a healthy weight, and attend regular doctor visits. Emergency help needed if blood sugar is extremely high or low.',
            'heart pain': 'Chest pain can be serious. If experiencing chest pain, shortness of breath, or arm pain, call emergency services immediately. Do not ignore cardiac symptoms.',
            'appointment': 'To book an appointment, navigate to the Appointments section and click "Book Appointment". Select your preferred date, time, and consultation type.',
            'emergency': 'For emergencies, click the red "🚨 EMERGENCY" button on your dashboard. This will alert nearby healthcare providers to your location.',
            'telemedicine': 'Telemedicine consultations are available through video or voice call. Book an appointment selecting "Telemedicine" or "Voice Call" as the type.',
            'default': 'I\'m here to help! Ask me about common health concerns, how to use MediBridge, or book an appointment. For emergency medical conditions, click the Emergency button.'
        };
    }

    setupListeners() {
        document.getElementById('chatbotForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleUserMessage();
        });

        document.getElementById('closeChatbot')?.addEventListener('click', () => {
            this.closeChatbot();
        });
    }

    handleUserMessage() {
        const input = document.getElementById('chatbotInput');
        const message = input.value.trim();

        if (!message) return;

        // Add user message
        this.addMessage(message, 'user');
        input.value = '';           `

        // Store in history
        storage.addChatbotMessage({ sender: 'user', text: message });

        // Get and send bot response
        setTimeout(() => {
            const response = this.generateResponse(message);
            this.addMessage(response, 'bot');
            storage.addChatbotMessage({ sender: 'bot', text: response });
        }, 500);
    }

    addMessage(text, sender) {
        const messagesDiv = document.getElementById('chatbotMessages');
        const messageEl = document.createElement('div');
        messageEl.className = `chatbot-message ${sender}`;
        messageEl.textContent = text;
        messagesDiv.appendChild(messageEl);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    generateResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();

        // Check for keyword matches
        for (const [keyword, response] of Object.entries(this.qa)) {
            if (lowerMessage.includes(keyword)) {
                return response;
            }
        }

        // Default response
        return this.qa.default;
    }

    closeChatbot() {
        document.getElementById('chatbotWidget').classList.add('hidden');
    }

    clearHistory() {
        if (confirm('Clear chat history?')) {
            document.getElementById('chatbotMessages').innerHTML = '';
            storage.clearChatMessages();
            app.showToast('success', 'Chat history cleared');
        }
    }
}

// Initialize chatbot
const chatbot = new HealthChatbot();

// Open chatbot widget click handler
function openChatbot() {
    const widget = document.getElementById('chatbotWidget');
    if (widget) {
        widget.classList.remove('hidden');
        document.getElementById('chatbotInput')?.focus();
    }
}

// Initial greeting in chatbot
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const messagesDiv = document.getElementById('chatbotMessages');
        if (messagesDiv && messagesDiv.children.length === 0) {
            const greeting = document.createElement('div');
            greeting.className = 'chatbot-message bot';
            greeting.textContent = 'Hi! I\'m your MediBridge Health Assistant. Ask me about health concerns, symptoms, or how to use the platform. How can I help you today?';
            messagesDiv.appendChild(greeting);
        }
    }, 1000);
});
