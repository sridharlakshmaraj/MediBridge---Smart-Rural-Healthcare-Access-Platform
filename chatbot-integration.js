// MediBridge - Multilingual Chatbot Integration Handler

/**
 * Global function to change chatbot language
 * Called from HTML language selector
 */
function changeChatbotLanguage(language) {
    if (multilingualChatbot) {
        multilingualChatbot.setLanguage(language);
        app.showToast('success', `Language changed to ${language.toUpperCase()}`);

        // Clear chat messages when language changes
        document.getElementById('chatbotMessages').innerHTML = '';
    }
}

/**
 * Enhanced Chatbot with Multilingual Support
 * Integrates with the new MultilingualMedicalChatbot class
 */
class EnhancedHealthChatbot {
    constructor() {
        this.multiChatbot = new MultilingualMedicalChatbot('en');
        this.setupListeners();
        this.initializeWelcomeMessage();
    }

    setupListeners() {
        document.getElementById('chatbotForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleUserMessage();
        });

        document.getElementById('closeChatbot')?.addEventListener('click', () => {
            this.closeChatbot();
        });

        // Close chatbot on modal click
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                document.getElementById('chatbotWidget')?.classList.add('hidden');
            }
        });
    }

    initializeWelcomeMessage() {
        const messagesDiv = document.getElementById('chatbotMessages');
        if (messagesDiv && messagesDiv.children.length === 0) {
            setTimeout(() => {
                this.addMessage('👋 Hello! I\'m your Health Assistant. Ask me about symptoms, medical conditions, or general health advice.', 'bot');
            }, 500);
        }
    }

    handleUserMessage() {
        const input = document.getElementById('chatbotInput');
        const message = input.value.trim();

        if (!message) return;

        this.addMessage(message, 'user');
        input.value = '';

        // Simulate thinking
        setTimeout(() => {
            const currentLanguage = document.getElementById('chatbotLanguage')?.value || 'en';
            const response = this.generateResponse(message, currentLanguage);
            this.addMessage(response, 'bot');
        }, 800);
    }

    generateResponse(userMessage, language) {
        // First, try to get response from multilingual database
        let response = this.multiChatbot.getResponse(userMessage, language);

        if (response && response.title !== 'Symptom Not Found') {
            // Format the response nicely
            return this.formatResponse(response);
        }

        // Search for similar symptoms
        const searchResults = this.multiChatbot.searchSymptoms(userMessage, language);

        if (searchResults.length > 0) {
            let resultText = this.getSearchResultsText(searchResults, language);
            return resultText;
        }

        // Return default not found message
        response = this.multiChatbot.getResponse('', language);
        return this.formatResponse(response);
    }

    formatResponse(response) {
        let formatted = `${response.title}\n`;
        formatted += `${'-'.repeat(30)}\n\n`;

        if (response.description) {
            formatted += `📋 ${response.description}\n\n`;
        }

        if (response.advice) {
            formatted += `💡 ${response.advice}\n\n`;
        }

        if (response.remedies && Array.isArray(response.remedies)) {
            formatted += `🏥 Suggestions:\n`;
            response.remedies.forEach(remedy => {
                formatted += `   • ${remedy}\n`;
            });
        }

        if (response.emergency) {
            formatted += `\n🚨 EMERGENCY: Seek immediate medical attention!`;
        }

        return formatted.trim();
    }

    getSearchResultsText(results, language) {
        if (results.length === 0) return 'No results found.';

        let text = 'I found these related conditions:\n';
        results.forEach((result, index) => {
            const severity = this.getSeverityEmoji(result.severity);
            text += `\n${index + 1}. ${severity} ${result.title}`;
            if (result.emergency) {
                text += ' ⚠️ EMERGENCY';
            }
        });

        text += '\n\nPlease ask specifically about one of these conditions for more details.';
        return text;
    }

    getSeverityEmoji(severity) {
        const emojis = {
            'mild': '🟢',
            'moderate': '🟡',
            'severe': '🔴',
            'emergency': '🚨'
        };
        return emojis[severity] || '💙';
    }

    addMessage(text, sender) {
        const messagesDiv = document.getElementById('chatbotMessages');
        if (!messagesDiv) return;

        const messageEl = document.createElement('div');
        messageEl.className = `chatbot-message ${sender}`;
        messageEl.textContent = text;
        messagesDiv.appendChild(messageEl);

        // Auto-scroll to bottom
        messagesDiv.scrollTop = messagesDiv.scrollHeight;

        // Store in chat history
        storage.addChatbotMessage({ sender, text });
    }

    closeChatbot() {
        document.getElementById('chatbotWidget')?.classList.add('hidden');
    }

    openChatbot() {
        document.getElementById('chatbotWidget')?.classList.remove('hidden');
        document.getElementById('chatbotInput')?.focus();
    }
}

// Initialize enhanced chatbot globally
let enhancedChatbot;

document.addEventListener('DOMContentLoaded', () => {
    if (typeof MultilingualMedicalChatbot !== 'undefined') {
        enhancedChatbot = new EnhancedHealthChatbot();
    }
});

// Global function to open chatbot
function openChatbot() {
    if (enhancedChatbot) {
        enhancedChatbot.openChatbot();
    } else {
        const widget = document.getElementById('chatbotWidget');
        if (widget) {
            widget.classList.remove('hidden');
            document.getElementById('chatbotInput')?.focus();
        }
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EnhancedHealthChatbot };
}
