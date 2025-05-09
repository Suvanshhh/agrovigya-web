import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // Detects browser language
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          navbar: {
            home: "Home",
            aboutUs: "About Us",
            services: "Services",
            dashboard: "Dashboard",
            profile: "Profile",
            login_signup: "Login/Signup",
            download_app: "Download App",
            contact: "Contact Us",
          },
          home: {
            title: "Empowering Farmers with Technology",
            subtitle: "Join AgroVigya in revolutionizing agriculture through smart solutions and sustainable practices.",
            getCropSuggestions: "Get Crop Suggestions",
            ourServices: "Our Services",
            whyChooseUs: "Why Choose AgroVigya?",
            contact: "Contact Us NOW!",
            getStarted: "Get Started"
          },
          aboutUs: {
            title: "About AgroVigya",
            description: "AgroVigya is committed to empowering farmers with advanced technology and sustainable practices, ensuring a brighter future for agriculture.",
            mission: "Our Mission",
            missionDescription: "To bring innovation and technology to the agricultural sector for increasing productivity and sustainability.",
            vision: "Our Vision",
            visionDescription: "To become the leading platform for smart farming solutions, empowering farmers worldwide."
          },
          services: {
            governmentSchemes: "Government Schemes",
            governmentSchemesDesc: "Get access to the latest farming subsidies and financial aid programs.",
            cropSuggestion: "Crop Suggestion",
            cropSuggestionDesc: "AI-based recommendations for the best crops based on soil & weather conditions.",
            marketplace: "Agricultural Marketplace",
            marketplaceDesc: "Buy & sell farm produce directly to customers & businesses.",
            findJobs: "Find Jobs",
            findJobsDesc: "Explore agricultural employment opportunities tailored for farmers.",
            skillDevelopment: "Skill Development",
            skillDevelopmentDesc: "Upskill with training programs on modern farming techniques.",
            exploreMarketplace: "Explore Marketplace",
            labourEstimation: "Labour Estimation", // Added key
            labourEstimationDesc: "Calculate the estimated labour costs for your agricultural needs." // Added key
          },
          labourEstimation: {
            title: "Labour Cost Estimation",
            selectCrop: "Select Crop",
            chooseCrop: "Choose a crop...",
            landArea: "Land Area",
            areaPlaceholder: "Enter land area (hectares)",
            resultsTitle: "Estimated Costs",
            govtRates: "Government Rates",
            expectedRates: "Market Rates",
            labourDays: "Total Labour Days",
            cropType: "Crop Type"
          },
          common: {
            calculating: "Calculating...",
            estimateNow: "Estimate Now",
            hectare: "Hectare",
            hectares: "Hectares",
            govtRate: "Government Rate"
          },
          errors: {
            fetchCrops: "Failed to load crop list.",
            estimationFailed: "Cost estimation failed."
          },
          whyChooseUs: {
            smartFarming: "Smart Farming",
            smartFarmingDesc: "Leverage AI-powered tools to optimize yield and boost productivity.",
            financialAssistance: "Financial Assistance",
            financialAssistanceDesc: "Get real-time updates on the latest government subsidies and schemes.",
            sustainableAgriculture: "Sustainable Agriculture",
            sustainableAgricultureDesc: "Learn best practices for eco-friendly farming and organic methods.",
            learnMore: "Learn More",
            whyagrovigya: "Why Choose AgroVigya?",
          },
          footer: {
            companyDesc: "Empowering farmers with technology-driven solutions for a sustainable future.",
            quickLinks: "Quick Links",
            ourServices: "Our Services",
            contactUs: "Contact Us",
            address: "X, Maharashtra, India",
            newsletterTitle: "Subscribe to Our Newsletter",
            emailPlaceholder: "Enter your email",
            subscribe: "Subscribe",
            rightsReserved: "All rights reserved.",
            privacyPolicy: "Privacy Policy",
          },
        },
      },
      hi: {
        translation: {
          navbar: {
            home: "होम",
            aboutUs: "हमारे बारे में",
            services: "सेवाएँ",
            login_signup: "लॉगिन/साइनअप",
            download_app: "ऐप डाउनलोड करें",
            dashboard: "डैशबोर्ड",
            profile: "प्रोफ़ाइल", 
            contact: "संपर्क करें",
          },
          home: {
            title: "तकनीक के साथ किसानों को सशक्त बनाना",
            subtitle: "स्मार्ट समाधान और स्थायी प्रथाओं के माध्यम से कृषि में क्रांति लाने के लिए AgroVigya से जुड़ें।",
            getCropSuggestions: "फसल सुझाव प्राप्त करें",
            ourServices: "हमारी सेवाएं",
            whyChooseUs: "क्यों चुनें AgroVigya?",
            contact: "संपर्क करें",
            getStarted: "शुरू करें",
          },
          aboutUs: {
            title: "AgroVigya के बारे में",
            description: "AgroVigya किसानों को उन्नत तकनीक और स्थायी प्रथाओं के साथ सशक्त बनाने के लिए प्रतिबद्ध है, ताकि कृषि के लिए एक उज्जवल भविष्य सुनिश्चित किया जा सके।",
            mission: "हमारा मिशन",
            missionDescription: "कृषि क्षेत्र में नवाचार और तकनीकी समाधान लाकर उत्पादकता और स्थिरता बढ़ाना।",
            vision: "हमारा दृष्टिकोण",
            visionDescription: "दुनिया भर के किसानों को सशक्त बनाने के लिए स्मार्ट खेती समाधान का प्रमुख मंच बनना।"
          },
          services: {
            governmentSchemes: "सरकारी योजनाएँ",
            governmentSchemesDesc: "नवीनतम कृषि सब्सिडी और वित्तीय सहायता कार्यक्रमों तक पहुंच प्राप्त करें।",
            cropSuggestion: "फसल सुझाव",
            cropSuggestionDesc: "मिट्टी और मौसम की स्थिति के आधार पर एआई-आधारित सिफारिशें।",
            marketplace: "कृषि बाजार",
            marketplaceDesc: "कृषि उत्पादों को सीधे ग्राहकों और व्यवसायों को खरीदें और बेचें।",
            findJobs: "नौकरी खोजें",
            findJobsDesc: "किसानों के लिए उपयुक्त कृषि रोजगार के अवसर खोजें।",
            skillDevelopment: "कौशल विकास",
            labourEstimation: "श्रम लागत अनुमान", // Added key
            labourEstimationDesc: "आपकी कृषि आवश्यकताओं के लिए अनुमानित श्रम लागत की गणना करें।", // Added key
            skillDevelopmentDesc: "आधुनिक कृषि तकनीकों पर प्रशिक्षण कार्यक्रमों के साथ कौशल बढ़ाएँ।",
            exploreMarketplace: "बाजार का अन्वेषण करें",
          },
          labourEstimation: {
            title: "श्रम लागत अनुमान",
            selectCrop: "फसल चुनें",
            chooseCrop: "एक फसल चुनें...",
            landArea: "भूमि क्षेत्रफल",
            areaPlaceholder: "भूमि क्षेत्रफल दर्ज करें (हेक्टेयर)",
            resultsTitle: "अनुमानित लागत",
            govtRates: "सरकारी दरें",
            expectedRates: "बाजार दरें",
            labourDays: "कुल श्रम दिवस",
            cropType: "फसल का प्रकार"
          },
          common: {
            calculating: "गणना हो रही है...",
            estimateNow: "अभी अनुमान लगाएं",
            hectare: "हेक्टेयर",
            hectares: "हेक्टेयर",
            govtRate: "सरकारी दर"
          },
          errors: {
            fetchCrops: "फसल सूची लोड करने में विफल।",
            estimationFailed: "लागत अनुमान विफल।"
          },
          whyChooseUs: {
            smartFarming: "स्मार्ट खेती",
            smartFarmingDesc: "उपज को अनुकूलित करने और उत्पादकता बढ़ाने के लिए एआई-संचालित उपकरणों का लाभ उठाएं।",
            financialAssistance: "वित्तीय सहायता",
            financialAssistanceDesc: "नवीनतम सरकारी सब्सिडी और योजनाओं पर वास्तविक समय में अपडेट प्राप्त करें।",
            sustainableAgriculture: "स्थायी कृषि",
            sustainableAgricultureDesc: "पारिस्थितिकीय रूप से अनुकूल खेती और जैविक तरीकों के लिए सर्वोत्तम प्रथाओं को जानें।",
            learnMore: "और जानें",
            whyagrovigya: "AgroVigya को क्यों चुनें?",
          },
          footer: {
            companyDesc: "किसानों को तकनीक-आधारित समाधान प्रदान कर एक स्थायी भविष्य की ओर अग्रसर करना।",
            quickLinks: "त्वरित लिंक",
            ourServices: "हमारी सेवाएँ",
            contactUs: "संपर्क करें",
            address: "XYZ, महाराष्ट्र, भारत",
            newsletterTitle: "हमारे न्यूज़लेटर की सदस्यता लें",
            emailPlaceholder: "अपना ईमेल दर्ज करें",
            subscribe: "सदस्यता लें",
            rightsReserved: "सभी हक्क राखीव.",
            privacyPolicy: "गोपनीयता नीति",
          },
        },
      },
      mr: {
        translation: {
          navbar: {
            home: "मुख्यपृष्ठ",
            aboutUs: "आमच्याबद्दल",
            services: "सेवा",
            login_signup: "लॉगिन/साइनअप",
            download_app: "अॅप डाउनलोड करा",
            dashboard: "डॅशबोर्ड",
            profile: "प्रोफाइल",
            contact: "संपर्क साधा",
          },
          home: {
            title: "तंत्रज्ञानाच्या मदतीने शेतकऱ्यांचे सशक्तीकरण",
            subtitle: "स्मार्ट सोल्यूशन्स आणि शाश्वत शेती पद्धतींसह कृषी क्षेत्रात क्रांती घडवा.",
            getCropSuggestions: "पिकांच्या शिफारसी मिळवा",
            ourServices: "आमच्या सेवा",
            whyChooseUs: "आम्हाला का निवडावे?",
            contact: "आमच्याशी संपर्क साधा!",
            getStarted: "सुरु करा",
          },
          aboutUs: {
            title: "AgroVigya बद्दल",
            description: "AgroVigya शेतकऱ्यांना तंत्रज्ञान आणि शाश्वत पद्धतींसह सशक्त करण्यासाठी वचनबद्ध आहे, ज्यामुळे शेतीला उज्ज्वल भविष्य मिळवता येईल.",
            mission: "आमचा ध्येय",
            missionDescription: "कृषी क्षेत्रात नाविन्य आणि तंत्रज्ञान आणून उत्पादकता आणि शाश्वतता वाढवणे.",
            vision: "आमचा दृष्टिकोन",
            visionDescription: "स्मार्ट शेती उपायांसाठी जगभरातील शेतकऱ्यांना सशक्त करणारा प्रमुख मंच बनणे."
          },
          services: {
            governmentSchemes: "सरकारी योजना",
            governmentSchemesDesc: "नवीनतम शेती अनुदाने आणि वित्तीय सहाय्य योजनांचा लाभ घ्या.",
            cropSuggestion: "पीक शिफारस",
            cropSuggestionDesc: "माती आणि हवामानाच्या स्थितीवर आधारित एआय-आधारित शिफारसी.",
            marketplace: "कृषी बाजारपेठ",
            marketplaceDesc: "शेती उत्पादन थेट ग्राहक आणि व्यवसायांना विक्री करा.",
            findJobs: "नोकरी शोधा",
            labourEstimation: "कामगार खर्च अंदाज", // Added key
            labourEstimationDesc: "तुमच्या कृषी गरजांसाठी अंदाजित कामगार खर्चाची गणना करा.", // Added key
            findJobsDesc: "शेतीशी संबंधित रोजगार संधी शोधा.",
            skillDevelopment: "कौशल्य विकास",
            skillDevelopmentDesc: "आधुनिक शेती तंत्रज्ञान शिकण्यासाठी प्रशिक्षण प्रोग्राम.",
            exploreMarketplace: "बाजारपेठ एक्सप्लोर करा",
          },
          labourEstimation: {
            title: "कामगार खर्च अंदाज",
            selectCrop: "पीक निवडा",
            chooseCrop: "एक पीक निवडा...",
            landArea: "जमिनीचे क्षेत्रफळ",
            areaPlaceholder: "जमिनीचे क्षेत्रफळ प्रविष्ट करा (हेक्टेयर)",
            resultsTitle: "अंदाजित खर्च",
            govtRates: "सरकारी दर",
            expectedRates: "बाजार दर",
            labourDays: "एकूण कामगार दिवस",
            cropType: "पिकाचा प्रकार"
          },
          common: {
            calculating: "गणना चालू आहे...",
            estimateNow: "आता अंदाज लावा",
            hectare: "हेक्टेयर",
            hectares: "हेक्टेयर",
            govtRate: "सरकारी दर"
          },
          errors: {
            fetchCrops: "पीक यादी लोड करण्यात अयशस्वी.",
            estimationFailed: "खर्चाचा अंदाज अयशस्वी."
          },
          whyChooseUs: {
            smartFarming: "स्मार्ट शेती",
            smartFarmingDesc: "उत्पादन वाढवण्यासाठी एआय-संचालित साधनांचा वापर करा.",
            financialAssistance: "आर्थिक सहाय्य",
            financialAssistanceDesc: "नवीनतम सरकारी अनुदान आणि योजनांवर रिअल-टाइम अपडेट मिळवा.",
            sustainableAgriculture: "शाश्वत शेती",
            sustainableAgricultureDesc: "पारिस्थितिकीय शेती आणि जैविक पद्धतींसाठी सर्वोत्तम पद्धती शिकणे.",
            learnMore: "अधिक जाणून घ्या",
            whyagrovigya: "AgroVigya का निवडावे?",
          },
          footer: {
            companyDesc: "शेतकऱ्यांना तंत्रज्ञानावर आधारित उपायांसह सशक्त करणे.",
            quickLinks: "महत्वाच्या लिंक",
            ourServices: "आमच्या सेवा",
            contactUs: "संपर्क साधा",
            address: "XYZ, महाराष्ट्र, भारत",
            newsletterTitle: "आमच्या न्यूजलेटरची सदस्यता घ्या",
            emailPlaceholder: "तुमचा ईमेल प्रविष्ट करा",
            subscribe: "सदस्यता घ्या",
            rightsReserved: "सर्व हक्क राखीव.",
            privacyPolicy: "गोपनीयता धोरण",
          },
        },
      },
    },
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
