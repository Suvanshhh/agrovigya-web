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
            contact: "Contact Us",
          },
          home: {
            title: "Empowering Farmers with Technology",
            subtitle: "Join AgroVigya in revolutionizing agriculture through smart solutions and sustainable practices.",
            getCropSuggestions: "Get Crop Suggestions",
            ourServices: "Our Services",
            whyChooseUs: "Why Choose AgroVigya?",
            contact: "Contact Us NOW!",
            getStarted: "Get Started",
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
          },
          whyChooseUs: {
            smartFarming: "Smart Farming",
            smartFarmingDesc: "Leverage AI-powered tools to optimize yield and boost productivity.",
            financialAssistance: "Financial Assistance",
            financialAssistanceDesc: "Get real-time updates on the latest government subsidies and schemes.",
            sustainableAgriculture: "Sustainable Agriculture",
            sustainableAgricultureDesc: "Learn best practices for eco-friendly farming and organic methods.",
            learnMore: "Learn More",
          },
          footer: {
            companyDesc: "Empowering farmers with technology-driven solutions for a sustainable future.",
            quickLinks: "Quick Links",
            ourServices: "Our Services",
            contactUs: "Contact Us",
            address: "XYZ, Maharashtra, India",
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
            skillDevelopmentDesc: "आधुनिक कृषि तकनीकों पर प्रशिक्षण कार्यक्रमों के साथ कौशल बढ़ाएँ।",
          },
          whyChooseUs: {
            smartFarming: "स्मार्ट खेती",
            smartFarmingDesc: "उपज को अनुकूलित करने और उत्पादकता बढ़ाने के लिए एआई-संचालित उपकरणों का उपयोग करें।",
            financialAssistance: "वित्तीय सहायता",
            financialAssistanceDesc: "नवीनतम सरकारी सब्सिडी और योजनाओं की वास्तविक समय में अपडेट प्राप्त करें।",
            sustainableAgriculture: "सतत कृषि",
            sustainableAgricultureDesc: "इको-फ्रेंडली खेती और जैविक तरीकों के सर्वोत्तम अभ्यास सीखें।",
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
            rightsReserved: "सभी अधिकार सुरक्षित।",
            privacyPolicy: "गोपनीयता नीति",
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
