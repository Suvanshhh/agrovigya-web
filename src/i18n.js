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
            logout: "Logout",
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
              role: "Chair Advisory Council",
            },
            aishwaryayadav: {
              name: "Dr. Aishwarya Yadav",
              role: "Chair Executive Council",
            },
          },

          team: {
            shubhraTripathi: {
              name: "Shubhra Tripathi",
              role: "Founder and Director",
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
   
  "labour": {
    "title": "Labour Cost Estimation",
    "subtitle": "Estimate the labour cost for your crop and area easily.",
    "imageAlt": "Labour estimation illustration",
    "helpButton": "Confused about how to estimate your labour cost?",
    "cropName": "Crop Name",
    "selectCrop": "Select Crop",
    "crops": {
      "tomato": "Tomato",
      "potato": "Potato",
      "onion": "Onion"
    },
    "area": "Area",
    "selectArea": "Select Area",
    "season": "Season",
    "selectSeason": "Select Season",
    "seasons": {
      "spring": "Spring",
      "summer": "Summer",
      "fall": "Fall",
      "winter": "Winter"
    },
    "wageType": "Wage Type",
    "selectWageType": "Select Wage Type",
    "wageTypes": {
      "govt": "Govt",
      "expected": "Expected"
    },
    "calculate": "Calculate",
    "calculating": "Calculating...",
    "resultTitle": "Estimation Results",
    "crop": "Crop",
    "hectares": "hectares",
    "totalLabour": "Total Labor Required",
    "personDays": "person-days",
    "costPerHectare": "Cost per Hectare",
    "totalCost": "Total Cost",
    "na": "N/A",
    "errorFetch": "Failed to get estimation. Please try again.",
    "errorGeneric": "Something went wrong."
  },
  
  "labourGuide": {
    "title": "How to Use the Labour Cost Estimator",
    "steps": [
      "Select the crop you want to grow. Different crops may need different amounts of labour.",
      "Enter your farm’s size. 1 hectare = 10,000 sq. meters. Use your land papers or ask your local officer if unsure.",
      "Choose the season for your crop (Spring, Summer, Fall, Winter). Labour needs and costs can change by season.",
      "Select \"Govt\" for government-set wages or \"Expected\" for local market rates. Ask locally for the most accurate rates."
    ],
    "tips": [
      "Include all tasks: planting, weeding, harvesting, etc.",
      "Consider both hired and family labour. Family labour also has value (opportunity cost).",
      "Check local wage rates, as they can vary by area and season.",
      "For more help, see: <1>Farmstand: Labour Cost Guide</1>"
    ],
    "tipLabel": "Tip:",
    "tipText": "This tool helps you estimate the total labour cost for your farm, so you can plan your budget and decide if you need to hire help or do work yourself.",
    "close": "Close"
  },
  "farmerGuide": {
    "title": "How to Test Your Soil and Use the App",
    "steps": [
      "Take soil from 10–15 spots in your field (6–8 inches deep), mix them, dry, and put in a clean bag.",
      "Use a home test kit or send the sample to a lab for Nitrogen, Phosphorus, Potassium, and pH.",
      "Compare your values to these ranges:",
      "Add fertilizers or lime as needed.",
      "Enter values in the form to get crop recommendations!"
    ],
    "ranges": {
      "nitrogen": "Nitrogen: 20–40 ppm (medium)",
      "phosphorus": "Phosphorus: 15–30 ppm",
      "potassium": "Potassium: 120–200 ppm",
      "ph": "pH: 6.0–7.5 (most crops)"
    },
    "guidesLabel": "For detailed guides:",
    "guides": [
      {
        "label": "Modern Farmer: How to Test Your Soil",
        "url": "https://modernfarmer.com/2016/03/soil-testing/"
      },
      {
        "label": "Dr Green: Soil pH and Crops",
        "url": "https://dr-green.eu/soil-ph-what-should-every-farmer-know-about-soil-ph/"
      }
    ],
    "close": "Close"
  },
  "formPlaceholders": {
    "Nitrogen": "e.g. 35",
    "Phosphorus": "e.g. 20",
    "Potassium": "e.g. 40",
    "Temperature": "e.g. 25",
    "Humidity": "e.g. 80",
    "pH": "e.g. 6.5",
    "Rainfall": "e.g. 200"
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
          schemes: {
            title: "Government Schemes",
            explore:
              "Explore various government schemes available for farmers and rural development",
            search_placeholder: "Search for schemes...",
            type: "Scheme Type",
            all_types: "All Types",
            skill_development: "Skill Development",
            agri_market: "Agricultural Market",
            watershed: "Watershed Management",
            fisheries: "Fisheries Development",
            state: "State",
            all_states: "All States",
            maharashtra: "Maharashtra",
            karnataka: "Karnataka",
            tamil_nadu: "Tamil Nadu",
            gujarat: "Gujarat",
            punjab: "Punjab",
            income_level: "Income Level",
            all_levels: "All Levels",
            low_income: "Low Income",
            medium_income: "Medium Income",
            high_income: "High Income",
            loading: "Loading schemes...",
            no_results: "No schemes found matching your criteria.",
            clear_filters: "Clear Filters",
            retry: "Retry",
            ministry: "Ministry",
            states_eligible: "States Eligible",
            location: "Location",
            income_level_card: "Income Level",
            click_learn_more: "Click to learn more",
            show_filters: "Show Filters",
            hide_filters: "Hide Filters",
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
            logout: "लॉग आउट",
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
              role: "अध्यक्ष सलाहकार परिषद",
            },
            aishwaryayadav: {
              name: "डॉ. ऐश्वर्या यादव",
              role: "अध्यक्ष कार्यकारी परिषद",
            },
          },

          team: {
            shubhraTripathi: {
              name: "शुभ्रा त्रिपाठी",
              role: "संस्थापक और निदेशक",
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
          
  "labour": {
    "title": "श्रम लागत अनुमान",
    "subtitle": "अपने फसल और क्षेत्र के लिए श्रम लागत आसानी से अनुमानित करें।",
    "imageAlt": "श्रम लागत अनुमान चित्रण",
    "helpButton": "श्रम लागत का अनुमान कैसे लगाएं? उलझन में हैं?",
    "cropName": "फसल का नाम",
    "selectCrop": "फसल चुनें",
    "crops": {
      "tomato": "टमाटर",
      "potato": "आलू",
      "onion": "प्याज"
    },
    "area": "क्षेत्र",
    "selectArea": "क्षेत्र चुनें",
    "season": "मौसम",
    "selectSeason": "मौसम चुनें",
    "seasons": {
      "spring": "बसंत",
      "summer": "गर्मी",
      "fall": "पतझड़",
      "winter": "सर्दी"
    },
    "wageType": "मजदूरी प्रकार",
    "selectWageType": "मजदूरी प्रकार चुनें",
    "wageTypes": {
      "govt": "सरकारी",
      "expected": "अपेक्षित"
    },
    "calculate": "गणना करें",
    "calculating": "गणना हो रही है...",
    "resultTitle": "अनुमान परिणाम",
    "crop": "फसल",
    "hectares": "हेक्टेयर",
    "totalLabour": "कुल श्रम आवश्यक",
    "personDays": "व्यक्ति-दिन",
    "costPerHectare": "प्रति हेक्टेयर लागत",
    "totalCost": "कुल लागत",
    "na": "उपलब्ध नहीं",
    "errorFetch": "अनुमान प्राप्त करने में विफल। कृपया पुनः प्रयास करें।",
    "errorGeneric": "कुछ गलत हो गया।"
  },
  
  
  "labourGuide": {
    "title": "श्रम लागत अनुमानक का उपयोग कैसे करें",
    "steps": [
      "वह फसल चुनें जिसे आप उगाना चाहते हैं। अलग-अलग फसलों के लिए श्रम की आवश्यकता अलग हो सकती है।",
      "अपने खेत का आकार दर्ज करें। 1 हेक्टेयर = 10,000 वर्ग मीटर। यदि संदेह हो तो अपने भूमि कागजात देखें या स्थानीय अधिकारी से पूछें।",
      "अपने फसल के लिए मौसम चुनें (बसंत, गर्मी, पतझड़, सर्दी)। मौसम के अनुसार श्रम की आवश्यकता और लागत बदल सकती है।",
      "\"सरकारी\" मजदूरी या \"अपेक्षित\" स्थानीय मजदूरी चुनें। सटीक दर के लिए स्थानीय रूप से पूछें।"
    ],
    "tips": [
      "सभी कार्य शामिल करें: बुवाई, निराई, कटाई आदि।",
      "किराए के साथ-साथ पारिवारिक श्रम भी विचार करें। पारिवारिक श्रम का भी मूल्य है (अवसर लागत)।",
      "स्थानीय मजदूरी दर जांचें, क्योंकि वे क्षेत्र और मौसम के अनुसार बदल सकती हैं।",
      "अधिक सहायता के लिए देखें: <1>Farmstand: Labour Cost Guide</1>"
    ],
    "tipLabel": "टिप:",
    "tipText": "यह टूल आपको अपने खेत के लिए कुल श्रम लागत का अनुमान लगाने में मदद करता है, ताकि आप बजट बना सकें और तय कर सकें कि आपको मजदूर रखने हैं या खुद काम करना है।",
    "close": "बंद करें"
  },
  "farmerGuide": {
    "title": "अपनी मिट्टी कैसे जांचें और ऐप का उपयोग करें",
    "steps": [
      "अपने खेत के 10–15 स्थानों से मिट्टी लें (6–8 इंच गहराई तक), मिलाएं, सुखाएं और साफ बैग में रखें।",
      "घर पर किट से या लैब में सैंपल भेजकर नाइट्रोजन, फॉस्फोरस, पोटाशियम और pH जांचें।",
      "अपने परिणाम इन रेंज से मिलाएं:",
      "आवश्यकतानुसार उर्वरक या चुना डालें।",
      "फॉर्म में मान दर्ज करें और फसल की सिफारिश पाएं!"
    ],
    "ranges": {
      "nitrogen": "नाइट्रोजन: 20–40 पीपीएम (मध्यम)",
      "phosphorus": "फॉस्फोरस: 15–30 पीपीएम",
      "potassium": "पोटाशियम: 120–200 पीपीएम",
      "ph": "pH: 6.0–7.5 (अधिकांश फसलें)"
    },
    "guidesLabel": "विस्तृत गाइड के लिए:",
    "guides": [
      {
        "label": "मॉडर्न फार्मर: अपनी मिट्टी कैसे जांचें",
        "url": "https://modernfarmer.com/2016/03/soil-testing/"
      },
      {
        "label": "डॉ ग्रीन: मिट्टी का pH और फसलें",
        "url": "https://dr-green.eu/soil-ph-what-should-every-farmer-know-about-soil-ph/"
      }
    ],
    "close": "बंद करें"
  },
 "formPlaceholders": {
    "Nitrogen": "जैसे 35",
    "Phosphorus": "जैसे 20",
    "Potassium": "जैसे 40",
    "Temperature": "जैसे 25",
    "Humidity": "जैसे 80",
    "pH": "जैसे 6.5",
    "Rainfall": "जैसे 200"
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
          schemes: {
            title: "सरकारी योजनाएँ",
            explore:
              "किसानों और ग्रामीण विकास के लिए विभिन्न सरकारी योजनाएँ देखें",
            search_placeholder: "योजनाओं के लिए खोजें...",
            type: "योजना प्रकार",
            all_types: "सभी प्रकार",
            skill_development: "कौशल विकास",
            agri_market: "कृषि बाजार",
            watershed: "जलग्रहण प्रबंधन",
            fisheries: "मत्स्य पालन विकास",
            state: "राज्य",
            all_states: "सभी राज्य",
            maharashtra: "महाराष्ट्र",
            karnataka: "कर्नाटक",
            tamil_nadu: "तमिलनाडु",
            gujarat: "गुजरात",
            punjab: "पंजाब",
            income_level: "आय स्तर",
            all_levels: "सभी स्तर",
            low_income: "निम्न आय",
            medium_income: "मध्यम आय",
            high_income: "उच्च आय",
            loading: "योजनाएँ लोड हो रही हैं...",
            no_results: "आपके मापदंडों से मेल खाने वाली कोई योजना नहीं मिली।",
            clear_filters: "फ़िल्टर साफ़ करें",
            retry: "पुनः प्रयास करें",
            ministry: "मंत्रालय",
            states_eligible: "योग्य राज्य",
            location: "स्थान",
            income_level_card: "आय स्तर",
            click_learn_more: "और जानने के लिए क्लिक करें",
            show_filters: "फ़िल्टर दिखाएँ",
            hide_filters: "फ़िल्टर छुपाएँ",
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
            logout: "लॉग आउट",
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
              role: "अध्यक्ष सल्लागार परिषद",
            },
            aishwaryayadav: {
              name: "डॉ. ऐश्वर्या यादव",
              role: "अध्यक्ष कार्यकारी परिषद",
            },
          },

          team: {
            shubhraTripathi: {
              name: "शुभ्रा त्रिपाठी",
              role: "संस्थापक आणि संचालक",
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
          

  "labour": {
    "title": "श्रम खर्च अंदाज",
    "subtitle": "तुमच्या पिकासाठी आणि क्षेत्रासाठी श्रम खर्च सहजपणे मोजा.",
    "imageAlt": "श्रम खर्च अंदाज चित्रण",
    "helpButton": "श्रम खर्च कसा मोजायचा याबद्दल गोंधळले आहात?",
    "cropName": "पिकाचे नाव",
    "selectCrop": "पिक निवडा",
    "crops": {
      "tomato": "टोमॅटो",
      "potato": "बटाटा",
      "onion": "कांदा"
    },
    "area": "क्षेत्र",
    "selectArea": "क्षेत्र निवडा",
    "season": "हंगाम",
    "selectSeason": "हंगाम निवडा",
    "seasons": {
      "spring": "वसंत",
      "summer": "उन्हाळा",
      "fall": "शरद",
      "winter": "हिवाळा"
    },
    "wageType": "मजुरी प्रकार",
    "selectWageType": "मजुरी प्रकार निवडा",
    "wageTypes": {
      "govt": "शासकीय",
      "expected": "अपेक्षित"
    },
    "calculate": "गणना करा",
    "calculating": "गणना चालू आहे...",
    "resultTitle": "अंदाजित निकाल",
    "crop": "पिक",
    "hectares": "हेक्टेअर",
    "totalLabour": "एकूण श्रम आवश्यक",
    "personDays": "व्यक्ती-दिवस",
    "costPerHectare": "प्रति हेक्टेअर खर्च",
    "totalCost": "एकूण खर्च",
    "na": "उपलब्ध नाही",
    "errorFetch": "अंदाज मिळवण्यात अयशस्वी. कृपया पुन्हा प्रयत्न करा.",
    "errorGeneric": "काहीतरी चूक झाली."
  },
  
  "labourGuide": {
    "title": "श्रम खर्च गणकाचा वापर कसा करावा",
    "steps": [
      "तुम्ही कोणते पीक लावणार आहात ते निवडा. वेगवेगळ्या पिकांसाठी श्रमाची गरज वेगळी असू शकते.",
      "तुमच्या शेताचा आकार भरा. १ हेक्टेअर = १०,००० चौ. मीटर. खात्री नसल्यास जमीन कागदपत्रे पाहा किंवा स्थानिक अधिकाऱ्यांना विचारा.",
      "तुमच्या पिकासाठी हंगाम निवडा (वसंत, उन्हाळा, शरद, हिवाळा). हंगामानुसार श्रमाची गरज आणि खर्च बदलू शकतो.",
      "\"शासकीय\" किंवा \"अपेक्षित\" मजुरी निवडा. अचूक दरासाठी स्थानिक पातळीवर विचारा."
    ],
    "tips": [
      "सर्व कामे समाविष्ट करा: पेरणी, खुरपणी, कापणी इ.",
      "भाड्याने घेतलेले तसेच कुटुंबातील श्रम विचारात घ्या. कुटुंबातील श्रमाचेही मूल्य आहे (संधी खर्च).",
      "स्थानिक मजुरी दर तपासा, कारण ते क्षेत्र व हंगामानुसार बदलतात.",
      "अधिक माहितीसाठी पहा: <1>Farmstand: Labour Cost Guide</1>"
    ],
    "tipLabel": "टीप:",
    "tipText": "हे टूल तुमच्या शेतासाठी एकूण श्रम खर्चाचा अंदाज लावण्यास मदत करते, जेणेकरून तुम्ही बजेट आखू शकता आणि कामासाठी मजूर ठेवायचे की स्वतः करायचे हे ठरवू शकता.",
    "close": "बंद करा"
  },
  "farmerGuide": {
    "title": "आपली माती कशी तपासावी आणि ॲप वापरावे",
    "steps": [
      "शेतातील १०–१५ ठिकाणांहून माती घ्या (६–८ इंच खोलीवरून), मिसळा, वाळवा आणि स्वच्छ पिशवीत ठेवा.",
      "घरच्या किटने किंवा प्रयोगशाळेत नमुना पाठवून नायट्रोजन, फॉस्फरस, पोटॅशियम आणि pH तपासा.",
      "तुमचे परिणाम या मर्यादांशी जुळवा:",
      "गरजेनुसार खत किंवा चुना घाला.",
      "फॉर्ममध्ये मूल्ये भरा आणि पीक शिफारस मिळवा!"
    ],
    "ranges": {
      "nitrogen": "नायट्रोजन: २०–४० पीपीएम (मध्यम)",
      "phosphorus": "फॉस्फरस: १५–३० पीपीएम",
      "potassium": "पोटॅशियम: १२०–२०० पीपीएम",
      "ph": "pH: ६.०–७.५ (बहुतेक पिके)"
    },
    "guidesLabel": "सविस्तर मार्गदर्शकांसाठी:",
    "guides": [
      {
        "label": "मॉडर्न फार्मर: आपली माती कशी तपासावी",
        "url": "https://modernfarmer.com/2016/03/soil-testing/"
      },
      {
        "label": "डॉ ग्रीन: मातीचा pH आणि पिके",
        "url": "https://dr-green.eu/soil-ph-what-should-every-farmer-know-about-soil-ph/"
      }
    ],
    "close": "बंद करा"
  },
  
  "formPlaceholders": {
    "Nitrogen": "उदा. 35",
    "Phosphorus": "उदा. 20",
    "Potassium": "उदा. 40",
    "Temperature": "उदा. 25",
    "Humidity": "उदा. 80",
    "pH": "उदा. 6.5",
    "Rainfall": "उदा. 200"
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
          schemes: {
            title: "शासकीय योजना",
            explore: "शेतकरी आणि ग्रामीण विकासासाठी विविध शासकीय योजना शोधा",
            search_placeholder: "योजनांसाठी शोधा...",
            type: "योजना प्रकार",
            all_types: "सर्व प्रकार",
            skill_development: "कौशल्य विकास",
            agri_market: "कृषी बाजार",
            watershed: "जलसंधारण व्यवस्थापन",
            fisheries: "मच्छीमारी विकास",
            state: "राज्य",
            all_states: "सर्व राज्ये",
            maharashtra: "महाराष्ट्र",
            karnataka: "कर्नाटक",
            tamil_nadu: "तामिळनाडू",
            gujarat: "गुजरात",
            punjab: "पंजाब",
            income_level: "उत्पन्न स्तर",
            all_levels: "सर्व स्तर",
            low_income: "कमी उत्पन्न",
            medium_income: "मध्यम उत्पन्न",
            high_income: "जास्त उत्पन्न",
            loading: "योजना लोड होत आहेत...",
            no_results: "आपल्या निकषांशी जुळणारी कोणतीही योजना सापडली नाही.",
            clear_filters: "फिल्टर साफ करा",
            retry: "पुन्हा प्रयत्न करा",
            ministry: "मंत्रालय",
            states_eligible: "पात्र राज्ये",
            location: "स्थान",
            income_level_card: "उत्पन्न स्तर",
            click_learn_more: "अधिक जाणून घेण्यासाठी क्लिक करा",
            show_filters: "फिल्टर दाखवा",
            hide_filters: "फिल्टर लपवा",
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
