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
            subtitle:
              "Join AgroVigya in revolutionizing agriculture through smart solutions and sustainable practices.",
            getCropSuggestions: "Get Crop Suggestions",
            ourServices: "Our Services",
            whyChooseUs: "Why Choose AgroVigya?",
            contact: "Contact Us NOW!",
            getStarted: "Get Started",
          },
          aboutUs: {
            whoWeAre: "Who We Are",
            whoWeAreContent:
              "We are a team of passionate developers and researchers...",
            globalImpact: "Global Impact",
            globalImpactDesc: "We aim to make a positive impact globally...",
            expertTeam: "Expert Team",
            expertTeamDesc:
              "Our team consists of experts from various domains...",
            innovation: "Innovation",
            innovationDesc: "We foster a culture of innovation...",
            focusedApproach: "Focused Approach",
            focusedApproachDesc:
              "Our approach is always focused on delivering results...",
          },

          mentor: {
            ashokpalande: {
              name: "Adv. Ashok Palande",
              role: "Vice Chairman, GB and Council, DES Chairman, CDC, DES SNFLC",
            },
            sunitaadhav: {
              name: "Dr. Sunita Adhav",
              role: "Principal, DES SNFLC",
            },
            anujasharma: {
              name: "Anuja Sharma",
              role: "Project Mentor",
            },
            aishwaryayadav: {
              name: "Dr. Aishwarya Yadav",
              role: "Project Mentor",
            },
          },

          team: {
            shubhraTripathi: {
              name: "Shubhra Tripathi",
              role: "Founder",
            },

            siyaNimkar: {
              name: "Siya Nimkar",
              role: "Researcher",
            },
            shrutiKolhe: {
              name: "Shrut Kolhe",
              role: "Researcher",
            },
            suvanshChoudhary: {
              name: "Suvansh Choudhary",
              role: "Developer",
            },
            agnivaMaiti: {
              name: "Agniva Maiti",
              role: "Developer",
            },
            shivam: {
              name: "Shivam",
              role: "Developer",
            },
            ishaDeolakar: {
              name: "Isha Deolakar",
              role: "UI/UX & Graphic Designer",
            },
          },
          ourVision: "Our Vision",
          visionContent: "Our vision is to transform the industry...",
          ourMentors: "Our Mentors",
          ourFounder: "Our Founder",
          ourTeam: "Our Team",
          services: {
            governmentSchemes: "Government Schemes",
            governmentSchemesDesc:
              "Get access to the latest farming subsidies and financial aid programs.",
            cropSuggestion: "Crop Suggestion",
            cropSuggestionDesc:
              "AI-based recommendations for the best crops based on soil & weather conditions.",
            marketplace: "Agricultural Marketplace",
            marketplaceDesc:
              "Buy & sell farm produce directly to customers & businesses.",
            findJobs: "Find Jobs",
            findJobsDesc:
              "Explore agricultural employment opportunities tailored for farmers.",
            skillDevelopment: "Skill Development",
            skillDevelopmentDesc:
              "Upskill with training programs on modern farming techniques.",
            exploreMarketplace: "Explore Marketplace",
            labourEstimation: "Labour Estimation", // Added key
            labourEstimationDesc:
              "Calculate the estimated labour costs for your agricultural needs.", // Added key
          },
          crop: {
            title: "Crop Recommendation System",
            subtitle:
              "Get the best crop suggestions based on soil and weather conditions.",
            imageAlt: "Crop recommendation illustration",
          },
          crop_recom: {
            form: {
              Nitrogen: "Nitrogen",
              Phosphorus: "Phosphorus",
              Potassium: "Potassium",
              Temperature: "Temperature (°C)",
              Humidity: "Humidity (%)",
              pH: "pH Level",
              Rainfall: "Rainfall (mm)",
            },
            predictButton: "Predict Crop",
            resultSuccess: "Predicted Crop: {{crop}}",
            resultFail: "Prediction failed.",
            resultError: "Prediction failed: {{error}}",
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
            cropType: "Crop Type",
          },
          contact: {
            title: "Contact us",
            namePlaceholder: "Your Name",
            emailPlaceholder: "Your Email",
            messagePlaceholder: "Your Message",
            sendButton: "Send Message",
            emailTitle: "Email",
            phoneTitle: "Phone",
            locationTitle: "Location",
            locationText: "XYZ, Maharashtra, India",
          },
          common: {
            calculating: "Calculating...",
            estimateNow: "Estimate Now",
            hectare: "Hectare",
            hectares: "Hectares",
            govtRate: "Government Rate",
          },
          errors: {
            fetchCrops: "Failed to load crop list.",
            estimationFailed: "Cost estimation failed.",
          },
          whyChooseUs: {
            smartFarming: "Smart Farming",
            smartFarmingDesc:
              "Leverage AI-powered tools to optimize yield and boost productivity.",
            financialAssistance: "Financial Assistance",
            financialAssistanceDesc:
              "Get real-time updates on the latest government subsidies and schemes.",
            sustainableAgriculture: "Sustainable Agriculture",
            sustainableAgricultureDesc:
              "Learn best practices for eco-friendly farming and organic methods.",
            learnMore: "Learn More",
            whyagrovigya: "Why Choose AgroVigya?",
          },
          blog: {
            sectionTitle: "Read Our Blogs",
            readMore: "read more",
            blog1: {
              title:
                "The Future of Farming: How Technology is Revolutionizing Agriculture",
              desc: "Agriculture has come a long way from traditional methods, evolving into a high-tech industry that blends science, innovation, and sustainability. As the global population...",
            },
            blog2: {
              title:
                "The Future of Farming: How Technology is Revolutionizing Agriculture",
              desc: "Agriculture has come a long way from traditional methods, evolving into a high-tech industry that blends science, innovation, and sustainability. As the global population...",
            },
            blog3: {
              title:
                "The Future of Farming: How Technology is Revolutionizing Agriculture",
              desc: "Agriculture has come a long way from traditional methods, evolving into a high-tech industry that blends science, innovation, and sustainability. As the global population...",
            },
            blog4: {
              title:
                "The Future of Farming: How Technology is Revolutionizing Agriculture",
              desc: "Agriculture has come a long way from traditional methods, evolving into a high-tech industry that blends science, innovation, and sustainability. As the global population...",
            },
          },

          signup: {
            title: "Sign up",
            fullName: "Full Name",
            phoneNumber: "Phone Number",
            email: "Email",
            password: "Password",
            confirmPassword: "Confirm Password",
            namePlaceholder: "Ex: Suvansh Choudhary",
            phonePlaceholder: "Ex: 1234567890",
            emailPlaceholder: "Ex: abcd@gmail.com",
            passwordPlaceholder: "Ex: 12345678",
            confirmPasswordPlaceholder: "Enter your password",
            agreePrefix: "I agree to all",
            termsOfUse: "Terms of Use",
            privacyPolicy: "Privacy Policy",
            and: "and",
            signUp: "Sign up",
            or: "or",
            signUpWithGoogle: "Sign up with Google",
            alreadyAccount: "Already have an account?",
            loginHere: "Log in here",
            illustrationAlt: "Farmers Illustration",
            fillAllFields: "Please fill in all fields",
            passwordMismatch: "Passwords do not match",
            mustAgree: "You must agree to the Terms of Use and Privacy Policy",
            signupFailed: "Signup failed",
            googleSignupFailed: "Google signup failed",
          },
          login: {
            title: "Login",
            emailPlaceholder: "Email",
            passwordPlaceholder: "Password",
            loginButton: "Log in",
            googleLogin: "Sign in with Google",
            googleError: "Failed to sign in with Google",
            error: "Failed to log in:",
            forgotPassword: "Forgot password?",
            signupPrompt: "Not registered yet?",
            signupLink: "Sign Up here",
            illustrationAlt: "Farmers Illustration",
          },
          footer: {
            companyDesc:
              "Empowering farmers with technology-driven solutions for a sustainable future.",
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
            subtitle:
              "स्मार्ट समाधान और स्थायी प्रथाओं के माध्यम से कृषि में क्रांति लाने के लिए AgroVigya से जुड़ें।",
            getCropSuggestions: "फसल सुझाव प्राप्त करें",
            ourServices: "हमारी सेवाएं",
            whyChooseUs: "क्यों चुनें AgroVigya?",
            contact: "संपर्क करें",
            getStarted: "शुरू करें",
          },

          aboutUs: {
            whoWeAre: "हम कौन हैं",
            whoWeAreContent:
              "हम जोशीले डेवलपर्स और शोधकर्ताओं की एक टीम हैं...",
            globalImpact: "वैश्विक प्रभाव",
            globalImpactDesc:
              "हम वैश्विक स्तर पर सकारात्मक प्रभाव बनाने का लक्ष्य रखते हैं...",
            expertTeam: "विशेषज्ञ टीम",
            expertTeamDesc:
              "हमारी टीम विभिन्न क्षेत्रों के विशेषज्ञों से बनी है...",
            innovation: "नवाचार",
            innovationDesc: "हम नवाचार की संस्कृति को बढ़ावा देते हैं...",
            focusedApproach: "केंद्रित दृष्टिकोण",
            focusedApproachDesc:
              "हमारा दृष्टिकोण हमेशा परिणामों पर केंद्रित रहता है...",
          },
          ourVision: "हमारा दृष्टिकोण",
          visionContent: "हमारा दृष्टिकोण उद्योग को बदलने का है...",
          ourMentors: "हमारे मार्गदर्शक",
          ourFounder: "हमारे संस्थापक",
          ourTeam: "हमारी टीम",
          mentor: {
            ashokpalande: {
              name: "अधिवक्ता अशोक पालांडे",
              role: "उपाध्यक्ष, जीबी और काउंसिल, डीईएस अध्यक्ष, सीडीसी, डीईएस एसएनएफएलसी",
            },
            sunitaadhav: {
              name: "डॉ. सुनीता आदव",
              role: "प्रधानाचार्य, डीईएस एसएनएफएलसी",
            },
            anujasharma: {
              name: "अनुजा शर्मा",
              role: "प्रोजेक्ट मेंटर",
            },
            aishwaryayadav: {
              name: "डॉ. ऐश्वर्या यादव",
              role: "प्रोजेक्ट मेंटर",
            },
          },

          team: {
            shubhraTripathi: {
              name: "शुभ्रा त्रिपाठी",
              role: "संस्थापक",
            },
            siyaNimkar: {
              name: "सिया निमकर",
              role: "अनुसंधानकर्ता",
            },
            shrutiKolhe: {
              name: "श्रुति कोल्हे",
              role: "अनुसंधानकर्ता",
            },
            suvanshChoudhary: {
              name: "सुवंश चौधरी",
              role: "डेवलपर",
            },
            agnivaMaiti: {
              name: "अग्निवा मइती",
              role: "डेवलपर",
            },
            shivam: {
              name: "शिवम",
              role: "डेवलपर",
            },
            ishaDeolakar: {
              name: "ईशा देओलकर",
              role: "UI/UX और ग्राफिक डिज़ाइनर",
            },
          },

          services: {
            governmentSchemes: "सरकारी योजनाएँ",
            governmentSchemesDesc:
              "नवीनतम कृषि सब्सिडी और वित्तीय सहायता कार्यक्रमों तक पहुंच प्राप्त करें।",
            cropSuggestion: "फसल सुझाव",
            cropSuggestionDesc:
              "मिट्टी और मौसम की स्थिति के आधार पर एआई-आधारित सिफारिशें।",
            marketplace: "कृषि बाजार",
            marketplaceDesc:
              "कृषि उत्पादों को सीधे ग्राहकों और व्यवसायों को खरीदें और बेचें।",
            findJobs: "नौकरी खोजें",
            findJobsDesc: "किसानों के लिए उपयुक्त कृषि रोजगार के अवसर खोजें।",
            skillDevelopment: "कौशल विकास",
            labourEstimation: "श्रम लागत अनुमान", // Added key
            labourEstimationDesc:
              "आपकी कृषि आवश्यकताओं के लिए अनुमानित श्रम लागत की गणना करें।", // Added key
            skillDevelopmentDesc:
              "आधुनिक कृषि तकनीकों पर प्रशिक्षण कार्यक्रमों के साथ कौशल बढ़ाएँ।",
            exploreMarketplace: "बाजार का अन्वेषण करें",
          },
          crop: {
            title: "फसल सिफारिश प्रणाली",
            subtitle:
              "मिट्टी और मौसम की स्थिति के आधार पर सर्वोत्तम फसल सुझाव प्राप्त करें।",
            imageAlt: "फसल सिफारिश चित्रण",
          },
          crop_recom: {
            form: {
              Nitrogen: "नाइट्रोजन",
              Phosphorus: "फॉस्फोरस",
              Potassium: "पोटैशियम",
              Temperature: "तापमान (°C)",
              Humidity: "आर्द्रता (%)",
              pH: "pH स्तर",
              Rainfall: "वर्षा (मिमी)",
            },
            predictButton: "फसल की भविष्यवाणी करें",
            resultSuccess: "अनुमानित फसल: {{crop}}",
            resultFail: "भविष्यवाणी असफल रही।",
            resultError: "भविष्यवाणी असफल रही: {{error}}",
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
            cropType: "फसल का प्रकार",
          },
          contact: {
            title: "संपर्क करें",
            namePlaceholder: "आपका नाम",
            emailPlaceholder: "आपका ईमेल",
            messagePlaceholder: "आपका संदेश",
            sendButton: "संदेश भेजें",
            emailTitle: "ईमेल",
            phoneTitle: "फ़ोन",
            locationTitle: "स्थान",
            locationText: "XYZ, महाराष्ट्र, भारत",
          },
          common: {
            calculating: "गणना हो रही है...",
            estimateNow: "अभी अनुमान लगाएं",
            hectare: "हेक्टेयर",
            hectares: "हेक्टेयर",
            govtRate: "सरकारी दर",
          },
          errors: {
            fetchCrops: "फसल सूची लोड करने में विफल।",
            estimationFailed: "लागत अनुमान विफल।",
          },
          whyChooseUs: {
            smartFarming: "स्मार्ट खेती",
            smartFarmingDesc:
              "उपज को अनुकूलित करने और उत्पादकता बढ़ाने के लिए एआई-संचालित उपकरणों का लाभ उठाएं।",
            financialAssistance: "वित्तीय सहायता",
            financialAssistanceDesc:
              "नवीनतम सरकारी सब्सिडी और योजनाओं पर वास्तविक समय में अपडेट प्राप्त करें।",
            sustainableAgriculture: "स्थायी कृषि",
            sustainableAgricultureDesc:
              "पारिस्थितिकीय रूप से अनुकूल खेती और जैविक तरीकों के लिए सर्वोत्तम प्रथाओं को जानें।",
            learnMore: "और जानें",
            whyagrovigya: "AgroVigya को क्यों चुनें?",
          },

          blog: {
            sectionTitle: "हमारे ब्लॉग पढ़ें",
            readMore: "अधिक पढ़ें",
            blog1: {
              title:
                "कृषि का भविष्य: कैसे तकनीकी कृषि को क्रांतिकारी बना रही है",
              desc: "कृषि पारंपरिक तरीकों से काफी आगे बढ़ चुकी है, यह अब एक उच्च-तकनीकी उद्योग बन चुका है जो विज्ञान, नवाचार और स्थिरता को मिलाता है। जैसा कि वैश्विक जनसंख्या...",
            },
            blog2: {
              title:
                "कृषि का भविष्य: कैसे तकनीकी कृषि को क्रांतिकारी बना रही है",
              desc: "कृषि पारंपरिक तरीकों से काफी आगे बढ़ चुकी है, यह अब एक उच्च-तकनीकी उद्योग बन चुका है जो विज्ञान, नवाचार और स्थिरता को मिलाता है। जैसा कि वैश्विक जनसंख्या...",
            },
            blog3: {
              title:
                "कृषि का भविष्य: कैसे तकनीकी कृषि को क्रांतिकारी बना रही है",
              desc: "कृषि पारंपरिक तरीकों से काफी आगे बढ़ चुकी है, यह अब एक उच्च-तकनीकी उद्योग बन चुका है जो विज्ञान, नवाचार और स्थिरता को मिलाता है। जैसा कि वैश्विक जनसंख्या...",
            },
            blog4: {
              title:
                "कृषि का भविष्य: कैसे तकनीकी कृषि को क्रांतिकारी बना रही है",
              desc: "कृषि पारंपरिक तरीकों से काफी आगे बढ़ चुकी है, यह अब एक उच्च-तकनीकी उद्योग बन चुका है जो विज्ञान, नवाचार और स्थिरता को मिलाता है। जैसा कि वैश्विक जनसंख्या...",
            },
          },

          signup: {
            title: "साइन अप करें",
            fullName: "पूरा नाम",
            phoneNumber: "फोन नंबर",
            email: "ईमेल",
            password: "पासवर्ड",
            confirmPassword: "पासवर्ड की पुष्टि करें",
            namePlaceholder: "उदाहरण: सुवंश चौधरी",
            phonePlaceholder: "उदाहरण: 1234567890",
            emailPlaceholder: "उदाहरण: suvansh04@gmail.com",
            passwordPlaceholder: "उदाहरण: 12345678",
            confirmPasswordPlaceholder: "अपना पासवर्ड दर्ज करें",
            agreePrefix: "मैं सभी",
            termsOfUse: "उपयोग की शर्तों",
            privacyPolicy: "गोपनीयता नीति",
            and: "और",
            signUp: "साइन अप करें",
            or: "या",
            signUpWithGoogle: "Google के साथ साइन अप करें",
            alreadyAccount: "पहले से ही एक खाता है?",
            loginHere: "यहाँ लॉग इन करें",
            illustrationAlt: "किसानों का चित्रण",
            fillAllFields: "कृपया सभी फ़ील्ड भरें",
            passwordMismatch: "पासवर्ड मेल नहीं खाते",
            mustAgree:
              "आपको उपयोग की शर्तों और गोपनीयता नीति से सहमत होना चाहिए",
            signupFailed: "साइन अप विफल",
            googleSignupFailed: "Google साइन अप विफल",
          },
          login: {
            title: "लॉगिन",
            emailPlaceholder: "ईमेल",
            passwordPlaceholder: "पासवर्ड",
            loginButton: "लॉगिन करें",
            googleLogin: "Google के साथ साइन इन करें",
            googleError: "Google के साथ साइन इन करने में विफल",
            error: "लॉगिन करने में विफल:",
            forgotPassword: "पासवर्ड भूल गए?",
            signupPrompt: "अभी तक पंजीकृत नहीं हैं?",
            signupLink: "यहाँ साइन अप करें",
            illustrationAlt: "किसानों का चित्रण",
          },
          footer: {
            companyDesc:
              "किसानों को तकनीक-आधारित समाधान प्रदान कर एक स्थायी भविष्य की ओर अग्रसर करना।",
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
            subtitle:
              "स्मार्ट सोल्यूशन्स आणि शाश्वत शेती पद्धतींसह कृषी क्षेत्रात क्रांती घडवा.",
            getCropSuggestions: "पिकांच्या शिफारसी मिळवा",
            ourServices: "आमच्या सेवा",
            whyChooseUs: "आम्हाला का निवडावे?",
            contact: "आमच्याशी संपर्क साधा!",
            getStarted: "सुरु करा",
          },

          aboutUs: {
            whoWeAre: "आम्ही कोण आहोत",
            whoWeAreContent:
              "आम्ही उत्साही विकसक आणि संशोधकांची एक टीम आहोत...",
            globalImpact: "जागतिक प्रभाव",
            globalImpactDesc:
              "आम्ही जागतिक स्तरावर सकारात्मक प्रभाव निर्माण करण्याचा प्रयत्न करतो...",
            expertTeam: "तज्ज्ञ टीम",
            expertTeamDesc:
              "आमची टीम विविध क्षेत्रातील तज्ज्ञांनी बनलेली आहे...",
            innovation: "नवोन्मेष",
            innovationDesc: "आम्ही नवोन्मेषाची संस्कृती वाढवतो...",
            focusedApproach: "केंद्रित दृष्टिकोन",
            focusedApproachDesc:
              "आमचा दृष्टिकोन नेहमीच परिणामांवर केंद्रित असतो...",
          },
          ourVision: "आमचे दृष्टिकोन",
          visionContent: "आमचे दृष्टिकोन उद्योग बदलण्याचे आहे...",
          ourMentors: "आमचे मार्गदर्शक",
          ourFounder: "आमचे संस्थापक",
          ourTeam: "आमची टीम",
          mentor: {
            ashokpalande: {
              name: "अ‍ॅड. अशोक पालांडे",
              role: "उपाध्यक्ष, जीबी आणि काऊन्सिल, डीईएस अध्यक्ष, सीडीसी, डीईएस एसएनएफएलसी",
            },
            sunitaadhav: {
              name: "डॉ. सुनीता आदव",
              role: "प्राचार्य, डीईएस एसएनएफएलसी",
            },
            anujasharma: {
              name: "अनुजा शर्मा",
              role: "प्रोजेक्ट मेंटर",
            },
            aishwaryayadav: {
              name: "डॉ. ऐश्वर्या यादव",
              role: "प्रोजेक्ट मेंटर",
            },
          },

          team: {
            shubhraTripathi: {
              name: "शुभ्रा त्रिपाठी",
              role: "संस्थापक",
            },
            siyaNimkar: {
              name: "सिया निमकर",
              role: "अनुसंधानकर्ता",
            },
            shrutiKolhe: {
              name: "श्रुति कोल्हे",
              role: "अनुसंधानकर्ता",
            },
            suvanshChoudhary: {
              name: "सुवंश चौधरी",
              role: "डेवलपर",
            },
            agnivaMaiti: {
              name: "अग्निवा मइती",
              role: "डेवलपर",
            },
            shivam: {
              name: "शिवम",
              role: "डेवलपर",
            },
            ishaDeolakar: {
              name: "ईशा देओलकर",
              role: "UI/UX और ग्राफिक डिज़ाइनर",
            },
          },

          services: {
            governmentSchemes: "सरकारी योजना",
            governmentSchemesDesc:
              "नवीनतम शेती अनुदाने आणि वित्तीय सहाय्य योजनांचा लाभ घ्या.",
            cropSuggestion: "पीक शिफारस",
            cropSuggestionDesc:
              "माती आणि हवामानाच्या स्थितीवर आधारित एआय-आधारित शिफारसी.",
            marketplace: "कृषी बाजारपेठ",
            marketplaceDesc:
              "शेती उत्पादन थेट ग्राहक आणि व्यवसायांना विक्री करा.",
            findJobs: "नोकरी शोधा",
            labourEstimation: "कामगार खर्च अंदाज", // Added key
            labourEstimationDesc:
              "तुमच्या कृषी गरजांसाठी अंदाजित कामगार खर्चाची गणना करा.", // Added key
            findJobsDesc: "शेतीशी संबंधित रोजगार संधी शोधा.",
            skillDevelopment: "कौशल्य विकास",
            skillDevelopmentDesc:
              "आधुनिक शेती तंत्रज्ञान शिकण्यासाठी प्रशिक्षण प्रोग्राम.",
            exploreMarketplace: "बाजारपेठ एक्सप्लोर करा",
          },
          crop: {
            title: "पीक शिफारस प्रणाली",
            subtitle:
              "माती आणि हवामानाच्या स्थितीवर आधारित सर्वोत्तम पीक शिफारसी मिळवा.",
            imageAlt: "पीक शिफारस चित्रण",
          },
          crop_recom: {
            form: {
              Nitrogen: "नायट्रोजन",
              Phosphorus: "फॉस्फरस",
              Potassium: "पोटॅशियम",
              Temperature: "तापमान (°C)",
              Humidity: "आर्द्रता (%)",
              pH: "pH पातळी",
              Rainfall: "पर्जन्यवृष्टी (मिमी)",
            },
            predictButton: "पिकाचा अंदाज लावा",
            resultSuccess: "अंदाजित पीक: {{crop}}",
            resultFail: "पिकाचा अंदाज लावण्यात अयशस्वी.",
            resultError: "पिकाचा अंदाज अयशस्वी: {{error}}",
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
            cropType: "पिकाचा प्रकार",
          },
          contact: {
            title: "आमच्याशी संपर्क साधा",
            namePlaceholder: "तुमचं नाव",
            emailPlaceholder: "तुमचा ईमेल",
            messagePlaceholder: "तुमचा संदेश",
            sendButton: "संदेश पाठवा",
            emailTitle: "ईमेल",
            phoneTitle: "फोन",
            locationTitle: "स्थान",
            locationText: "XYZ, महाराष्ट्र, भारत",
          },
          common: {
            calculating: "गणना चालू आहे...",
            estimateNow: "आता अंदाज लावा",
            hectare: "हेक्टेयर",
            hectares: "हेक्टेयर",
            govtRate: "सरकारी दर",
          },
          errors: {
            fetchCrops: "पीक यादी लोड करण्यात अयशस्वी.",
            estimationFailed: "खर्चाचा अंदाज अयशस्वी.",
          },
          whyChooseUs: {
            smartFarming: "स्मार्ट शेती",
            smartFarmingDesc:
              "उत्पादन वाढवण्यासाठी एआय-संचालित साधनांचा वापर करा.",
            financialAssistance: "आर्थिक सहाय्य",
            financialAssistanceDesc:
              "नवीनतम सरकारी अनुदान आणि योजनांवर रिअल-टाइम अपडेट मिळवा.",
            sustainableAgriculture: "शाश्वत शेती",
            sustainableAgricultureDesc:
              "पारिस्थितिकीय शेती आणि जैविक पद्धतींसाठी सर्वोत्तम पद्धती शिकणे.",
            learnMore: "अधिक जाणून घ्या",
            whyagrovigya: "AgroVigya का निवडावे?",
          },

          blog: {
            sectionTitle: "आमचे ब्लॉग वाचा",
            readMore: "अधिक वाचा",
            blog1: {
              title: "कृषीचा भविष्य: कसा तंत्रज्ञान शेतीला क्रांतिकारी बनवतोय",
              desc: "कृषी पारंपारिक पद्धतींना मागे टाकून एक उच्च-तंत्रज्ञान उद्योग बनली आहे, जी विज्ञान, नवकल्पना आणि शाश्वततेला एकत्र करते. जसे की जागतिक लोकसंख्या...",
            },
            blog2: {
              title: "कृषीचा भविष्य: कसा तंत्रज्ञान शेतीला क्रांतिकारी बनवतोय",
              desc: "कृषी पारंपारिक पद्धतींना मागे टाकून एक उच्च-तंत्रज्ञान उद्योग बनली आहे, जी विज्ञान, नवकल्पना आणि शाश्वततेला एकत्र करते. जसे की जागतिक लोकसंख्या...",
            },
            blog3: {
              title: "कृषीचा भविष्य: कसा तंत्रज्ञान शेतीला क्रांतिकारी बनवतोय",
              desc: "कृषी पारंपारिक पद्धतींना मागे टाकून एक उच्च-तंत्रज्ञान उद्योग बनली आहे, जी विज्ञान, नवकल्पना आणि शाश्वततेला एकत्र करते. जसे की जागतिक लोकसंख्या...",
            },
            blog4: {
              title: "कृषीचा भविष्य: कसा तंत्रज्ञान शेतीला क्रांतिकारी बनवतोय",
              desc: "कृषी पारंपारिक पद्धतींना मागे टाकून एक उच्च-तंत्रज्ञान उद्योग बनली आहे, जी विज्ञान, नवकल्पना आणि शाश्वततेला एकत्र करते. जसे की जागतिक लोकसंख्या...",
            },
          },

          signup: {
            title: "साइन अप करा",
            fullName: "पूर्ण नाव",
            phoneNumber: "फोन नंबर",
            email: "ई-मेल",
            password: "पासवर्ड",
            confirmPassword: "पासवर्डची पुष्टी करा",
            namePlaceholder: "उदाहरण: सुवंश चौधरी",
            phonePlaceholder: "उदाहरण: 1234567890",
            emailPlaceholder: "उदाहरण: suvansh@gmail.com",
            passwordPlaceholder: "उदाहरण: 12345678",

            confirmPasswordPlaceholder: "तुमचा पासवर्ड प्रविष्ट करा",
            agreePrefix: "मी सर्व",
            termsOfUse: "उपयोगाच्या अटी",
            privacyPolicy: "गोपनीयता धोरण",
            and: "आणि",
            signUp: "साइन अप करा",
            or: "किंवा",
            signUpWithGoogle: "Google सह साइन अप करा",
            alreadyAccount: "आधीच एक खाता आहे?",
            loginHere: "इथे लॉगिन करा",
            illustrationAlt: "शेतकऱ्यांचे चित्रण",
            fillAllFields: "कृपया सर्व फील्ड भरा",
            passwordMismatch: "पासवर्ड जुळत नाहीत",
            mustAgree:
              "तुम्हाला उपयोगाच्या अटी आणि गोपनीयता धोरणावर सहमत असणे आवश्यक आहे",
            signupFailed: "साइन अप अयशस्वी",
            googleSignupFailed: "Google साइन अप अयशस्वी",
          },
          login: {
            title: "लॉगिन",
            emailPlaceholder: "ई-मेल",
            passwordPlaceholder: "पासवर्ड",
            loginButton: "लॉगिन करा",
            googleLogin: "Google सह साइन इन करा",
            googleError: "Google सह साइन इन करण्यात अयशस्वी",
            error: "लॉगिन करण्यात अयशस्वी:",
            forgotPassword: "पासवर्ड विसरलात?",
            signupPrompt: "अद्याप नोंदणी केलेली नाही?",
            signupLink: "इथे साइन अप करा",
            illustrationAlt: "शेतकऱ्यांचे चित्रण",
          },
          footer: {
            companyDesc:
              "शेतकऱ्यांना तंत्रज्ञानावर आधारित उपायांसह सशक्त करणे.",
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
