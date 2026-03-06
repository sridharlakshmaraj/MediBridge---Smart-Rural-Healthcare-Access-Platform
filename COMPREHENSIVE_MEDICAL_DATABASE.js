// MediBridge - Comprehensive Medical Symptoms Database
// Complete Medical Issues Training Data - All Categories
// 40+ Medical Conditions with Multilingual Support

const COMPREHENSIVE_MEDICAL_DATABASE = {

    // ============================================================================
    // RESPIRATORY SYSTEM DISEASES
    // ============================================================================

    'cold': {
        id: 'cold_001',
        keywords: ['cold', 'common cold', 'runny nose', 'congestion', 'sneezing'],
        severity: 'mild',
        emergency: false,
        category: 'respiratory',
        responses: {
            'en': {
                title: '🤧 Common Cold',
                description: 'The common cold is a viral infection affecting the upper respiratory tract, causing nasal congestion, cough, and sore throat.',
                advice: 'Rest well, drink warm fluids, use saline nasal drops, and take vitamin C. Most colds resolve in 7-14 days. Seek medical attention if symptoms persist beyond 2 weeks or worsen significantly.',
                remedies: ['Rest', 'Fluids', 'Warm beverages', 'Saline drops', 'Vitamin C', 'Honey lozenges'],
                emergency: false
            },
            'es': {
                title: '🤧 Resfriado Común',
                description: 'El resfriado común es una infección viral que afecta las vías respiratorias superiores, causando congestión nasal, tos y dolor de garganta.',
                advice: 'Descansa bien, bebe líquidos cálidos, usa gotas nasales salinas. La mayoría de los resfriados se resuelven en 7-14 días. Busca atención médica si persisten síntomas.',
                remedies: ['Descanso', 'Líquidos', 'Bebidas calientes', 'Gotas salinas', 'Vitamina C', 'Pastillas de miel'],
                emergency: false
            },
            'fr': {
                title: '🤧 Rhume Banal',
                description: 'Le rhume banal est une infection virale affectant les voies respiratoires supérieures, causant la congestion nasale, la toux et le mal de gorge.',
                advice: 'Reposez-vous bien, buvez des liquides chauds, utilisez des gouttes nasales salines. La plupart des rhumes se résolvent en 7-14 jours.',
                remedies: ['Repos', 'Liquides', 'Boissons chaudes', 'Gouttes salines', 'Vitamine C', 'Pastilles de miel'],
                emergency: false
            },
            'de': {
                title: '🤧 Erkältung',
                description: 'Die Erkältung ist eine virale Infektion der oberen Atemwege, verursacht Nasenverstopfung, Husten und Halsschmerzen.',
                advice: 'Ruhen Sie sich aus, trinken Sie warme Flüssigkeiten, verwenden Sie Salznasentropfen. Die meisten Erkältungen heilen in 7-14 Tagen aus.',
                remedies: ['Ruhe', 'Flüssigkeiten', 'Warme Getränke', 'Salznasentropfen', 'Vitamin C', 'Halsbonbons'],
                emergency: false
            },
            'hi': {
                title: '🤧 सामान्य सर्दी',
                description: 'सामान्य सर्दी एक वायरल संक्रमण है जो ऊपरी श्वसन पथ को प्रभावित करता है, जिससे नाक की भीड़, खांसी और गले में खराश होती है।',
                advice: 'अच्छी तरह आराम करें, गर्म तरल पदार्थ पिएं, खारे नाक की बूंदें का उपयोग करें। अधिकांश सर्दियां 7-14 दिनों में ठीक हो जाती हैं।',
                remedies: ['आराम', 'तरल पदार्थ', 'गर्म पेय', 'खारी बूंदें', 'विटामिन सी', 'गले की गोलियां'],
                emergency: false
            },
            'pt': {
                title: '🤧 Resfriado Comum',
                description: 'O resfriado comum é uma infecção viral que afeta as vias respiratórias superiores, causando congestão nasal, tosse e dor de garganta.',
                advice: 'Repouse bem, beba líquidos quentes, use gotas nasais salinas. A maioria dos resfriados se resolve em 7-14 dias.',
                remedies: ['Repouso', 'Líquidos', 'Bebidas quentes', 'Gotas salinas', 'Vitamina C', 'Pastilhas'],
                emergency: false
            },
            'ja': {
                title: '🤧 風邪',
                description: '風邪はウイルス感染で、上気道に影響を与え、鼻づまり、咳、喉の痛みを引き起こします。',
                advice: 'よく休み、温かい液体を飲み、塩水の鼻滴を使用してください。ほとんどの風邪は7-14日で治ります。',
                remedies: ['休息', '液体', '温かい飲料', '塩水滴', 'ビタミンC', 'のどのキャンディ'],
                emergency: false
            },
            'zh': {
                title: '🤧 普通感冒',
                description: '普通感冒是病毒感染，影响上呼吸道，导致鼻塞、咳嗽和喉咙痛。',
                advice: '充分休息，喝温热液体，使用生理盐水鼻滴。大多数感冒在7-14天内自愈。',
                remedies: ['休息', '液体', '温热饮料', '盐水滴', '维生素C', '喉片'],
                emergency: false
            }
        }
    },

    'flu': {
        id: 'flu_001',
        keywords: ['flu', 'influenza', 'viral infection', 'body aches', 'high fever'],
        severity: 'moderate',
        emergency: false,
        category: 'respiratory',
        responses: {
            'en': {
                title: '🤒 Influenza (Flu)',
                description: 'Influenza is a contagious respiratory illness caused by influenza viruses, characterized by sudden onset of fever, muscle aches, fatigue, and respiratory symptoms.',
                advice: 'Stay home to avoid spreading. Rest, stay hydrated, take fever-reducing medications. Antiviral drugs may help if started early. Get annual flu vaccine. Seek medical attention if experiencing difficulty breathing, chest pain, or severe symptoms.',
                remedies: ['Rest', 'Hydration', 'Fever reducers', 'Antiviral medications', 'Warm liquids', 'Humidity'],
                emergency: false
            },
            'es': {
                title: '🤒 Influenza (Gripe)',
                description: 'La influenza es una enfermedad respiratoria contagiosa causada por virus, caracterizada por fiebre repentina, dolores musculares, fatiga y síntomas respiratorios.',
                advice: 'Quédate en casa. Descansa, mantente hidratado, toma medicinas para la fiebre. Los fármacos antivirales pueden ayudar si se inician temprano.',
                remedies: ['Descanso', 'Hidratación', 'Reductores de fiebre', 'Antivirales', 'Líquidos cálidos', 'Humedad'],
                emergency: false
            },
            'fr': {
                title: '🤒 Grippe',
                description: 'La grippe est une maladie respiratoire contagieuse causée par des virus, caractérisée par une fièvre soudaine, des douleurs musculaires et de la fatigue.',
                advice: 'Restez à la maison. Reposez-vous, hydratez-vous, prenez des médicaments antifébriles. Les antiviraux peuvent aider s\'ils sont commencés tôt.',
                remedies: ['Repos', 'Hydratation', 'Antifébriles', 'Antiviraux', 'Liquides chauds', 'Humidité'],
                emergency: false
            },
            'de': {
                title: '🤒 Grippe',
                description: 'Grippe ist eine ansteckende Atemwegserkrankung, verursacht durch Grippeviren, gekennzeichnet durch plötzliches Fieber, Muskelschmerzen und Müdigkeit.',
                advice: 'Bleiben Sie zu Hause. Ruhen Sie sich aus, trinken Sie ausreichend Wasser, nehmen Sie fiebersenkendes Mittel. Antivirale Mittel können helfen.',
                remedies: ['Ruhe', 'Flüssigkeit', 'Fiebersenker', 'Antivirale', 'Warme Getränke', 'Luftfeuchte'],
                emergency: false
            },
            'hi': {
                title: '🤒 फ्लू (इन्फ्लूएंजा)',
                description: 'फ्लू एक संक्रामक श्वसन रोग है जो वायरस के कारण होता है, जिसमें अचानक बुखार, मांसपेशियों में दर्द और थकान होती है।',
                advice: 'घर पर रहें, आराम करें, हाइड्रेटेड रहें, बुखार कम करने की दवाएं लें। एंटीवायरल दवाएं जल्दी शुरू करने से मदद मिल सकती है।',
                remedies: ['आराम', 'जलयोजन', 'ज्वरनाशक', 'एंटीवायरल', 'गर्म पेय', 'नमी'],
                emergency: false
            },
            'pt': {
                title: '🤒 Gripe',
                description: 'A gripe é uma doença respiratória contagiosa causada por vírus, caracterizada por febre súbita, dores musculares e fadiga.',
                advice: 'Fique em casa, repouse, mantenha-se hidratado, tome medicamentos antipiréticos. Medicamentos antivirais podem ajudar se iniciados cedo.',
                remedies: ['Repouso', 'Hidratação', 'Antipiréticos', 'Antivirais', 'Bebidas quentes', 'Umidade'],
                emergency: false
            },
            'ja': {
                title: '🤒 インフルエンザ',
                description: 'インフルエンザは、インフルエンザウイルスによって起こされる伝染性呼吸器疾患で、突然の発熱、筋肉痛、疲労が特徴です。',
                advice: '家にいてください。休み、水分補給し、解熱薬を取りってください。抗ウイルス薬は早期に開始すると役立つ場合があります。',
                remedies: ['休息', '水分補給', '解熱薬', '抗ウイルス薬', '温かい飲料', '湿度'],
                emergency: false
            },
            'zh': {
                title: '🤒 流感',
                description: '流感是由流感病毒引起的传染性呼吸道疾病，特征是突然发热、肌肉酸痛和疲劳。',
                advice: '呆在家里，休息，保持水分补充，服用退烧药。抗病毒药物如果及早开始可能有帮助。',
                remedies: ['休息', '补水', '退烧药', '抗病毒药', '温饮', '湿度'],
                emergency: false
            }
        }
    },

    'asthma': {
        id: 'asthma_001',
        keywords: ['asthma', 'wheezing', 'breathing difficulty', 'shortness of breath', 'asthma attack'],
        severity: 'moderate',
        emergency: false,
        category: 'respiratory',
        responses: {
            'en': {
                title: '💨 Asthma',
                description: 'Asthma is a chronic respiratory condition characterized by inflammation and narrowing of airways, causing wheezing, breathlessness, chest tightness, and coughing.',
                advice: 'Use prescribed inhalers as directed. Avoid known triggers (allergens, exercise, cold air). Keep emergency inhaler (rescue medications) available. Seek immediate medical attention if experiencing severe breathing difficulty, chest pain, or difficulty speaking.',
                remedies: ['Use inhaler', 'Avoid triggers', 'Keep rescue medication', 'Control allergens', 'Regular exercise', 'Allergy medications'],
                emergency: false
            },
            'es': {
                title: '💨 Asma',
                description: 'El asma es una enfermedad respiratoria crónica caracterizada por inflamación y estrechamiento de las vías respiratorias, causando sibilancia, falta de aliento y tos.',
                advice: 'Usa inhaladores prescritos según las indicaciones. Evita factores desencadenantes conocidos. Mantén medicamentos de rescate disponibles. Busca atención médica inmediata si tienes dificultad respiratoria grave.',
                remedies: ['Usar inhalador', 'Evitar desencadenantes', 'Medicamentos de rescate', 'Controlar alérgenos', 'Ejercicio regular', 'Medicamentos para alergias'],
                emergency: false
            },
            'fr': {
                title: '💨 Asthme',
                description: 'L\'asthme est une maladie respiratoire chronique caractérisée par l\'inflammation et le rétrécissement des voies respiratoires, causant une respiration sifflante et une dyspnée.',
                advice: 'Utilisez les inhalateurs prescrits selon les directives. Évitez les déclencheurs connus. Conservez les médicaments de secours disponibles. Cherchez une aide médicale immédiate en cas de difficultés respiratoires graves.',
                remedies: ['Utiliser inhalateur', 'Éviter déclencheurs', 'Médicaments de secours', 'Contrôler allergènes', 'Exercice régulier', 'Médicaments antiallergiques'],
                emergency: false
            },
            'de': {
                title: '💨 Asthma',
                description: 'Asthma ist eine chronische Atemwegserkrankung, gekennzeichnet durch Entzündung und Verengung der Atemwege, verursacht Pfeifen, Kurzatmigkeit und Husten.',
                advice: 'Verwenden Sie die verschriebenen Inhalatoren wie angewiesen. Vermeiden Sie bekannte Auslöser. Halten Sie Rettungsmedikamente bereit. Suchen Sie sofort medizinische Hilfe bei schwerer Atemnot.',
                remedies: ['Inhalator verwenden', 'Auslöser vermeiden', 'Rettungsmedikamente', 'Allergene kontrollieren', 'Regelmäßig trainieren', 'Antiallergika'],
                emergency: false
            },
            'hi': {
                title: '💨 अस्थमा',
                description: 'अस्थमा एक पुरानी श्वसन स्थिति है जो वायुमार्ग के संकुचन और सूजन से चिह्नित होती है, जिससे सीटी, सांस की कमी और खांसी होती है।',
                advice: 'निर्धारित इनहेलर का उपयोग करें। ज्ञात ट्रिगर्स से बचें। आपातकालीन इनहेलर उपलब्ध रखें। गंभीर सांस की कमी के मामले में तुरंत चिकित्सा सहायता लें।',
                remedies: ['इनहेलर का उपयोग', 'ट्रिगर्स से बचें', 'आपातकालीन दवाएं', 'एलर्जी नियंत्रण', 'नियमित व्यायाम', 'एलर्जी दवाएं'],
                emergency: false
            },
            'pt': {
                title: '💨 Asma',
                description: 'A asma é uma condição respiratória crônica caracterizada por inflamação e estreitamento das vias aéreas, causando sibilo, falta de ar e tosse.',
                advice: 'Use inaladores prescritos conforme orientado. Evite gatilhos conhecidos. Mantenha medicamentos de resgate disponíveis. Procure ajuda médica imediata em caso de dificuldade respiratória grave.',
                remedies: ['Usar inalador', 'Evitar gatilhos', 'Medicamentos de resgate', 'Controlar alérgenos', 'Exercício regular', 'Medicamentos antiálergicos'],
                emergency: false
            },
            'ja': {
                title: '💨 喘息',
                description: '喘息は、気道の炎症と狭窄を特徴とした慢性呼吸器疾患で、喘鳴、息切れ、咳を引き起こします。',
                advice: '処方されたインハラーを使用してください。既知のトリガーを避けてください。救急吸入器を用意してください。重度の呼吸困難の場合は即座に医療を求めてください。',
                remedies: ['吸入器使用', 'トリガー回避', '救急薬', 'アレルゲン制御', '定期的運動', 'アレルギー薬'],
                emergency: false
            },
            'zh': {
                title: '💨 哮喘',
                description: '哮喘是一种慢性呼吸系统疾病，特征是气道炎症和狭窄，导致喘息、呼吸困难和咳嗽。',
                advice: '按指示使用处方吸入器。避免已知的触发因素。准备好应急吸入器。如有严重呼吸困难应立即求医。',
                remedies: ['使用吸入器', '避免触发', '应急药物', '控制过敏原', '定期运动', '抗过敏药'],
                emergency: false
            }
        }
    },

    'pneumonia': {
        id: 'pneumonia_001',
        keywords: ['pneumonia', 'lung infection', 'chest pain', 'difficulty breathing', 'bacterial infection'],
        severity: 'severe',
        emergency: false,
        category: 'respiratory',
        responses: {
            'en': {
                title: '🫁 Pneumonia',
                description: 'Pneumonia is an infection of the lungs caused by bacteria, viruses, or fungi, resulting in inflammation of air sacs and difficulty breathing.',
                advice: 'This requires medical attention. See a doctor for proper diagnosis and treatment with antibiotics if bacterial. Rest, stay hydrated, and use fever-reducing medications. Severe shortness of breath or chest pain requires emergency care.',
                remedies: ['Medical consultation', 'Antibiotics', 'Rest', 'Hydration', 'Fever reducers', 'Cough medicine'],
                emergency: false
            },
            'es': {
                title: '🫁 Neumonía',
                description: 'La neumonía es una infección pulmonar causada por bacterias, virus u hongos, resultando en inflamación de los alvéolos y dificultad respiratoria.',
                advice: 'Esto requiere atención médica. Consulta al doctor para diagnóstico y tratamiento con antibióticos si es bacteriana. Descansa, mantente hidratado, y usa medicinas para la fiebre.',
                remedies: ['Consulta médica', 'Antibióticos', 'Descanso', 'Hidratación', 'Reductores de fiebre', 'Medicina para la tos'],
                emergency: false
            },
            'fr': {
                title: '🫁 Pneumonie',
                description: 'La pneumonie est une infection pulmonaire causée par des bactéries, virus ou champignons, résultant en inflammation des alvéoles et difficultés respiratoires.',
                advice: 'Ceci nécessite une attention médicale. Consultez un médecin pour un diagnostic approprié et un traitement aux antibiotiques. Reposez-vous, hydratez-vous.',
                remedies: ['Consultation médicale', 'Antibiotiques', 'Repos', 'Hydratation', 'Antifébriles', 'Sirop contre la toux'],
                emergency: false
            },
            'de': {
                title: '🫁 Lungenentzündung',
                description: 'Lungenentzündung ist eine Lungeninfektion verursacht durch Bakterien, Viren oder Pilze, resultiert in Entzündung und Atembeschwerden.',
                advice: 'Dies erfordert medizinische Aufmerksamkeit. Sehen Sie einen Arzt zur Diagnose und Behandlung mit Antibiotika. Ruhen Sie sich aus, trinken Sie Wasser, nehmen Sie Fieber senker.',
                remedies: ['Ärztliche Beratung', 'Antibiotika', 'Ruhe', 'Flüssigkeit', 'Fiebersenker', 'Hustensaft'],
                emergency: false
            },
            'hi': {
                title: '🫁 निमोनिया',
                description: 'निमोनिया बैक्टीरिया, वायरस या कवक के कारण होने वाला एक फेफड़े का संक्रमण है, जिससे सांस लेने में कठिनाई होती है।',
                advice: 'इसके लिए चिकित्सा सहायता की आवश्यकता है। डॉक्टर से परामर्श लें और एंटीबायोटिक्स लें। आराम करें, हाइड्रेटेड रहें, बुखार कम करने की दवाएं लें।',
                remedies: ['चिकित्सा परामर्श', 'एंटीबायोटिक्स', 'आराम', 'जलयोजन', 'ज्वरनाशक', 'खांसी की दवा'],
                emergency: false
            },
            'pt': {
                title: '🫁 Pneumonia',
                description: 'Pneumonia é uma infecção pulmonar causada por bactérias, vírus ou fungos, resultando em dificuldade respiratória.',
                advice: 'Isto requer atenção médica. Consulte um médico para diagnóstico e tratamento com antibióticos. Repouse, mantenha-se hidratado, tome antipiréticos.',
                remedies: ['Consulta médica', 'Antibióticos', 'Repouso', 'Hidratação', 'Antipiréticos', 'Xarope para tosse'],
                emergency: false
            },
            'ja': {
                title: '🫁 肺炎',
                description: '肺炎は細菌、ウイルス、または真菌によって引き起こされる肺感染症で、呼吸困難をもたらします。',
                advice: 'これは医療上の注意が必要です。医師の診察を受け、抗生物質で治療してください。休み、水分補給し、解熱薬を取ってください。',
                remedies: ['医師の相談', '抗生物質', '休息', '水分補給', '解熱薬', '咳止めシロップ'],
                emergency: false
            },
            'zh': {
                title: '🫁 肺炎',
                description: '肺炎是由细菌、病毒或真菌引起的肺部感染，导致呼吸困难。',
                advice: '这需要医疗关注。咨询医生以获得诊断和抗生素治疗。休息、保持水分补充、服用退烧药。',
                remedies: ['医生咨询', '抗生素', '休息', '补水', '退烧药', '止咳糖浆'],
                emergency: false
            }
        }
    },

    'bronchitis': {
        id: 'bronchitis_001',
        keywords: ['bronchitis', 'chest inflammation', 'persistent cough', 'mucus production', 'respiratory'],
        severity: 'moderate',
        emergency: false,
        category: 'respiratory',
        responses: {
            'en': {
                title: '😷 Bronchitis',
                description: 'Bronchitis is the inflammation of the main airway tubes in the lungs, causing persistent cough, mucus production, and difficulty breathing.',
                advice: 'Use expectorant medications to help clear mucus. Stay hydrated, breathe steam, rest, and use cough medicines. If symptoms persist beyond 3 weeks or you cough up blood, see a doctor.',
                remedies: ['Expectorant', 'Hydration', 'Steam inhalation', 'Rest', 'Cough drops', 'Warm liquids'],
                emergency: false
            },
            'es': {
                title: '😷 Bronquitis',
                description: 'La bronquitis es la inflamación de los tubos principales de las vías aéreas en los pulmones, causando tos persistente y producción de mucosidad.',
                advice: 'Usa medicamentos expectorantes, mantente hidratado, respira vapor, descansa. Si los síntomas persisten más de 3 semanas, consulta al doctor.',
                remedies: ['Expectorante', 'Hidratación', 'Inhalación de vapor', 'Descanso', 'Pastillas de tos', 'Líquidos cálidos'],
                emergency: false
            },
            'fr': {
                title: '😷 Bronchite',
                description: 'La bronchite est l\'inflammation des principaux tubes des voies respiratoires dans les poumons, causant une toux persistante et une production de mucus.',
                advice: 'Utilisez des médicaments expectorants, hydratez-vous, inhalez de la vapeur, reposez-vous. Si les symptômes persistent plus de 3 semaines, consultez un médecin.',
                remedies: ['Expectorant', 'Hydratation', 'Inhalation de vapeur', 'Repos', 'Pastilles de toux', 'Liquides chauds'],
                emergency: false
            },
            'de': {
                title: '😷 Bronchitis',
                description: 'Bronchitis ist die Entzündung der Hauptatemwegröhren in der Lunge, verursacht anhaltenden Husten und Schleimbildung.',
                advice: 'Verwenden Sie Expektoranzien, trinken Sie Wasser, atmen Sie Dampf ein, ruhen Sie sich aus. Wenn Symptome länger als 3 Wochen anhalten, sehen Sie einen Arzt.',
                remedies: ['Expektorans', 'Flüssigkeit', 'Dampfinhalation', 'Ruhe', 'Hustenpastillen', 'Warme Getränke'],
                emergency: false
            },
            'hi': {
                title: '😷 ब्रोंकाइटिस',
                description: 'ब्रोंकाइटिस फेफड़ों की मुख्य वायुमार्ग की नलियों की सूजन है, जिससे लगातार खांसी और बलगम का उत्पादन होता है।',
                advice: 'बलगम को साफ करने में मदद के लिए कफ निष्कासक दवाएं का उपयोग करें। हाइड्रेटेड रहें, भाप लें, आराम करें। यदि लक्षण 3 सप्ताह से अधिक बने रहें, तो डॉक्टर से मिलें।',
                remedies: ['कफ निष्कासक', 'जलयोजन', 'भाप', 'आराम', 'खांसी की गोलियां', 'गर्म पेय'],
                emergency: false
            },
            'pt': {
                title: '😷 Bronquite',
                description: 'Bronquite é a inflamação dos tubos principais das vias aéreas nos pulmões, causando tosse persistente e produção de muco.',
                advice: 'Use medicamentos expectorantes, mantenha-se hidratado, inale vapor, repouse. Se os sintomas persistirem além de 3 semanas, consulte um médico.',
                remedies: ['Expectorante', 'Hidratação', 'Inalação de vapor', 'Repouso', 'Pastilhas de tosse', 'Bebidas quentes'],
                emergency: false
            },
            'ja': {
                title: '😷 気管支炎',
                description: '気管支炎は肺の主幹道の炎症で、持続的な咳と粘液産生を引き起こします。',
                advice: '去痰薬を使用し、水分補給し、水蒸気を吸入し、休んでください。症状が3週間以上続く場合は医師の診察を受けてください。',
                remedies: ['去痰薬', '水分補給', '水蒸気吸入', '休息', '咳止め', '温かい飲料'],
                emergency: false
            },
            'zh': {
                title: '😷 支气管炎',
                description: '支气管炎是肺部主要气道的炎症，导致持续咳嗽和粘液产生。',
                advice: '使用祛痰药，保持水分补充，吸入蒸汽，休息。如果症状持续超过3周，请咨询医生。',
                remedies: ['祛痰药', '补水', '蒸汽吸入', '休息', '止咳片', '温饮'],
                emergency: false
            }
        }
    },

    // ============================================================================
    // DIGESTIVE SYSTEM ISSUES
    // ============================================================================

    'diarrhea': {
        id: 'diarrhea_001',
        keywords: ['diarrhea', 'loose stool', 'stomach upset', 'digestive issue', 'bowel'],
        severity: 'mild',
        emergency: false,
        category: 'digestive',
        responses: {
            'en': {
                title: '🚽 Diarrhea',
                description: 'Diarrhea is frequent, loose, or watery bowel movements, often caused by viral/bacterial infection, food poisoning, or dietary changes.',
                advice: 'Stay hydrated with water, electrolyte drinks, or broths. Avoid dairy, fatty foods and high-fiber foods initially. Eat bland foods like rice, bananas, or toast. If symptoms persist beyond 3 days or with blood/severe pain, see a doctor.',
                remedies: ['Hydration', 'ORS solution', 'Bland diet', 'Rice', 'Bananas', 'Ginger tea'],
                emergency: false
            },
            'es': {
                title: '🚽 Diarrea',
                description: 'La diarrea son movimientos intestinales frecuentes y sueltos, a menudo causados por infecciones virales/bacterianas o cambios dietéticos.',
                advice: 'Mantente hidratado con agua, bebidas electrolíticas o caldos. Evita lácteos y grasas. Come alimentos blandos como arroz, plátano o tostadas. Si persiste más de 3 días, consulta al doctor.',
                remedies: ['Hidratación', 'Solución ORS', 'Dieta blanda', 'Arroz', 'Plátano', 'Té de jengibre'],
                emergency: false
            },
            'fr': {
                title: '🚽 Diarrhée',
                description: 'La diarrhée est cause par des infections virales/bactériennes ou des changements alimentaires.',
                advice: 'Restez hydraté avec de l\'eau, des boissons électrolytiques ou des bouillons. Évitez les produits laitiers et les matières grasses. Mangez des aliments mous.',
                remedies: ['Hydratation', 'Solution ORS', 'Régime léger', 'Riz', 'Banane', 'Thé au gingembre'],
                emergency: false
            },
            'de': {
                title: '🚽 Durchfall',
                description: 'Durchfall sind häufige, lose oder wässrige Stuhlgänge, oft durch virale/bakterielle Infektionen verursacht.',
                advice: 'Bleiben Sie hydratisiert mit Wasser, Elektrolytgetränken oder Brühen. Vermeiden Sie Milchprodukte und Fette. Essen Sie leichte Speisen wie Reis oder Toast.',
                remedies: ['Flüssigkeitszufuhr', 'ORS-Lösung', 'Leichte Diät', 'Reis', 'Banane', 'Ingwertee'],
                emergency: false
            },
            'hi': {
                title: '🚽 दस्त',
                description: 'दस्त बार-बार, ढीली या पानीदार मल त्याग है, अक्सर वायरल/बैक्टीरियल संक्रमण के कारण।',
                advice: 'पानी, इलेक्ट्रोलाइट पेय, या शोरबा के साथ हाइड्रेटेड रहें। डेयरी और वसा से बचें। चावल, केला या टोस्ट जैसे हल्के भोजन खाएं।',
                remedies: ['जलयोजन', 'आमचूर घोल', 'हल्का आहार', 'चावल', 'केला', 'अदरक की चाय'],
                emergency: false
            },
            'pt': {
                title: '🚽 Diarreia',
                description: 'Diarreia são evacuações frequentes, soltas ou aquosas, frequentemente causadas por infecções virais/bacterianas.',
                advice: 'Mantenha-se hidratado com água, bebidas eletrolíticas ou caldos. Evite laticínios e gorduras. Coma alimentos leves como arroz ou torradas.',
                remedies: ['Hidratação', 'Solução SRO', 'Dieta leve', 'Arroz', 'Banana', 'Chá de gengibre'],
                emergency: false
            },
            'ja': {
                title: '🚽 下痢',
                description: '下痢は頻繁で、緩い、または水っぽい排便で、ウイルス/細菌感染によって引き起こされることが多い。',
                advice: '水、電解質飲料、またはスープで水分補給してください。乳製品と脂肪を避けてください。米、バナナ、またはトーストなどの軽い食べ物を食べてください。',
                remedies: ['水分補給', 'ORS溶液', '軽い食事', 'ご飯', 'バナナ', '生姜茶'],
                emergency: false
            },
            'zh': {
                title: '🚽 腹泻',
                description: '腹泻是频繁的、松散或水样的排便，通常由病毒/细菌感染引起。',
                advice: '用水、电解质饮料或肉汤保持补水。避免奶制品和脂肪。吃米饭、香蕉或吐司等清淡食物。',
                remedies: ['补水', 'ORS溶液', '清淡食物', '米饭', '香蕉', '生姜茶'],
                emergency: false
            }
        }
    },

    'nausea': {
        id: 'nausea_001',
        keywords: ['nausea', 'sick feeling', 'queasy', 'vomit', 'stomach'],
        severity: 'mild',
        emergency: false,
        category: 'digestive',
        responses: {
            'en': {
                title: '🤢 Nausea',
                description: 'Nausea is the feeling of sickness or discomfort in the stomach, often a preceding symptom to vomiting.',
                advice: 'Sit down and relax, take small sips of ginger tea or peppermint tea, eat small portions of bland food (crackers, toast), avoid strong odors. If persistent or accompanied by other symptoms, seek medical advice.',
                remedies: ['Rest', 'Ginger tea', 'Small meals', 'Peppermint', 'Crackers', 'Deep breathing'],
                emergency: false
            },
            'es': {
                title: '🤢 Náusea',
                description: 'La náusea es una sensación de malestar estomacal, a menudo síntoma previo a vómitos.',
                advice: 'Siéntate y relájate, toma pequeños sorbos de té de jengibre o menta, come alimentos blandos en pequeñas cantidades. Evita olores fuertes.',
                remedies: ['Descanso', 'Té de jengibre', 'Comidas pequeñas', 'Menta', 'Galletas', 'Respiración profunda'],
                emergency: false
            },
            'fr': {
                title: '🤢 Nausée',
                description: 'La nausée est une sensation d\'inconfort gastrique, souvent un symptôme précédent les vomissements.',
                advice: 'Asseyez-vous et détendez-vous, prenez de petites gorgées de thé au gingembre, mangez des aliments mous en petites portions. Évitez les odeurs fortes.',
                remedies: ['Repos', 'Thé au gingembre', 'Petits repas', 'Menthe', 'Biscottes', 'Respiration profonde'],
                emergency: false
            },
            'de': {
                title: '🤢 Übelkeit',
                description: 'Übelkeit ist ein Gefühl von Unbehagen im Magen, oft ein Symptom vor dem Erbrechen.',
                advice: 'Setzen Sie sich hin und entspannen Sie sich, nehmen Sie kleine Schlucke Ingwertee, essen Sie in kleinen Portionen leichte Speisen. Vermeiden Sie starke Gerüche.',
                remedies: ['Ruhe', 'Ingwertee', 'Kleine Mahlzeiten', 'Pfefferminze', 'Kekse', 'Tiefe Atmung'],
                emergency: false
            },
            'hi': {
                title: '🤢 जी मचलना',
                description: 'जी मचलना पेट में असुविधा की भावना है, अक्सर उल्टी से पहले की एक लक्षण।',
                advice: 'बैठ जाएं और आराम करें। अदरक की चाय की छोटी चुस्की लें, हल्का भोजन खाएं। मजबूत गंध से बचें।',
                remedies: ['आराम', 'अदरक की चाय', 'छोटे भोजन', 'पुदीना', 'बिस्कुट', 'गहरी सांस'],
                emergency: false
            },
            'pt': {
                title: '🤢 Náusea',
                description: 'Náusea é uma sensação de incômodo estomacal, frequentemente um sintoma anterior aos vômitos.',
                advice: 'Sente-se e relaxe, beba pequenos goles de chá de gengibre, coma alimentos leves em pequenas porções. Evite odores fortes.',
                remedies: ['Repouso', 'Chá de gengibre', 'Pequenas refeições', 'Menta', 'Biscoitos', 'Respiração profunda'],
                emergency: false
            },
            'ja': {
                title: '🤢 吐き気',
                description: '吐き気は胃の不快感の感覚で、しばしば嘔吐前の症状。',
                advice: '座ってリラックスしてください。生姜茶を少量飲んでください。軽い食べ物を少量食べてください。強い臭いを避けてください。',
                remedies: ['休息', '生姜茶', '少量の食事', 'ペパーミント', 'クラッカー', '深呼吸'],
                emergency: false
            },
            'zh': {
                title: '🤢 恶心',
                description: '恶心是胃部不适的感觉，通常是呕吐前的症状。',
                advice: '坐下放松。喝小口生姜茶。吃清淡食物。避免强烈气味。',
                remedies: ['休息', '生姜茶', '少量进食', '薄荷', '饼干', '深呼吸'],
                emergency: false
            }
        }
    },

    'vomiting': {
        id: 'vomiting_001',
        keywords: ['vomiting', 'throwing up', 'vomit', 'nausea', 'retching'],
        severity: 'moderate',
        emergency: false,
        category: 'digestive',
        responses: {
            'en': {
                title: '🤮 Vomiting',
                description: 'Vomiting is the forceful expulsion of stomach contents through the mouth, often caused by illness, food poisoning, or medication side effects.',
                advice: 'Rest until you feel better. Stay hydrated with small sips of water, clear broths, or electrolyte solutions. Avoid solid foods initially. If vomiting persists beyond 24-48 hours, contains blood, or is accompanied by severe pain, seek medical attention.',
                remedies: ['Rest', 'Water sips', 'Electrolyte solutions', 'Ginger tea', 'Clear broths', 'Light foods'],
                emergency: false
            },
            'es': {
                title: '🤮 Vómitos',
                description: 'Los vómitos son la expulsión forzada del contenido estomacal, a menudo causada por enfermedad, intoxicación alimentaria o efectos secundarios de medicamentos.',
                advice: 'Descansa hasta que te sientas mejor. Mantente hidratado con pequeños sorbos de agua, caldos claros o soluciones electrolíticas. Si persiste más de 24-48 horas, consulta al doctor.',
                remedies: ['Descanso', 'Pequeños sorbos de agua', 'Soluciones electrolíticas', 'Té de jengibre', 'Caldos claros', 'Alimentos ligeros'],
                emergency: false
            },
            'fr': {
                title: '🤮 Vomissements',
                description: 'Les vomissements sont l\'expulsion forcée du contenu de l\'estomac, souvent causée par une maladie, une intoxication alimentaire ou des effets secondaires de médicaments.',
                advice: 'Reposez-vous jusqu\'à ce que vous vous sentiez mieux. Restez hydraté avec de petites gorgées d\'eau, de bouillons clairs ou de solutions électrolytiques.',
                remedies: ['Repos', 'Petites gorgées d\'eau', 'Solutions électrolytiques', 'Thé au gingembre', 'Bouillons clairs', 'Aliments légers'],
                emergency: false
            },
            'de': {
                title: '🤮 Erbrechen',
                description: 'Erbrechen ist die gewaltsame Auscheidung von Mageninhalt, oft durch Krankheit, Lebensmittelvergiftung oder Nebenwirkungen verursacht.',
                advice: 'Ruhen Sie sich aus, bis Sie sich besser fühlen. Bleiben Sie hydratisiert mit kleinen Schlucken Wasser oder klarer Brühe.',
                remedies: ['Ruhe', 'Kleine Schlucke Wasser', 'Elektrolytlösungen', 'Ingwertee', 'Klare Brühe', 'Leichte Speisen'],
                emergency: false
            },
            'hi': {
                title: '🤮 उल्टी',
                description: 'उल्टी पेट की इमारत का जोरदार निष्कासन है, अक्सर बीमारी, भोजन विषाक्तता या दवा के दुष्प्रभाव के कारण।',
                advice: 'तब तक आराम करें जब तक आप ठीक न महसूस करें। पानी की छोटी चुस्की, स्पष्ट शोरबा के साथ हाइड्रेटेड रहें।',
                remedies: ['आराम', 'पानी की छोटी चुस्की', 'इलेक्ट्रोलाइट समाधान', 'अदरक की चाय', 'स्पष्ट शोरबा', 'हल्का भोजन'],
                emergency: false
            },
            'pt': {
                title: '🤮 Vômito',
                description: 'Vômito é a expulsão forçada do conteúdo do estômago, frequentemente causada por doença, intoxicação alimentar ou efeitos colaterais de medicamentos.',
                advice: 'Repouse até se sentir melhor. Mantenha-se hidratado com pequenos goles de água ou caldos claros.',
                remedies: ['Repouso', 'Pequenos goles de água', 'Soluções eletrolíticas', 'Chá de gengibre', 'Caldos claros', 'Alimentos leves'],
                emergency: false
            },
            'ja': {
                title: '🤮 嘔吐',
                description: '嘔吐は胃の内容物の強制的な排出で、しばしば病気、食中毒、または薬の副作用によって引き起こされます。',
                advice: '気分が良くなるまで休んでください。水の小口飲みで水分補給してください。24-48時間以上続く場合は医師の診察を受けてください。',
                remedies: ['休息', '水の小口飲み', '電解質溶液', '生姜茶', 'クリア-ブロス', '軽い食べ物'],
                emergency: false
            },
            'zh': {
                title: '🤮 呕吐',
                description: '呕吐是胃内容物的强制排出，通常由疾病、食物中毒或药物副作用引起。',
                advice: '休息直到感觉好转。用水小口补水。如果超过24-48小时，请求医。',
                remedies: ['休息', '水的小口', '电解质溶液', '生姜茶', '清汤', '清淡食物'],
                emergency: false
            }
        }
    },

    'constipation': {
        id: 'constipation_001',
        keywords: ['constipation', 'difficulty bowel', 'hard stool', 'infrequent', 'digestive'],
        severity: 'mild',
        emergency: false,
        category: 'digestive',
        responses: {
            'en': {
                title: '💧 Constipation',
                description: 'Constipation is infrequent or difficult bowel movements, often caused by dehydration, low fiber diet, or lack of physical activity.',
                advice: 'Drink more water (at least 8 glasses daily), increase fiber intake (fruits, vegetables, whole grains), exercise regularly, and avoid delaying bowel movements. Use stool softeners if needed. If constipation persists beyond 2 weeks, see a doctor.',
                remedies: ['Increase water', 'High fiber foods', 'Exercise', 'Prunes', 'Fiber supplements', 'Avoid delays'],
                emergency: false
            },
            'es': {
                title: '💧 Estreñimiento',
                description: 'El estreñimiento es movimiento intestinal infrecuente o difícil, a menudo causado por deshidratación o dieta baja en fibra.',
                advice: 'Bebe más agua, aumenta la ingesta de fibra (frutas, vegetales), haz ejercicio regularmente. Evita retrasar los movimientos intestinales. Si persiste más de 2 semanas, consulta al doctor.',
                remedies: ['Aumentar agua', 'Alimentos ricos en fibra', 'Ejercicio', 'Ciruelas', 'Suplementos de fibra', 'Evitar retrasos'],
                emergency: false
            },
            'fr': {
                title: '💧 Constipation',
                description: 'La constipation est un mouvement intestinal infréquent ou difficile, souvent causée par la déshydratation ou une alimentation pauvre en fibres.',
                advice: 'Buvez plus d\'eau, augmentez votre apport en fibres (fruits, légumes), faites de l\'exercice régulièrement. Évitez de reporter les selles.',
                remedies: ['Augmenter eau', 'Aliments riches en fibres', 'Exercice', 'Pruneaux', 'Suppléments de fibres', 'Éviter retards'],
                emergency: false
            },
            'de': {
                title: '💧 Verstopfung',
                description: 'Verstopfung sind seltene oder schwierige Stuhlgänge, oft durch Dehydrierung oder ballaststoffarme Ernährung verursacht.',
                advice: 'Trinken Sie mehr Wasser, erhöhen Sie die Ballaststoffzufuhr (Obst, Gemüse), treiben Sie regelmäßig Sport. Vermeiden Sie Verzögerungen.',
                remedies: ['Wasser trinken', 'Ballaststoffreiche Lebensmittel', 'Sport', 'Pflaumen', 'Ballaststoffsupplemente', 'Verzögerungen vermeiden'],
                emergency: false
            },
            'hi': {
                title: '💧 कब्ज',
                description: 'कब्ज दुर्लभ या कठिन मल त्याग है, अक्सर निर्जलीकरण या कम फाइबर आहार के कारण।',
                advice: 'अधिक पानी पिएं, फाइबर सेवन बढ़ाएं (फल, सब्जियां, साबुत अनाज), नियमित व्यायाम करें। मल त्याग में देरी से बचें।',
                remedies: ['पानी बढ़ाएं', 'फाइबर से भरपूर खाद्य', 'व्यायाम', 'आलूबुखारे', 'फाइबर सप्लीमेंट', 'देरी से बचें'],
                emergency: false
            },
            'pt': {
                title: '💧 Constipação',
                description: 'Constipação é movimento intestinal infequente ou difícil, frequentemente causada by desidratação ou dieta pobre em fibras.',
                advice: 'Beba mais água, aumente a ingestão de fibras (frutas, vegetais), faça exercício regular. Evite atrasar os movimentos intestinais.',
                remedies: ['Aumentar água', 'Alimentos ricos em fibras', 'Exercício', 'Ameixa', 'Suplementos de fibra', 'Evitar atrasos'],
                emergency: false
            },
            'ja': {
                title: '💧 便秘',
                description: '便秘は排便の頻度が低い、または困難な状態で、しばしば脱水症状または低繊維食によって引き起こされます。',
                advice: '水をもっと飲んでください。食物繊維の摂取を増やしてください（果物、野菜、全粒穀物）。定期的に運動してください。排便遅延を避けてください。',
                remedies: ['水を増やす', '高繊維食', '運動', 'プルーン', '繊維サプリ', '遅延回避'],
                emergency: false
            },
            'zh': {
                title: '💧 便秘',
                description: '便秘是排便不频繁或困难，通常由脱水或低纤维饮食引起。',
                advice: '多喝水、增加纤维摄入、定期运动、避免延迟排便。如果持续超过2周，请咨询医生。',
                remedies: ['增加水分', '高纤维食物', '运动', '梅干', '纤维补充剂', '避免延迟'],
                emergency: false
            }
        }
    },

    'abdominal_pain': {
        id: 'abdominal_pain_001',
        keywords: ['stomach pain', 'abdominal pain', 'belly ache', 'cramping', 'gut pain'],
        severity: 'moderate',
        emergency: false,
        category: 'digestive',
        responses: {
            'en': {
                title: '🤕 Abdominal Pain',
                description: 'Abdominal pain can result from various causes including indigestion, gas, cramping, infection, or inflammation.',
                advice: 'Apply heat to the area, rest, and avoid heavy foods. Drink plenty of water and herbal teas. Take antacids if indigestion-related. If pain is severe, persistent (>24 hours), or accompanied by fever, vomiting blood, or difficulty breathing, seek immediate medical attention.',
                remedies: ['Heat compress', 'Rest', 'Light diet', 'Herbal tea', 'Antacids', 'Hydration'],
                emergency: false
            },
            'es': {
                title: '🤕 Dolor Abdominal',
                description: 'El dolor abdominal puede resultar de varias causas incluyendo indigestión, gas, calambres o infección.',
                advice: 'Aplica calor en la zona, descansa, evita comidas pesadas. Bebe agua y tés de hierbas. Si el dolor es intenso, persiste más de 24 horas, o va acompañado de fiebre, busca atención médica.',
                remedies: ['Compresa de calor', 'Descanso', 'Dieta ligera', 'Té de hierbas', 'Antiácidos', 'Hidratación'],
                emergency: false
            },
            'fr': {
                title: '🤕 Douleur Abdominale',
                description: 'La douleur abdominale peut résulter de diverses causes incluant l\'indigestion, le gaz, les crampes ou l\'infection.',
                advice: 'Appliquez de la chaleur, reposez-vous, évitez les aliments lourds. Buvez de l\'eau et des tisanes. Si la douleur est intense ou persiste, consultez un médecin.',
                remedies: ['Compresse chaude', 'Repos', 'Régime léger', 'Tisane', 'Antiácides', 'Hydratation'],
                emergency: false
            },
            'de': {
                title: '🤕 Bauchschmerzen',
                description: 'Bauchschmerzen können durch verschiedene Ursachen verursacht werden, einschließlich Verdauungsstörungen, Gas, Krämpfe oder Infektionen.',
                advice: 'Wenden Sie Wärme an, ruhen Sie sich aus, vermeiden Sie schwere Mahlzeiten. Trinken Sie Wasser und Kräutertees. Bei schweren oder anhaltenden Schmerzen, suchen Sie medizinische Hilfe.',
                remedies: ['Wärmekompresse', 'Ruhe', 'Leichte Diät', 'Kräutertee', 'Antazida', 'Hydratation'],
                emergency: false
            },
            'hi': {
                title: '🤕 पेट में दर्द',
                description: 'पेट में दर्द विभिन्न कारणों से हो सकता है जैसे अपच, गैस, ऐंठन या संक्रमण।',
                advice: 'क्षेत्र में गर्मी लागू करें, आराम करें, भारी भोजन से बचें। पानी और हर्बल चाय पिएं। यदि दर्द तीव्र या 24 घंटे से अधिक बना रहे, तो डॉक्टर से मिलें।',
                remedies: ['गर्म सेक', 'आराम', 'हल्का आहार', 'हर्बल चाय', 'अम्लशामक', 'जलयोजन'],
                emergency: false
            },
            'pt': {
                title: '🤕 Dor Abdominal',
                description: 'A dor abdominal pode resultar de várias causas incluindo indigestão, gases, cólicas ou infecção.',
                advice: 'Aplique calor na área, repouse, evite alimentos pesados. Beba água e chás de ervas. Se a dor é intensa ou persiste, procure atenção médica.',
                remedies: ['Compressa quente', 'Repouso', 'Dieta leve', 'Chá de erva', 'Antiácidos', 'Hidratação'],
                emergency: false
            },
            'ja': {
                title: '🤕 腹痛',
                description: '腹痛は、消化不良、ガス、けいれん、または感染を含む様々な原因から生じる可能性があります。',
                advice: '温熱療法を受ける、休む、重い食べ物を避ける。水とハーブティーを飲む。痛みが激しい場合や24時間以上続く場合は医師の診察を受けてください。',
                remedies: ['温湿布', '休息', '軽い食事', 'ハーブティー', '制酸薬', '水分補給'],
                emergency: false
            },
            'zh': {
                title: '🤕 腹痛',
                description: '腹痛可能由多种原因引起，包括消化不良、胀气、痉挛或感染。',
                advice: '对患处敷热、休息、避免重油食物。喝水和草茶。如果疼痛剧烈或持续，请就医。',
                remedies: ['热敷', '休息', '清淡饮食', '草茶', '制酸剂', '补水'],
                emergency: false
            }
        }
    },

    // ============================================================================
    // NEUROLOGICAL & PAIN CONDITIONS
    // ============================================================================

    'migraine': {
        id: 'migraine_001',
        keywords: ['migraine', 'severe headache', 'throbbing pain', 'light sensitive', 'vision changes'],
        severity: 'moderate',
        emergency: false,
        category: 'neurological',
        responses: {
            'en': {
                title: '🧠 Migraine',
                description: 'Migraines are severe, often throbbing headaches, sometimes accompanied by visual disturbances, nausea, or sensitivity to light and sound.',
                advice: 'Rest in a dark, quiet room. Apply cold or warm compress to the head. Take prescribed migraine medications early. Avoid triggers (stress, certain foods, lack of sleep). Stay hydrated. If migraines are frequent or status migrainosus occurs, see a doctor.',
                remedies: ['Dark room', 'Quiet environment', 'Cold compress', 'Migraine medication', 'Hydration', 'Trigger avoidance'],
                emergency: false
            },
            'es': {
                title: '🧠 Migraña',
                description: 'Las migrañas son dolores de cabeza graves y pulsátiles, a veces acompañados de disturbios visuales, náuseas o sensibilidad a la luz.',
                advice: 'Descansa en una habitación oscura y tranquila. Aplica compress fría o caliente. Toma medicinas para la migraña temprano. Evita factores desencadenantes.',
                remedies: ['Habitación oscura', 'Ambiente tranquilo', 'Compress fría', 'Medicina para migraña', 'Hidratación', 'Evitar factores'],
                emergency: false
            },
            'fr': {
                title: '🧠 Migraine',
                description: 'Les migraines sont des maux de tête graves et pulsatiles, parfois accompagnés de perturbations visuelles, nausées ou sensibilité à la lumière.',
                advice: 'Reposez-vous dans une pièce sombre et calme. Appliquez une compress froide ou chaude. Prenez les médicaments contre la migraine rapidement. Évitez les déclencheurs.',
                remedies: ['Pièce sombre', 'Environnement calme', 'Compress froide', 'Médicament migraine', 'Hydratation', 'Éviter déclencheurs'],
                emergency: false
            },
            'de': {
                title: '🧠 Migräne',
                description: 'Migränen sind schwere, oft pochende Kopfschmerzen, manchmal begleitet von visuellen Störungen, Übelkeit oder Licht- und Geräuschempfindlichkeit.',
                advice: 'Ruhen Sie sich in einem dunklen, ruhigen Zimmer aus. Wenden Sie eine kalt oder warm Kompresse auf. Nehmen Sie Migränmedikamente früh. Vermeiden Sie Auslöser.',
                remedies: ['Dunkles Zimmer', 'Ruhige Umgebung', 'Kalte Kompresse', 'Migränmedikament', 'Hydratation', 'Auslöser vermeiden'],
                emergency: false
            },
            'hi': {
                title: '🧠 माइग्रेन',
                description: 'माइग्रेन गंभीर, अक्सर थर्राहट वाली सिरदर्दें हैं, कभी-कभी दृश्य विकृति, मतली या प्रकाश संवेदनशीलता के साथ।',
                advice: 'एक अंधेरे, शांत कमरे में आराम करें। ठंडा या गर्म सेक लगाएं। माइग्रेन की दवाएं जल्दी लें। ट्रिगर्स से बचें।',
                remedies: ['अंधेरा कमरा', 'शांत वातावरण', 'ठंडा सेक', 'माइग्रेन दवा', 'जलयोजन', 'ट्रिगर्स से बचें'],
                emergency: false
            },
            'pt': {
                title: '🧠 Enxaqueca',
                description: 'As enxaquecas são dores de cabeça graves e pulsantes, às vezes acompanhadas de perturbações visuais, náuseas ou sensibilidade à luz.',
                advice: 'Repouse em uma sala escura e tranquila. Aplique compress fria ou quente. Tome medicamentos para enxaqueca cedo. Evite gatilhos.',
                remedies: ['Sala escura', 'Ambiente tranquilo', 'Compress fria', 'Medicamento enxaqueca', 'Hidratação', 'Evitar gatilhos'],
                emergency: false
            },
            'ja': {
                title: '🧠 偏頭痛',
                description: '偏頭痛は激しく、しばしば拍動性の頭痛で、視覚障害、吐き気、または光と音への敏感性を伴うことがあります。',
                advice: '暗く静かな部屋で休んでください。冷たいまたは温かい湿布を適用してください。偏頭痛薬を早く摂取してください。トリガーを避けてください。',
                remedies: ['暗い部屋', '静かな環境', '冷湿布', '偏頭痛薬', '水分補給', 'トリガー回避'],
                emergency: false
            },
            'zh': {
                title: '🧠 偏头痛',
                description: '偏头痛是严重、常常搏动性的头痛，有时伴有视觉障碍、恶心或光线敏感。',
                advice: '在黑暗、安静的房间休息。冷湿敷或热敷。早期服用偏头痛药物。避免诱因。',
                remedies: ['暗房', '安静环境', '冷敷', '偏头痛药', '补水', '避免诱因'],
                emergency: false
            }
        }
    },

    'back_pain': {
        id: 'back_pain_001',
        keywords: ['back pain', 'lower back', 'spine pain', 'muscle strain', 'posture'],
        severity: 'moderate',
        emergency: false,
        category: 'neurological',
        responses: {
            'en': {
                title: '🏋️ Back Pain',
                description: 'Back pain can result from muscle strain, poor posture, injury, or spinal issues, ranging from mild to severe.',
                advice: 'Apply heat or cold therapy. Rest and avoid heavy lifting. Do gentle stretches and exercises. Improve posture. Use pain relief medication if needed. Seek medical attention if pain is severe, radiating down legs, or accompanied by numbness.',
                remedies: ['Heat therapy', 'Rest', 'Gentle stretches', 'Good posture', 'Pain relievers', 'Physical therapy'],
                emergency: false
            },
            'es': {
                title: '🏋️ Dolor de Espalda',
                description: 'El dolor de espalda puede resultar de tensión muscular, mala postura, lesión o problemas vertebrales.',
                advice: 'Aplica terapia de calor o frío. Descansa y evita levantar peso. Haz estiramientos suaves. Mejora tu postura. Si el dolor es grave o irradia a las piernas, consulta al doctor.',
                remedies: ['Terapia de calor', 'Descanso', 'Estiramientos suaves', 'Buena postura', 'Analgésicos', 'Fisioterapia'],
                emergency: false
            },
            'fr': {
                title: '🏋️ Mal de Dos',
                description: 'Le mal de dos peut résulter d\'une tension musculaire, d\'une mauvaise posture, d\'une blessure ou de problèmes vertébraux.',
                advice: 'Appliquez une thérapie par la chaleur ou le froid. Reposez-vous et évitez les poids lourds. Faites des étirements doux. Améliorez votre posture.',
                remedies: ['Thérapie thermique', 'Repos', 'Étirements doux', 'Bonne posture', 'Analgésiques', 'Physiothérapie'],
                emergency: false
            },
            'de': {
                title: '🏋️ Rückenschmerzen',
                description: 'Rückenschmerzen können durch Muskelzerrung, schlechte Körperhaltung, Verletzung oder Wirbelsäulenprobleme verursacht werden.',
                advice: 'Wenden Sie Wärme- oder Kältetherapie an. Ruhen Sie sich aus und vermeiden Sie schwere Gegenstände. Machen Sie sanfte Dehnübungen. Verbessern Sie Ihre Körperhaltung.',
                remedies: ['Wärmetherapie', 'Ruhe', 'Sanfte Dehnungen', 'Gute Körperhaltung', 'Schmerzmittel', 'Physiotherapie'],
                emergency: false
            },
            'hi': {
                title: '🏋️ कमर दर्द',
                description: 'कमर दर्द मांसपेशी तनाव, खराब मुद्रा, चोट या रीढ़ की समस्याओं से हो सकता है।',
                advice: 'गर्मी या ठंडी चिकित्सा लागू करें। आराम करें और भारी वजन उठाने से बचें। हल्के खिंचाव करें। अपनी मुद्रा में सुधार करें।',
                remedies: ['गर्मी चिकित्सा', 'आराम', 'हल्के खिंचाव', 'अच्छी मुद्रा', 'दर्द निवारक', 'कीनेसियो टेप'],
                emergency: false
            },
            'pt': {
                title: '🏋️ Dor nas Costas',
                description: 'A dor nas costas pode resultar de tensão muscular, má postura, lesão ou problemas vertebrais.',
                advice: 'Aplique terapia de calor ou frio. Repouse e evite levantar peso. Faça alongamentos suaves. Melhore sua postura.',
                remedies: ['Terapia térmica', 'Repouso', 'Alongamentos suaves', 'Boa postura', 'Analgésicos', 'Fisioterapia'],
                emergency: false
            },
            'ja': {
                title: '🏋️ 背中の痛み',
                description: '背中の痛みは筋肉の緊張、悪い姿勢、怪我、または脊椎の問題から生じる可能性があります。',
                advice: '熱療法または冷熱療法を適用してください。休み、重いものを持つのを避けてください。優しいストレッチをしてください。姿勢を改善してください。',
                remedies: ['熱療法', '休息', '優しいストレッチ', '良い姿勢', '鎮痛剤', '物理療法'],
                emergency: false
            },
            'zh': {
                title: '🏋️ 背痛',
                description: '背痛可能由肌肉拉伤、不良姿势、受伤或脊椎问题引起。',
                advice: '应用热疗或冷疗。休息并避免举重。做温和的伸展。改善姿势。',
                remedies: ['热疗', '休息', '温和伸展', '良好姿势', '止痛药', '物理治疗'],
                emergency: false
            }
        }
    },

    // ============================================================================
    // CARDIAC & CIRCULATORY CONDITIONS
    // ============================================================================

    'chest_pain': {
        id: 'chest_pain_001',
        keywords: ['chest pain', 'chest tightness', 'heart pain', 'pressure', 'angina'],
        severity: 'severe',
        emergency: true,
        category: 'cardiac',
        responses: {
            'en': {
                title: '⚠️ CHEST PAIN - EMERGENCY',
                description: 'Chest pain can indicate serious cardiac conditions and requires immediate medical attention. This is a medical emergency.',
                advice: 'CALL 911 or EMERGENCY SERVICES IMMEDIATELY. Do not delay. Sit or lie down and try to stay calm. If you have aspirin and are not allergic, you may chew it. Do not drive yourself to the hospital. Wait for emergency responders.',
                remedies: ['Call 911', 'Sit/Lie down', 'Stay calm', 'Chew aspirin (if safe)', 'Loosen clothing', 'Seek emergency care'],
                emergency: true,
                urgency: 'CRITICAL - CALL EMERGENCY NOW'
            },
            'es': {
                title: '⚠️ DOLOR DE PECHO - EMERGENCIA',
                description: 'El dolor de pecho puede indicar condiciones cardíacas graves y requiere atención médica inmediata.',
                advice: 'LLAMA AL 911 o SERVICIOS DE EMERGENCIA INMEDIATAMENTE. Siéntate o acuéstate. Mantén la calma. Si tienes aspirina y no eres alérgico, puedes masticarla. No conduzcas al hospital.',
                remedies: ['Llamar 911', 'Sentarse', 'Mantener calma', 'Masticar aspirina', 'Aflojar ropa', 'Buscar emergencia'],
                emergency: true,
                urgency: 'CRÍTICO - LLAMAR EMERGENCIA AHORA'
            },
            'fr': {
                title: '⚠️ DOULEUR THORACIQUE - URGENCE',
                description: 'La douleur thoracique peut indiquer des conditions cardiaques graves et nécessite une attention médicale immédiate.',
                advice: 'APPELEZ LE 911 ou LES SERVICES D\'URGENCE IMMÉDIATEMENT. Asseoir-vous ou allongez-vous. Gardez votre calme. Si vous avez de l\'aspirine et n\'êtes pas allergique, vous pouvez la mâcher.',
                remedies: ['Appeler 911', 'S\'asseoir', 'Rester calme', 'Mâcher aspirine', 'Desserrer vêtements', 'Chercher urgence'],
                emergency: true,
                urgency: 'CRITIQUE - APPELER URGENCE MAINTENANT'
            },
            'de': {
                title: '⚠️ BRUSTSCHMERZ - NOTFALL',
                description: 'Brustschmerzen können auf schwerwiegende Herzerkrankungen hindeuten und erfordern sofortige medizinische Versorgung.',
                advice: 'RUFEN SIE SOFORT DEN NOTFALLDIENST AN. Setzen oder legen Sie sich hin. Bleiben Sie ruhig. Wenn Sie Aspirin haben und nicht allergisch sind, kauen Sie es.',
                remedies: ['Notfalldienst anrufen', 'Hinsetzen', 'Ruhig bleiben', 'Aspirin kauen', 'Kleidung lockern', 'Notfall-Hilfe suchen'],
                emergency: true,
                urgency: 'KRITISCH - NOTFALLDIENST SOFORT ANRUFEN'
            },
            'hi': {
                title: '⚠️ सीने में दर्द - आपातकाल',
                description: 'सीने में दर्द गंभीर हृदय स्थितियों का संकेत दे सकता है और तुरंत चिकित्सा ध्यान की आवश्यकता है।',
                advice: 'तुरंत 911 या आपातकालीन सेवाएं कॉल करें। बैठ जाएं या लेट जाएं। शांत रहें। यदि आपके पास एस्पिरिन है, तो इसे चबाएं।',
                remedies: ['911 कॉल करें', 'बैठ जाएं', 'शांत रहें', 'एस्पिरिन चबाएं', 'कपड़े ढीले करें', 'आपातकालीन सहायता'],
                emergency: true,
                urgency: 'गंभीर - अभी आपातकाल कॉल करें'
            },
            'pt': {
                title: '⚠️ DOR NO PEITO - EMERGÊNCIA',
                description: 'Dor no peito pode indicar condições cardíacas graves e requer atenção médica imediata.',
                advice: 'LIGUE PARA 911 ou SERVIÇOS DE EMERGÊNCIA IMEDIATAMENTE. Sente-se ou deite-se. Mantenha a calma. Se tem aspirina e não é alérgico, pode mastigá-la.',
                remedies: ['Ligar 911', 'Sentar-se', 'Manter calma', 'Mastigar aspirina', 'Afrouxar roupas', 'Buscar emergência'],
                emergency: true,
                urgency: 'CRÍTICO - CHAMAR EMERGÊNCIA AGORA'
            },
            'ja': {
                title: '⚠️ 胸痛 - 緊急事態',
                description: '胸痛は深刻な心臓状態の兆候である可能性があり、直ちに医療の注意が必要です。',
                advice: '直ちに911または救急車を呼んでください。座るか横になってください。落ち着いてください。アスピリンがあれば、それを噛んでください。',
                remedies: ['911に電話', '座る', '落ち着く', 'アスピリンを噛む', '衣服をリラックス', '救急車を呼ぶ'],
                emergency: true,
                urgency: '重大 - 今すぐ緊急を呼んでください'
            },
            'zh': {
                title: '⚠️ 胸痛 - 紧急',
                description: '胸痛可能表示严重的心脏病,需要立即就医。',
                advice: '立即拨打911或紧急服务。坐下或躺下。保持冷静。如果有阿司匹林,可以咀嚼。',
                remedies: ['拨打911', '坐下', '保持冷静', '咀嚼阿司匹林', '放松衣服', '求助紧急'],
                emergency: true,
                urgency: '严重 - 现在拨打紧急'
            }
        }
    },

    'heart_palpitations': {
        id: 'palpitations_001',
        keywords: ['heart palpitations', 'heartbeat irregular', 'racing heart', 'skipping beats', 'arrhythmia'],
        severity: 'moderate',
        emergency: false,
        category: 'cardiac',
        responses: {
            'en': {
                title: '💓 Heart Palpitations',
                description: 'Heart palpitations are sensations of a rapid, fluttering, or pounding heartbeat, often caused by anxiety, caffeine, exercise, or heart conditions.',
                advice: 'Sit or lie down and relax. Take deep, slow breaths. Reduce caffeine intake. Avoid stimulants. Monitor your heart rate. If palpitations are frequent, severe, or accompanied by chest pain, dizziness, or fainting, seek medical attention.',
                remedies: ['Rest', 'Deep breathing', 'Reduce caffeine', 'Relax', 'Monitor heart rate', 'Avoid stress'],
                emergency: false
            },
            'es': {
                title: '💓 Palpitaciones Cardíacas',
                description: 'Las palpitaciones cardíacas son sensaciones de latidos rápidos, irregulares o fuertes, a menudo por ansiedad, cafeína o condiciones cardíacas.',
                advice: 'Siéntate o acuéstate y relájate. Respira profundo y lento. Reduce cafeína. Evita estimulantes. Monitorea tu ritmo cardíaco. Si son frecuentes o van acompañadas de dolor, busca atención médica.',
                remedies: ['Descanso', 'Respiración profunda', 'Reducir cafeína', 'Relajarse', 'Monitorear pulso', 'Evitar estrés'],
                emergency: false
            },
            'fr': {
                title: '💓 Palpitations Cardiaques',
                description: 'Les palpitations cardiaques sont des sensations de battements rapides, irréguliers ou forts, souvent causées par l\'anxiété, la caféine ou des conditions cardiaques.',
                advice: 'Asselez-vous ou allongez-vous et détendez-vous. Respirez profondément et lentement. Réduisez la caféine. Évitez les stimulants. Surveillez votre fréquence cardiaque.',
                remedies: ['Repos', 'Respiration profonde', 'Réduire caféine', 'Détente', 'Surveiller FC', 'Éviter stress'],
                emergency: false
            },
            'de': {
                title: '💓 Herzpochen',
                description: 'Herzpochen sind Sensationen von schnellen, unregelmäßigen oder starken Herzschlägen, oft durch Angst, Koffein oder Herzerkrankungen verursacht.',
                advice: 'Setzen oder legen Sie sich hin und entspannen Sie sich. Atmen Sie tief und langsam. Reduzieren Sie Koffein. Vermeiden Sie Reizmittel. Überwachen Sie Ihren Puls.',
                remedies: ['Ruhe', 'Tiefe Atmung', 'Koffein reduzieren', 'Entspannung', 'Puls überwachen', 'Stress vermeiden'],
                emergency: false
            },
            'hi': {
                title: '💓 हृदय की घबराहट',
                description: 'हृदय की घबराहट तेज, अनियमित या तेज दिल की धड़कन की अनुभूति है, अक्सर चिंता, कैफीन या हृदय स्थितियों के कारण।',
                advice: 'बैठ जाएं या लेट जाएं और आराम करें। गहरी, धीरे-धीरे सांस लें। कैफीन कम करें। उत्तेजक से बचें। अपनी हृदय गति की निगरानी करें।',
                remedies: ['आराम', 'गहरी सांस', 'कैफीन कम करें', 'विश्राम', 'नाड़ी निगरानी', 'तनाव से बचें'],
                emergency: false
            },
            'pt': {
                title: '💓 Palpitações Cardíacas',
                description: 'Palpitações cardíacas são sensações de batimentos rápidos, irregulares ou fortes, frequentemente causadas por ansiedade, cafeína ou condições cardíacas.',
                advice: 'Sente-se ou deite-se e relaxe. Respire profunda e lentamente. Reduza a cafeína. Evite estimulantes. Monitore sua frequência cardíaca.',
                remedies: ['Repouso', 'Respiração profunda', 'Reduzir cafeína', 'Relaxamento', 'Monitorar FC', 'Evitar stress'],
                emergency: false
            },
            'ja': {
                title: '💓 動悸',
                description: '動悸は速い、不規則、または強い心拍の感覚で、しばしば不安、カフェイン、または心臓病によって引き起こされます。',
                advice: '座るか横になって、リラックスしてください。深くゆっくり呼吸してください。カフェインを減らしてください。刺激物を避けてください。心拍数を監視してください。',
                remedies: ['休息', '深呼吸', 'カフェイン減少', 'リラックス', '心拍監視', 'ストレス回避'],
                emergency: false
            },
            'zh': {
                title: '💓 心悸',
                description: '心悸是心跳快速、不规则或强烈的感觉，通常由焦虑、咖啡因或心脏病引起。',
                advice: '坐下或躺下放松。深呼吸。减少咖啡因。避免刺激品。监测心率。',
                remedies: ['休息', '深呼吸', '减少咖啡因', '放松', '心率监测', '避免压力'],
                emergency: false
            }
        }
    },

    'high_blood_pressure': {
        id: 'hypertension_001',
        keywords: ['high blood pressure', 'hypertension', 'elevated BP', 'pressure', 'cardiovascular'],
        severity: 'moderate',
        emergency: false,
        category: 'cardiac',
        responses: {
            'en': {
                title: '⬆️ High Blood Pressure (Hypertension)',
                description: 'High blood pressure is when blood pressure readings are consistently elevated (above 130/80 mmHg), increasing risk of heart disease and stroke.',
                advice: 'Check your bp regularly. Reduce sodium intake, maintain healthy weight, exercise regularly (150 min/week), manage stress, limit alcohol. Take prescribed medications as directed. Follow up with doctor for monitoring. Seek immediate attention if bp exceeds 180/120 with symptoms.',
                remedies: ['Monitor BP', 'Reduce sodium', 'Exercise', 'Weight management', 'Stress reduction', 'Medications'],
                emergency: false
            },
            'es': {
                title: '⬆️ Presión Arterial Alta (Hipertensión)',
                description: 'La presión arterial alta es cuando las lecturas de presión arterial son consistentemente elevadas, aumentando el riesgo de enfermedad cardíaca.',
                advice: 'Revisa tu PA regularmente. Reduce sodio, mantén peso saludable, haz ejercicio (150 min/sem), maneja estrés, limita alcohol. Toma medicinas prescritas. Sigue con doctor.',
                remedies: ['Monitorear PA', 'Reducir sodio', 'Ejercicio', 'Control peso', 'Reducción estrés', 'Medicinas'],
                emergency: false
            },
            'fr': {
                title: '⬆️ Hypertension Artérielle',
                description: 'L\'hypertension artérielle se produit quand la pression artérielle est systématiquement élevée, augmentant le risque de maladie cardiaque.',
                advice: 'Vérifiez votre PA régulièrement. Réduisez le sodium, maintenez un poids sain, faites de l\'exercice (150 min/sem), gérez le stress, limitez l\'alcool.',
                remedies: ['Monitorer PA', 'Réduire sodium', 'Exercice', 'Contrôle poids', 'Réduction stress', 'Médicaments'],
                emergency: false
            },
            'de': {
                title: '⬆️ Hoher Blutdruck (Hypertonie)',
                description: 'Bluthochdruck tritt auf, wenn die Blutdruckwerte konsistent erhöht sind, was das Herzerkrankungsrisiko erhöht.',
                advice: 'Überwachen Sie regelmäßig Ihren Blutdruck. Reduzieren Sie Natrium, halten Sie ein gesundes Gewicht, trainieren Sie regelmäßig, bewältigen Sie Stress, begrenzen Sie Alkohol.',
                remedies: ['Blutdruck überwachen', 'Natrium reduzieren', 'Training', 'Gewichtskontrolle', 'Stressabbau', 'Medikamente'],
                emergency: false
            },
            'hi': {
                title: '⬆️ उच्च रक्तचाप (उच्च रक्तचाप)',
                description: 'उच्च रक्तचाप तब होता है जब रक्तचाप की रीडिंग लगातार बढ़ी होती है, जिससे हृदय रोग का खतरा बढ़ता है।',
                advice: 'नियमित रूप से BP की जांच करें। सोडियम कम करें, स्वस्थ वजन बनाए रखें, नियमित व्यायाम करें, तनाव प्रबंधित करें, शराब सीमित करें।',
                remedies: ['BP निगरानी', 'सोडियम कम करें', 'व्यायाम', 'वजन प्रबंधन', 'तनाव कमी', 'दवाएं'],
                emergency: false
            },
            'pt': {
                title: '⬆️ Pressão Arterial Elevada (Hipertensão)',
                description: 'Pressão arterial elevada ocorre quando as leituras de PA estão consistentemente elevadas, aumentando o risco de doença cardíaca.',
                advice: 'Verifique sua PA regularmente. Reduza sódio, mantenha peso saudável, exercite-se (150 min/sem), gerencie stresse, limite álcool.',
                remedies: ['Monitorar PA', 'Reduzir sódio', 'Exercício', 'Controle peso', 'Redução stress', 'Medicamentos'],
                emergency: false
            },
            'ja': {
                title: '⬆️ 高血圧',
                description: '高血圧は血圧の読みが一貫して上昇している場合で、心臓病と脳卒中のリスクが増加します。',
                advice: '定期的に血圧をチェック。塩分摂取を減らし、健康的な体重を保ち、定期的に運動し、ストレスを管理し、アルコールを制限。',
                remedies: ['血圧監視', 'ナトリウム減少', '運動', '体重管理', 'ストレス管理', '医療薬'],
                emergency: false
            },
            'zh': {
                title: '⬆️ 高血压',
                description: '高血压是血压读数持续升高的情况，增加了心脏病和中风的风险。',
                advice: '定期检查血压。减少钠摄入、保持健康体重、定期运动、管理压力、限制酒精。',
                remedies: ['监测血压', '减少钠', '运动', '体重控制', '压力管理', '药物'],
                emergency: false
            }
        }
    },

    // ============================================================================
    // SKIN CONDITIONS
    // ============================================================================

    'rash': {
        id: 'rash_001',
        keywords: ['rash', 'skin irritation', 'red skin', 'itchy', 'dermatitis'],
        severity: 'mild',
        emergency: false,
        category: 'skin',
        responses: {
            'en': {
                title: '🔴 Rash',
                description: 'A rash is a temporary eruption of red or irritated skin, caused by allergies, contact dermatitis, infections, or sensitivity reactions.',
                advice: 'Identify and avoid the trigger (irritant or allergen). Keep area clean and dry. Use mild soap. Apply moisturizer or soothing cream (oatmeal-based). Avoid scratching. If rash spreads, persists, or is accompanied by fever, seek medical attention.',
                remedies: ['Identify trigger', 'Keep dry', 'Moisturizer', 'Oatmeal cream', 'Avoid scratching', 'Anti-allergy medication'],
                emergency: false
            },
            'es': {
                title: '🔴 Sarpullido',
                description: 'Un sarpullido es una erupción temporal de piel roja o irritada, causada por alergias, dermatitis de contacto o reacciones de sensibilidad.',
                advice: 'Identifica y evita el desencadenante. Mantén limpio y seco. Usa jabón suave. Aplica hidratante o crema calmante. Evita rascarte. Si se propaga o persiste, consulta al doctor.',
                remedies: ['Identificar desencadenante', 'Mantener seco', 'Hidratante', 'Crema de avena', 'Evitar rascarse', 'Medicina antialérgica'],
                emergency: false
            },
            'fr': {
                title: '🔴 Éruption Cutanée',
                description: 'Une éruption cutanée est une éruption temporaire de peau rouge ou irritée, causée par des allergies, une dermatite de contact ou des réactions de sensibilité.',
                advice: 'Identifiez et évitez le déclencheur. Gardez la zone propre et sèche. Utilisez un savon doux. Appliquez un hydratant. Évitez de vous gratter.',
                remedies: ['Identifier déclencheur', 'Garder sec', 'Hydratant', 'Crème avoine', 'Éviter grattage', 'Antiallergique'],
                emergency: false
            },
            'de': {
                title: '🔴 Ausschlag',
                description: 'Ein Ausschlag ist ein vorübergehender Ausbruch von roter oder gereizter Haut, verursacht durch Allergien, Kontaktdermatitis oder Überempfindlichkeitsreaktionen.',
                advice: 'Identifizieren und vermeiden Sie den Auslöser. Halten Sie die Stelle sauber und trocken. Verwenden Sie milde Seife. Tragen Sie eine Feuchtigkeitscreme auf. Vermeiden Sie Kratzen.',
                remedies: ['Auslöser identifizieren', 'Trocken halten', 'Feuchtigkeitscreme', 'Hafercreme', 'Kratzen vermeiden', 'Antiallergika'],
                emergency: false
            },
            'hi': {
                title: '🔴 दाने',
                description: 'दाने लाल या irritated त्वचा का अस्थायी प्रकोप है, जो एलर्जी, संपर्क dermatitis या sensitivity प्रतिक्रियाओं के कारण होते हैं।',
                advice: 'ट्रिगर को पहचानें और टालें। क्षेत्र को साफ और सूखा रखें। हल्के साबुन का उपयोग करें। मॉइस्चराइजर लागू करें। खरोंच से बचें।',
                remedies: ['ट्रिगर पहचानें', 'सूखा रखें', 'मॉइस्चराइजर', 'ओटमील क्रीम', 'खरोंच से बचें', 'एंटी-एलर्जी'],
                emergency: false
            },
            'pt': {
                title: '🔴 Erupção Cutânea',
                description: 'Uma erupção cutânea é uma erupção temporária de pele vermelha ou irritada, causada por alergias, dermatite de contato ou reações de sensibilidade.',
                advice': 'Identifique e evite o gatilho. Mantenha a área limpa e seca. Use sabão suave. Aplique hidratante. Evite coçar.',
                remedies: ['Identificar gatilho', 'Manter seco', 'Hidratante', 'Creme aveia', 'Evitar coçar', 'Antiallergênico'],
                emergency: false
            },
            'ja': {
                title: '🔴 発疹',
                description: '発疹は赤いまたはイライラした皮膚の一時的な爆発で、アレルギー、接触皮膚炎または感度反応が原因です。',
                advice: 'トリガーを特定して回避。領域を清潔で乾いた状態に保ってください。軽い石鹸を使用。保湿剤を適用。引っかき傷を避けてください。',
                remedies: ['トリガー特定', '乾いた状態', '保湿剤', 'オートミール膏', 'スクラッチ回避', '抗アレルギー'],
                emergency: false
            },
            'zh': {
                title: '🔴 皮疹',
                description: '皮疹是红色或刺激肌肤的短暂爆发，由过敏、接触性皮炎或敏感反应引起。',
                advice: '确认并避免触发因素。保持区域清洁干燥。使用温和肥皂。涂抹保湿霜。避免抓挠。',
                remedies: ['确认触发', '保持干燥', '保湿霜', '燕麦膏', '避免抓挠', '抗过敏药'],
                emergency: false
            }
        }
    },

    // ============================================================================
    // ALLERGIC REACTIONS
    // ============================================================================

    'allergic_reaction': {
        id: 'allergy_001',
        keywords: ['allergy', 'allergic reaction', 'hives', 'itching', 'swelling', 'sneezing'],
        severity: 'mild',
        emergency: false,
        category: 'allergic',
        responses: {
            'en': {
                title: '🤧 Allergic Reaction',
                description: 'An allergic reaction occurs when the immune system reacts to a foreign substance (allergen) causing itching, rashes, sneezing, or swelling.',
                advice: 'Identify and avoid the allergen. Take antihistamine medications (diphenhydramine, cetirizine). Apply cool compress for itching. Keep area clean. If experiencing difficulty breathing, chest pain, or severe swelling, seek emergency care immediately.',
                remedies: ['Avoid allergen', 'Antihistamine', 'Cool compress', 'Hydration', 'Rest', 'Remove allergen source'],
                emergency: false
            },
            'es': {
                title: '🤧 Reacción Alérgica',
                description: 'Una reacción alérgica ocurre cuando el sistema inmunológico reacciona a una sustancia extraña, causando picazón, erupción o estornudos.',
                advice: 'Identifica y evita el alérgeno. Toma antihistamínicos. Aplica compress fría. Mantén el área limpia. Si experimentas dificultad respiratoria, busca emergencia.',
                remedies: ['Evitar alérgeno', 'Antihistamínico', 'Compresas frías', 'Hidratación', 'Descanso', 'Limpiar'],
                emergency: false
            },
            'fr': {
                title: '🤧 Réaction Allergique',
                description: 'Une réaction allergique se produit quand le système immunitaire réagit à une substance étrangère, causant démangeaisons, éruption ou éternuements.',
                advice: 'Identifiez et évitez l\'allergène. Prenez des antihistaminiques. Appliquez une compress froide. Gardez propre. En cas de difficultés respiratoires, demandez des soins d\'urgence.',
                remedies: ['Éviter allergène', 'Antihistaminique', 'Compress froide', 'Hydratation', 'Repos', 'Nettoyer'],
                emergency: false
            },
            'de': {
                title: '🤧 Allergische Reaktion',
                description: 'Eine allergische Reaktion tritt auf, wenn das Immunsystem auf eine fremde Substanz (Allergen) reagiert, verursacht Juckreiz, Ausschlag oder Schwellungen.',
                advice: 'Allergen identifizieren und vermeiden. Antihistaminika nehmen. Kalt Kompresse anwenden. Bereich sauber halten. Bei Atemwegsschwerigkeiten Notfall suchen.',
                remedies: ['Allergen vermeiden', 'Antihistaminika', 'Kalte Kompresse', 'Flüssigkeit', 'Ruhe', 'Allergen entfernen'],
                emergency: false
            },
            'hi': {
                title: '🤧 एलर्जी प्रतिक्रिया',
                description: 'एलर्जी प्रतिक्रिया तब होती है जब प्रतिरक्षा प्रणाली एक बाहरी पदार्थ के लिए प्रतिक्रिया करती है, जिससे खुजली, दाने या छींकें होती हैं।',
                advice: 'एलर्जन को पहचानें और टालें। एंटीहिस्टामाइन दवाएं लें। ठंडा सेक लगाएं। यदि सांस लेने में कठिनाई है, तो आपातकाल खोजें।',
                remedies: ['एलर्जन से बचें', 'एंटीहिस्टामाइन', 'ठंडा सेक', 'जलयोजन', 'आराम', 'एलर्जन हटाएं'],
                emergency: false
            },
            'pt': {
                title: '🤧 Reação Alérgica',
                description: 'Uma reação alérgica ocorre quando o sistema imunológico reage a uma substância estranha, causando coceira, erupção ou espinhos.',
                advice: 'Identifique e evite o alérgeno. Tome anti-histamínicos. Aplique compress fria. Mantenha limpo. Se dificuldade respiratória, procure emergência.',
                remedies: ['Evitar alérgeno', 'Anti-histamínicos', 'Compress fria', 'Hidratação', 'Repouso', 'Remover alérgeno'],
                emergency: false
            },
            'ja': {
                title: '🤧 アレルギー反応',
                description: 'アレルギー反応は、免疫システムが異物（アレルゲン）に反応して、かゆみ、発疹、またはくしゃみを引き起こす場合に発生します。',
                advice: 'アレルゲンを特定して回避。抗ヒスタミン薬を使用。冷湿布を使用。清潔に保つ。呼吸困難の場合は緊急対応を求めてください。',
                remedies: ['アレルゲン回避', '抗ヒスタミン薬', '冷湿布', '水分補給', '休息', 'アレルゲン除去'],
                emergency: false
            },
            'zh': {
                title: '🤧 过敏反应',
                description: '过敏反应是免疫系统对外来物质（过敏原）反应，导致瘙痒、皮疹或打喷嚏。',
                advice: '识别并避免过敏原。服用抗组胺药。冷敷。保持清洁。如有呼吸困难，立即求救。',
                remedies: ['避免过敏原', '抗组胺药', '冷敷', '补水', '休息', '清除过敏原'],
                emergency: false
            }
        }
    },

    'anaphylaxis': {
        id: 'anaphylaxis_001',
        keywords: ['anaphylaxis', 'severe allergy', 'breathing difficulty', 'throat swelling', 'epinephrine', 'emergency'],
        severity: 'severe',
        emergency: true,
        category: 'allergic',
        responses: {
            'en': {
                title: '🚨 ANAPHYLAXIS - LIFE-THREATENING EMERGENCY',
                description: 'Anaphylaxis is a severe, potentially life-threatening allergic reaction requiring immediate emergency treatment.',
                advice: 'CALL 911 IMMEDIATELY. Use epinephrine auto-injector (EpiPen) if available. Lie down with legs elevated. Do not delay seeking emergency care. Stay calm and notify emergency responders of the allergen.',
                remedies: ['Call 911', 'Use EpiPen', 'Lie down', 'Legs elevated', 'Emergency care', 'Inform responders'],
                emergency: true,
                urgency: 'LIFE-THREATENING - CALL 911 NOW'
            },
            'es': {
                title: '🚨 ANAFILAXIA - EMERGENCIA QUE AMENAZA LA VIDA',
                description: 'La anafilaxia es una reacción alérgica grave y potencialmente mortal que requiere tratamiento de emergencia inmediato.',
                advice: 'LLAMA AL 911 INMEDIATAMENTE. Usa auto-inyector de epinefrina (EpiPen) si está disponible. Acuéstate. No retrases atención de emergencia.',
                remedies: ['Llamar 911', 'Usar EpiPen', 'Acostarse', 'Piernas elevadas', 'Atención emergencia', 'Informar rescatistas'],
                emergency: true,
                urgency: 'QUE AMENAZA LA VIDA - LLAMAR 911 AHORA'
            },
            'fr': {
                title: '🚨 ANAPHYLAXIE - URGENCE MENAÇANT LA VIE',
                description: 'L\'anaphylaxie est une réaction allergique grave et potentiellement mortelle nécessitant un traitement d\'urgence immédiat.',
                advice: 'APPELEZ LE 911 IMMÉDIATEMENT. Utilisez un injecteur d\'épinéphrine (EpiPen) si disponible. Allongez-vous. Ne retardez pas les soins d\'urgence.',
                remedies: ['Appeler 911', 'Utiliser EpiPen', 'S\'allonger', 'Jambes levées', 'Soins urgence', 'Informer secours'],
                emergency: true,
                urgency: 'MENAÇANT LA VIE - APPELER 911 MAINTENANT'
            },
            'de': {
                title: '🚨 ANAPHYLAXIE - LEBENSBEDROHENDER NOTFALL',
                description: 'Anaphylaxie ist eine schwere, möglicherweise lebensbedrohliche allergische Reaktion, die sofortige Notfallbehandlung erfordert.',
                advice: 'RUFEN SIE SOFORT 911 AN. Verwenden Sie einen Epinephrin-Auto-Injektor (EpiPen). Legen Sie sich hin. Verzögern Sie die Notfallbehandlung nicht.',
                remedies: ['911 anrufen', 'EpiPen verwenden', 'Hinlegen', 'Beine hoch', 'Notfallbehandlung', 'Rettung informieren'],
                emergency: true,
                urgency: 'LEBENSBEDROHEND - JETZT 911 ANRUFEN'
            },
            'hi': {
                title: '🚨 एनाफिलाक्सिस - जीवन के लिए खतरनाक आपातकाल',
                description: 'एनाफिलाक्सिस एक गंभीर, संभावित रूप से जीवन के लिए खतरनाक एलर्जी प्रतिक्रिया है जिसके लिए तुरंत आपातकालीन उपचार की आवश्यकता है।',
                advice: 'तुरंत 911 कॉल करें। यदि उपलब्ध हो तो एपिनेफ्राइन ऑटो-इंजेक्टर (EpiPen) का उपयोग करें। लेट जाएं। आपातकालीन देखभाल में देरी न करें।',
                remedies: ['911 कॉल', 'EpiPen', 'लेट जाएं', 'पैर ऊपर', 'आपातकाल', 'बचावकर्ताओं को सूचित करें'],
                emergency: true,
                urgency: 'जीवन के लिए खतरनाक - अभी 911 कॉल करें'
            },
            'pt': {
                title: '🚨 ANAFILAXIA - EMERGÊNCIA QUE AMEAÇA A VIDA',
                description: 'Anafilaxia é uma reação alérgica grave e potencialmente fatal que requer tratamento de emergência imediato.',
                advice: 'LIGUE 911 IMEDIATAMENTE. Use injetor automático de epinefrina (EpiPen) se disponível. Deite-se. Não retarde o atendimento de emergência.',
                remedies: ['Ligar 911', 'Usar EpiPen', 'Deitar-se', 'Pernas elevadas', 'Atendimento emergência', 'Informar resgate'],
                emergency: true,
                urgency: 'AMEAÇANTE À VIDA - LIGAR 911 AGORA'
            },
            'ja': {
                title: '🚨 アナフィラキシス - 生命を脅かす緊急事態',
                description: 'アナフィラキシスは、重篤で生命を脅かす可能性のある過敏反応で、直ちに緊急治療が必要です。',
                advice: '直ちに911に電話してください。エピネフリン自動注射器 (EpiPen) が利用可能な場合は使用してください。寝かせてください。緊急治療を遅らせないでください。',
                remedies: ['911に電話', 'EpiPen使用', '寝かせる', '脚上げる', '緊急治療', 'レスキュー通知'],
                emergency: true,
                urgency: '生命を脅かす - 今すぐ911に電話'
            },
            'zh': {
                title: '🚨 过敏性休克 - 威胁生命的紧急情况',
                description: '过敏性休克是严重的、潜在危及生命的过敏反应，需要立即紧急治疗。',
                advice: '立即拨打911。如有肾上腺素自动注射器(EpiPen)请立即使用。躺下。不要延误紧急救护。',
                remedies: ['拨打911', '使用EpiPen', '躺下', '抬腿', '紧急救护', '通知救援'],
                emergency: true,
                urgency: '威胁生命 - 立即拨打911'
            }
        }
    }
};

// ============================================================================
// HOW TO USE THIS DATABASE
// ============================================================================

/**
 * ADD THIS COMPREHENSIVE DATABASE TO YOUR MULTILINGUAL CHATBOT:
 *
 * 1. In multilingual-chatbot.js, merge this database with the existing one:
 */

/*
const combinedDatabase = {
    ...EXISTING_DATABASE,
    ...COMPREHENSIVE_MEDICAL_DATABASE
};

multilingualChatbot.medicalDatabase = combinedDatabase;
*/

/**
 * 2. ACCESS SYMPTOMS IN ANY LANGUAGE:
 */

/*
// Get symptom in multiple languages
const coldResponse = multilingualChatbot.getResponse('cold', 'en');
const gripResponse = multilingualChatbot.getResponse('cold', 'es');
const rhume = multilingualChatbot.getResponse('cold', 'fr');

// Search symptoms
const results = multilingualChatbot.searchSymptoms('pain', 'en');
const results_es = multilingualChatbot.searchSymptoms('dolor', 'es');

// Add more symptoms as needed
multilingualChatbot.addSymptom('dengue', dengueObject);
*/

// ============================================================================
// EXPORT FOR USE IN OTHER MODULES
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { COMPREHENSIVE_MEDICAL_DATABASE };
}

// Export for browsers
if (typeof window !== 'undefined') {
    window.COMPREHENSIVE_MEDICAL_DATABASE = COMPREHENSIVE_MEDICAL_DATABASE;
}
