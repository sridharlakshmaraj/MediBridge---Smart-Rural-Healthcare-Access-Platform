// MediBridge - Multi-Language Medical Chatbot Training Module

/**
 * SYNTAX FOR MULTI-LANGUAGE MEDICAL CHATBOT TRAINING
 *
 * This module provides a standardized way to train the chatbot
 * with medical symptom responses in multiple languages.
 */

class MultilingualMedicalChatbot {
    constructor(defaultLanguage = 'en') {
        this.defaultLanguage = defaultLanguage;
        this.supportedLanguages = ['en', 'es', 'fr', 'de', 'hi', 'pt', 'ja', 'zh', 'ta'];
        this.medicalDatabase = this.initializeMedicalDatabase();

        // Merge Tamil database if available
        if (typeof TAMIL_MEDICAL_DATABASE !== 'undefined') {
            for (const key in TAMIL_MEDICAL_DATABASE) {
                if (!this.medicalDatabase[key]) {
                    this.medicalDatabase[key] = TAMIL_MEDICAL_DATABASE[key];
                } else {
                    // Merge Tamil responses into existing conditions
                    if (TAMIL_MEDICAL_DATABASE[key].responses && TAMIL_MEDICAL_DATABASE[key].responses.ta) {
                        this.medicalDatabase[key].responses.ta = TAMIL_MEDICAL_DATABASE[key].responses.ta;
                    }
                }
            }
        }

        // Merge other external databases if available
        if (typeof COMPREHENSIVE_MEDICAL_DATABASE !== 'undefined') {
            Object.assign(this.medicalDatabase, COMPREHENSIVE_MEDICAL_DATABASE);
        }
        if (typeof ENHANCED_MEDICAL_DATABASE !== 'undefined') {
            Object.assign(this.medicalDatabase, ENHANCED_MEDICAL_DATABASE);
        }
        if (typeof NORMAL_MEDICAL_CONDITIONS !== 'undefined') {
            Object.assign(this.medicalDatabase, NORMAL_MEDICAL_CONDITIONS);
        }

        this.currentLanguage = defaultLanguage;
    }

    /**
     * TRAINING SYNTAX FORMAT:
     *
     * Each medical symptom/condition follows this structure:
     *
     * {
     *   id: "condition_code",
     *   keywords: ["keyword1", "keyword2", ...],
     *   severity: "mild|moderate|severe|emergency",
     *   responses: {
     *     "en": { title: "...", description: "...", advice: "...", emergency: false },
     *     "es": { title: "...", description: "...", advice: "...", emergency: false },
     *     "fr": { ... },
     *     ...
     *   }
     * }
     */

    initializeMedicalDatabase() {
        return {
            'fever': {
                id: 'fever_001',
                keywords: ['fever', 'high temperature', 'burning', 'hot', 'thermal'],
                severity: 'moderate',
                emergency: false,
                responses: {
                    'en': {
                        title: '🌡️ Fever',
                        description: 'Fever is a temporary increase in body temperature, usually caused by infection.',
                        advice: 'Stay hydrated, rest, and monitor temperature. If fever exceeds 103°F (39.4°C) or lasts over 3 days, see a doctor.',
                        remedies: ['Drink fluids', 'Rest well', 'Cool compress', 'Light clothing'],
                        emergency: false
                    },
                    'es': {
                        title: '🌡️ Fiebre',
                        description: 'La fiebre es un aumento temporal de la temperatura corporal, generalmente causado por una infección.',
                        advice: 'Manténgase hidratado, descanse y controle la temperatura. Si la fiebre supera 103°F (39,4°C) o dura más de 3 días, consulte a un médico.',
                        remedies: ['Beba líquidos', 'Descanse bien', 'Compresas frías', 'Ropa ligera'],
                        emergency: false
                    },
                    'fr': {
                        title: '🌡️ Fièvre',
                        description: 'La fièvre est une augmentation temporaire de la température corporelle, généralement causée par une infection.',
                        advice: 'Restez hydraté, reposez-vous et surveillez la température. Si la fièvre dépasse 103°F (39,4°C) ou dure plus de 3 jours, consulter un médecin.',
                        remedies: ['Boire des liquides', 'Bien se reposer', 'Compresse froide', 'Vêtements légers'],
                        emergency: false
                    },
                    'de': {
                        title: '🌡️ Fieber',
                        description: 'Fieber ist ein vorübergehender Anstieg der Körpertemperatur, meist durch eine Infektion verursacht.',
                        advice: 'Bleiben Sie hydratisiert, ruhen Sie sich aus und überwachen Sie die Temperatur. Wenn Fieber 103°F (39,4°C) übersteigt oder länger als 3 Tage anhält, konsultieren Sie einen Arzt.',
                        remedies: ['Flüssigkeiten trinken', 'Gut ausruhen', 'Kalter Umschlag', 'Leichte Kleidung'],
                        emergency: false
                    },
                    'hi': {
                        title: '🌡️ बुखार',
                        description: 'बुखार शरीर के तापमान में अस्थायी वृद्धि है, आमतौर पर संक्रमण के कारण होती है।',
                        advice: 'हाइड्रेटेड रहें, आराम करें और तापमान की निगरानी करें। यदि बुखार 103°F (39.4°C) से अधिक हो या 3 दिन से अधिक चले, तो डॉक्टर से मिलें।',
                        remedies: ['तरल पदार्थ पिएं', 'अच्छी तरह आराम करें', 'ठंडी पट्टी', 'हल्के कपड़े'],
                        emergency: false
                    },
                    'pt': {
                        title: '🌡️ Febre',
                        description: 'Febre é um aumento temporário da temperatura corporal, geralmente causado por infecção.',
                        advice: 'Mantenha-se hidratado, descanse e monitore a temperatura. Se a febre ultrapassar 103°F (39,4°C) ou durar mais de 3 dias, consulte um médico.',
                        remedies: ['Beber líquidos', 'Descansar bem', 'Compressas frias', 'Roupas leves'],
                        emergency: false
                    },
                    'ja': {
                        title: '🌡️ 発熱',
                        description: '発熱は体温の一時的な上昇であり、通常は感染によって引き起こされます。',
                        advice: '水分補給を保ち、休息し、体温を監視してください。発熱が103°F（39.4°C）を超えるか、3日以上続く場合は、医師に相談してください。',
                        remedies: ['液体を飲む', 'よく休む', '冷湿布', '軽い服装'],
                        emergency: false
                    },
                    'zh': {
                        title: '🌡️ 发烧',
                        description: '发烧是体温的暂时升高，通常由感染引起。',
                        advice: '保持水分，休息并监测温度。如果发烧超过103°F（39.4°C）或持续超过3天，请咨询医生。',
                        remedies: ['喝液体', '充分休息', '冷敷', '轻薄衣服'],
                        emergency: false
                    }
                }
            },

            'headache': {
                id: 'headache_001',
                keywords: ['headache', 'head pain', 'migraine', 'throbbing', 'tension'],
                severity: 'mild',
                emergency: false,
                responses: {
                    'en': {
                        title: '🤕 Headache',
                        description: 'Headaches can result from various causes including tension, dehydration, stress, or illness.',
                        advice: 'Rest in a dark, quiet room. Stay hydrated and take over-the-counter pain relievers. If severe or accompanied by other symptoms, seek medical attention.',
                        remedies: ['Rest quietly', 'Drink water', 'Dark environment', 'Pain reliever'],
                        emergency: false
                    },
                    'es': {
                        title: '🤕 Dolor de cabeza',
                        description: 'Los dolores de cabeza pueden resultar de varias causas incluyendo tensión, deshidratación, estrés o enfermedad.',
                        advice: 'Descansa en una habitación oscura y tranquila. Mantente hidratado y toma analgésicos de venta libre. Si es intenso, consulta a un médico.',
                        remedies: ['Descansa tranquilo', 'Bebe agua', 'Ambiente oscuro', 'Analgésico'],
                        emergency: false
                    },
                    'fr': {
                        title: '🤕 Mal de tête',
                        description: 'Les maux de tête peuvent résulter de plusieurs causes incluant la tension, la déshydratation, le stress ou une maladie.',
                        advice: 'Reposez-vous dans une pièce sombre et calme. Restez hydraté et prenez des anti-douleurs en vente libre. Si grave, consultez un médecin.',
                        remedies: ['Reposez-vous', 'Buvez de l\'eau', 'Environnement sombre', 'Antalgique'],
                        emergency: false
                    },
                    'hi': {
                        title: '🤕 सिरदर्द',
                        description: 'सिरदर्द कई कारणों से हो सकता है जैसे तनाव, निर्जलीकरण, तनाव या बीमारी।',
                        advice: 'एक अंधेरे, शांत कमरे में आराम करें। हाइड्रेटेड रहें और ओवर-द-काउंटर दर्द निवारक लें।',
                        remedies: ['शांति से आराम करें', 'पानी पिएं', 'अंधेरा वातावरण', 'दर्द निवारक'],
                        emergency: false
                    },
                    'pt': {
                        title: '🤕 Dor de cabeça',
                        description: 'Dores de cabeça podem resultar de várias causas, incluindo tensão, desidratação, estresse ou doença.',
                        advice: 'Descanse em um quarto escuro e silencioso. Mantenha-se hidratado e tome analgésicos sem prescrição. Se grave, consulte um médico.',
                        remedies: ['Descanso tranquilo', 'Beba água', 'Ambiente escuro', 'Analgésico'],
                        emergency: false
                    },
                    'ja': {
                        title: '🤕 頭痛',
                        description: '頭痛は、緊張、脱水、ストレス、または病気など、さまざまな原因によって生じます。',
                        advice: '暗くて静かな部屋で休んでください。水分補給を保ち、市販の鎮痛剤を服用してください。',
                        remedies: ['静かに休む', '水を飲む', '暗い環境', '鎮痛剤'],
                        emergency: false
                    },
                    'zh': {
                        title: '🤕 头痛',
                        description: '头痛可由多种原因引起，包括紧张、脱水、压力或疾病。',
                        advice: '在黑暗、安静的房间休息。保持水分并服用非处方止痛药。如果严重，请咨询医生。',
                        remedies: ['静静休息', '喝水', '暗环境', '止痛药'],
                        emergency: false
                    }
                }
            },

            'chest_pain': {
                id: 'chest_pain_001',
                keywords: ['chest pain', 'chest tightness', 'heart pain', 'pressure'],
                severity: 'severe',
                emergency: true,
                responses: {
                    'en': {
                        title: '⚠️ CHEST PAIN - EMERGENCY',
                        description: 'Chest pain can indicate serious cardiac conditions and requires immediate medical attention.',
                        advice: 'CALL 911 or seek emergency services immediately. Do not ignore chest pain.',
                        remedies: ['Call emergency', 'Sit down', 'Chew aspirin (if safe)', 'Loosen clothing'],
                        emergency: true,
                        urgency: 'CRITICAL'
                    },
                    'es': {
                        title: '⚠️ DOLOR DE PECHO - EMERGENCIA',
                        description: 'El dolor de pecho puede indicar condiciones cardíacas graves y requiere atención médica inmediata.',
                        advice: 'LLAME al 911 o busque servicios de emergencia inmediatamente. No ignore el dolor de pecho.',
                        remedies: ['Llamar emergencia', 'Siéntate', 'Masticar aspirina', 'Aflojar ropa'],
                        emergency: true,
                        urgency: 'CRÍTICO'
                    },
                    'fr': {
                        title: '⚠️ DOULEUR THORACIQUE - URGENCE',
                        description: 'La douleur thoracique peut indiquer des conditions cardiaques graves et nécessite une attention médicale immédiate.',
                        advice: 'APPELEZ le 911 ou cherchez des services d\'urgence immédiatement. Ne pas ignorer les douleurs thoraciques.',
                        remedies: ['Appeler urgence', 'Asseoir', 'Mâcher aspirine', 'Desserrer vêtements'],
                        emergency: true,
                        urgency: 'CRITIQUE'
                    },
                    'hi': {
                        title: '⚠️ सीने में दर्द - आपातकाल',
                        description: 'सीने में दर्द गंभीर हृदय स्थितियों का संकेत दे सकता है और तत्काल चिकित्सा ध्यान की आवश्यकता है।',
                        advice: 'तुरंत 911 को कॉल करें या आपातकालीन सेवाएं लें।',
                        remedies: ['आपातकाल कॉल करें', 'बैठ जाएं', 'एस्पिरिन चबाएं', 'कपड़े ढीले करें'],
                        emergency: true,
                        urgency: 'गंभीर'
                    },
                    'pt': {
                        title: '⚠️ DOR NO PEITO - EMERGÊNCIA',
                        description: 'Dor no peito pode indicar condições cardíacas graves e requer atenção médica imediata.',
                        advice: 'LIGUE para 911 ou procure serviços de emergência imediatamente. Não ignore dor no peito.',
                        remedies: ['Ligar emergência', 'Sentar', 'Mastigar aspirina', 'Afrouxar roupas'],
                        emergency: true,
                        urgency: 'CRÍTICO'
                    },
                    'ja': {
                        title: '⚠️ 胸痛 - 緊急',
                        description: '胸痛は深刻な心臓疾患の兆候である可能性があり、直ちに医療の注意が必要です。',
                        advice: '911に電話するか、直ちに緊急サービスを受けてください。胸痛を無視しないでください。',
                        remedies: ['緊急電話', '座る', 'アスピリンを噛む', 'リラックスして'],
                        emergency: true,
                        urgency: '重大'
                    },
                    'zh': {
                        title: '⚠️ 胸痛 - 紧急',
                        description: '胸痛可能表示严重的心脏病,需要立即就医。',
                        advice: '立即拨打911或寻求紧急服务。不要忽视胸痛。',
                        remedies: ['拨打紧急', '坐下', '咀嚼阿司匹林', '放松衣服'],
                        emergency: true,
                        urgency: '严重'
                    }
                }
            },

            'cough': {
                id: 'cough_001',
                keywords: ['cough', 'coughing', 'respiratory', 'throat', 'persistent cough'],
                severity: 'mild',
                emergency: false,
                responses: {
                    'en': {
                        title: '🤧 Cough',
                        description: 'Cough is a reflex action to clear airways. Can be caused by cold, flu, or throat irritation.',
                        advice: 'Drink warm liquids, use honey or cough drops, and rest. If cough persists over a week or involves blood, consult a doctor.',
                        remedies: ['Warm liquids', 'Honey', 'Cough drops', 'Rest'],
                        emergency: false
                    },
                    'es': {
                        title: '🤧 Tos',
                        description: 'La tos es una acción refleja para limpiar las vías respiratorias. Puede ser causada por resfriado, gripe o irritación de garganta.',
                        advice: 'Bebe líquidos cálidos, usa miel o pastillas para la tos, y descansa. Si la tos persiste más de una semana, consulta a un médico.',
                        remedies: ['Líquidos cálidos', 'Miel', 'Pastillas para la tos', 'Descanso'],
                        emergency: false
                    },
                    'fr': {
                        title: '🤧 Toux',
                        description: 'La toux est une action réflexe pour dégager les voies respiratoires. Peut être causée par un rhume, la grippe ou une irritation de la gorge.',
                        advice: 'Buvez des liquides chauds, utilisez du miel ou des pastilles pour la toux, et reposez-vous. Si la toux persiste plus d\'une semaine, consultez un médecin.',
                        remedies: ['Liquides chauds', 'Miel', 'Pastilles pour la toux', 'Repos'],
                        emergency: false
                    },
                    'hi': {
                        title: '🤧 खांसी',
                        description: 'खांसी वायु मार्ग को साफ करने के लिए एक सजगता प्रक्रिया है। सर्दी, फ्लू या गले में जलन के कारण हो सकती है।',
                        advice: 'गर्म तरल पदार्थ पिएं, शहद या खांसी की बूंदें का उपयोग करें, और आराम करें।',
                        remedies: ['गर्म तरल', 'शहद', 'खांसी की बूंदें', 'आराम'],
                        emergency: false
                    },
                    'pt': {
                        title: '🤧 Tosse',
                        description: 'Tosse é uma ação reflexiva para limpar as vias aéreas. Pode ser causada por resfriado, gripe ou irritação na garganta.',
                        advice: 'Beba líquidos quentes, use mel ou pastilhas para tosse e descanse. Se a tosse persistir por mais de uma semana, consulte um médico.',
                        remedies: ['Líquidos quentes', 'Mel', 'Pastilhas para tosse', 'Descanso'],
                        emergency: false
                    },
                    'ja': {
                        title: '🤧 咳',
                        description: '咳は気道を透き通す反射作用です。風邪、インフルエンザ、または喉の刺激によって引き起こされます。',
                        advice: '温かい液体を飲み、蜂蜜または咳止めドロップを使用し、休んでください。',
                        remedies: ['温かい液体', '蜂蜜', '咳止めドロップ', '休息'],
                        emergency: false
                    },
                    'zh': {
                        title: '🤧 咳嗽',
                        description: '咳嗽是清理气道的反射作用。可由感冒、流感或喉咙刺激引起。',
                        advice: '喝温热液体，使用蜂蜜或止咳糖,并休息。如果咳嗽持续超过一周，请咨询医生。',
                        remedies: ['温热液体', '蜂蜜', '止咳糖', '休息'],
                        emergency: false
                    }
                }
            },

            'sore_throat': {
                id: 'sore_throat_001',
                keywords: ['sore throat', 'throat pain', 'difficulty swallowing', 'pharyngitis'],
                severity: 'mild',
                emergency: false,
                responses: {
                    'en': {
                        title: '🫀 Sore Throat',
                        description: 'Sore throat is usually caused by viral or bacterial infection. Often accompanies cold or flu.',
                        advice: 'Gargle with warm salt water, drink throat lozenges, avoid smoking. If accompanied by high fever or difficulty breathing, see a doctor.',
                        remedies: ['Salt water gargle', 'Throat lozenges', 'Warm beverages', 'Avoid smoking'],
                        emergency: false
                    },
                    'es': {
                        title: '🫀 Dolor de garganta',
                        description: 'El dolor de garganta generalmente es causado por infección viral o bacteriana. A menudo acompaña al resfriado o la gripe.',
                        advice: 'Haz gárgaras con agua tibia con sal, bebe pastillas para la garganta, evita fumar.',
                        remedies: ['Gárgaras con agua salada', 'Pastillas para garganta', 'Bebidas calientes', 'Evitar fumar'],
                        emergency: false
                    },
                    'fr': {
                        title: '🫀 Mal de gorge',
                        description: 'Le mal de gorge est généralement causé par une infection virale ou bactérienne. Accompagne souvent le rhume ou la grippe.',
                        advice: 'Gargarisez-vous avec de l\'eau tiède salée, buvez des pastilles pour la gorge, évitez de fumer.',
                        remedies: ['Gargarisme eau salée', 'Pastilles gorge', 'Boissons chaudes', 'Éviter fumer'],
                        emergency: false
                    },
                    'hi': {
                        title: '🫀 गले में खराश',
                        description: 'गले में खराश आमतौर पर वायरल या बैक्टीरियल संक्रमण के कारण होती है।',
                        advice: 'गर्म नमक के पानी से गरारे करें, गले की गोलियां लें, धूम्रपान से बचें।',
                        remedies: ['नमक जल गरारे', 'गले की गोलियां', 'गर्म पेय', 'धूम्रपान से बचें'],
                        emergency: false
                    },
                    'pt': {
                        title: '🫀 Dor de garganta',
                        description: 'A dor de garganta geralmente é causada por infecção viral ou bacteriana. Geralmente acompanha resfriado ou gripe.',
                        advice: 'Faça gargarejo com água morna salgada, beba pastilhas para garganta, evite fumar.',
                        remedies: ['Gargarejo água salgada', 'Pastilhas garganta', 'Bebidas quentes', 'Evite fumar'],
                        emergency: false
                    },
                    'ja': {
                        title: '🫀 喉の痛み',
                        description: '喉の痛みは通常、ウイルス性または細菌性感染が原因です。風邪やインフルエンザを伴うことがあります。',
                        advice: '温かい塩水でうがいをし、喉のドロップを飲み、喫煙を避けてください。',
                        remedies: ['塩水うがい', '喉のドロップ', '温かい飲料', '喫煙を避ける'],
                        emergency: false
                    },
                    'zh': {
                        title: '🫀 喉咙痛',
                        description: '喉咙痛通常由病毒或细菌感染引起。通常伴随感冒或流感。',
                        advice: '用温盐水漱口，喝喉糖,避免吸烟。如果伴有高烧或呼吸困难，请就医。',
                        remedies: ['温盐水漱口', '喉糖', '温热饮料', '避免吸烟'],
                        emergency: false
                    }
                }
            }
        };
    }

    /**
     * GET RESPONSE IN SPECIFIC LANGUAGE
     * Syntax: chatbot.getResponse(symptom, language)
     */
    getResponse(symptom, language = this.defaultLanguage) {
        const condition = this.medicalDatabase[symptom.toLowerCase()];

        if (!condition) {
            return this.getDefaultResponse(language);
        }

        if (!condition.responses[language]) {
            return this.getResponse(symptom, this.defaultLanguage);
        }

        return condition.responses[language];
    }

    /**
     * GET ALL INFO FOR A SYMPTOM
     * Syntax: chatbot.getSymptomInfo(symptom, language)
     */
    getSymptomInfo(symptom, language = this.defaultLanguage) {
        const condition = this.medicalDatabase[symptom.toLowerCase()];

        if (!condition) {
            return null;
        }

        return {
            id: condition.id,
            keywords: condition.keywords,
            severity: condition.severity,
            emergency: condition.emergency,
            response: condition.responses[language] || condition.responses[this.defaultLanguage]
        };
    }

    /**
     * SEARCH SYMPTOMS BY KEYWORDS IN MULTIPLE LANGUAGES
     * Syntax: chatbot.searchSymptoms(keyword, language)
     */
    searchSymptoms(keyword, language = this.defaultLanguage) {
        const lowerKeyword = keyword.toLowerCase();
        const results = [];

        for (const [symptomKey, symptom] of Object.entries(this.medicalDatabase)) {
            if (symptom.keywords.some(k => k.toLowerCase().includes(lowerKeyword)) ||
                symptom.responses[language]?.title.toLowerCase().includes(lowerKeyword) ||
                symptom.responses[language]?.description.toLowerCase().includes(lowerKeyword)) {
                results.push({
                    symptom: symptomKey,
                    title: symptom.responses[language]?.title || symptom.responses['en'].title,
                    severity: symptom.severity,
                    emergency: symptom.emergency
                });
            }
        }

        return results;
    }

    /**
     * GET DEFAULT RESPONSE (NOT FOUND)
     */
    getDefaultResponse(language) {
        const defaults = {
            'en': {
                title: 'Symptom Not Found',
                description: 'I could not find information about this symptom.',
                advice: 'Please consult with a healthcare professional for medical advice.',
                emergency: false
            },
            'es': {
                title: 'Síntoma No Encontrado',
                description: 'No pude encontrar información sobre este síntoma.',
                advice: 'Por favor, consulte con un profesional de la salud.',
                emergency: false
            },
            'fr': {
                title: 'Symptôme Non Trouvé',
                description: 'Je n\'ai pas pu trouver d\'informations sur ce symptôme.',
                advice: 'Veuillez consulter un professionnel de la santé.',
                emergency: false
            },
            'hi': {
                title: 'लक्षण नहीं मिला',
                description: 'मुझे इस लक्षण के बारे में जानकारी नहीं मिल सकी।',
                advice: 'कृपया एक स्वास्थ्य पेशेदार से परामर्श लें।',
                emergency: false
            },
            'pt': {
                title: 'Sintoma Não Encontrado',
                description: 'Não consegui encontrar informações sobre este sintoma.',
                advice: 'Por favor, consulte um profissional de saúde.',
                emergency: false
            },
            'ja': {
                title: '症状が見つかりません',
                description: 'この症状に関する情報が見つかりませんでした。',
                advice: 'ヘルスケア専門家にご相談ください。',
                emergency: false
            },
            'zh': {
                title: '症状未找到',
                description: '我找不到关于此症状的信息。',
                advice: '请咨询医疗专业人士。',
                emergency: false
            }
        };

        return defaults[language] || defaults['en'];
    }

    /**
     * CHANGE LANGUAGE
     * Syntax: chatbot.setLanguage('es')
     */
    setLanguage(language) {
        if (this.supportedLanguages.includes(language)) {
            this.currentLanguage = language;
            return true;
        }
        return false;
    }

    /**
     * GET SUPPORTED LANGUAGES
     */
    getSupportedLanguages() {
        return {
            'en': 'English',
            'es': 'Spanish',
            'fr': 'French',
            'de': 'German',
            'hi': 'Hindi',
            'pt': 'Portuguese',
            'ja': 'Japanese',
            'zh': 'Chinese'
        };
    }

    /**
     * ADD NEW SYMPTOM/CONDITION
     * Syntax: chatbot.addSymptom(symptomKey, symptomData)
     */
    addSymptom(symptomKey, symptomData) {
        this.medicalDatabase[symptomKey.toLowerCase()] = symptomData;
        return true;
    }

    /**
     * GET RESPONSE WITH FORMATTED TEXT
     * Syntax: chatbot.getFormattedResponse(symptom, language)
     */
    getFormattedResponse(symptom, language = this.defaultLanguage) {
        const response = this.getResponse(symptom, language);

        return `
${response.title}
${'='.repeat(40)}

📋 Description:
${response.description}

💡 Advice:
${response.advice}

🏥 Remedies:
${response.remedies?.map(r => `  • ${r}`).join('\n') || 'N/A'}

${response.emergency ? '🚨 EMERGENCY: Seek immediate medical attention!' : ''}
        `.trim();
    }
}

// Initialize the multilingual chatbot
const multilingualChatbot = new MultilingualMedicalChatbot('en');
