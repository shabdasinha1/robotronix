import { FaVideo, FaBrain, FaHeartbeat } from "react-icons/fa";
import { RiTaxiWifiLine } from "react-icons/ri";
import { FaChargingStation } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
import {
  SiCircuitverse,
  SiSmartthings,
  SiGoogleclassroom,
  SiMoodle,
  SiUnity,
  SiTensorflow,
  SiProbot,
  SiChatbot,
} from "react-icons/si";
import { FaTrafficLight, FaTruckMoving } from "react-icons/fa";
import {
  FaShieldAlt,
  FaMobileAlt,
  FaWallet,
  FaCreditCard,
  FaBuilding,
  FaMoneyCheckAlt,
  FaFingerprint,
  FaExchangeAlt,
  FaChartLine,
  FaLock,
} from "react-icons/fa";

import telemedicine from "../../../assets/img/family-dr.jpg";
import dignostics from "../../../assets/img/dignostic.jpg";
import chatbots from "../../../assets/img/chatbots.jpg";
import pharmacy from "../../../assets/img/pharmacist-work.jpg";
import patientsEngaging from "../../../assets/img/patients-engaging.jpg";
import fleet from "../../../assets/img/close-up-electric-car-charging.jpg";
import battery from "../../../assets/img/holding-charger.jpg";
import autonomous from "../../../assets/img/gps-system-smart-car.jpg";
import education1 from "../../../assets/img/smart-class.jpg";
import education2 from "../../../assets/img/tutoring.jpg";
import education3 from "../../../assets/img/learning-science.jpg";
import finance1 from "../../../assets/img/finance1.jpg";
import finance2 from "../../../assets/img/finance2.jpg";
import finance3 from "../../../assets/img/finance3.jpg";
import finance4 from "../../../assets/img/finance4.jpg";
import finance5 from "../../../assets/img/finance5.jpg";
// import finance6 from "../../../assets/img/finance6.jpg";
// import finance7 from "../../../assets/img/finance7.jpg";
// import finance8 from "../../../assets/img/finance8.jpg";
// import finance9 from "../../../assets/img/finance9.jpg";

const industryData = {
  healthcare: {
    bannerTitle: "Healthcare Solutions",
    bannerDescription:
      "Innovative healthcare technologies for better patient outcomes.",
    title: "Revolutionizing Healthcare",
    description:
      "Empowering hospitals, clinics, and patients with next-gen solutions.",
    ExploreTitle: "Explore Our Healthcare Solutions",
    services: [
      {
        id: 1,
        title: "Telemedicine Services",
        description: "Virtual consultations and remote patient monitoring.",
        icon: <FaVideo size={80} />,
        link: "service-detail.html",
      },
      {
        id: 2,
        title: "AI-Powered Diagnostics",
        description: "AI-driven medical data analysis for faster diagnoses.",
        icon: <FaBrain size={80} />,
        link: "service-detail.html",
      },
      {
        id: 3,
        title: "Wearable Health Tech",
        description: "Smart devices for real-time health tracking.",
        icon: <FaHeartbeat size={80} />,
        link: "service-detail.html",
      },
    ],
    solutions: [
      {
        title: "Telemedicine Solutions",
        image: telemedicine,
        description:
          "Facilitating remote consultations through secure video conferencing, AI-driven diagnostics, and e-prescriptions to enhance patient care accessibility.",
      },
      {
        title: "AI-Powered Diagnostics",
        image: dignostics,
        description:
          "Leveraging machine learning and AI to detect diseases, assist in radiology analysis, and provide predictive healthcare insights.",
      },

      {
        title: "Healthcare Chatbots",
        image: chatbots,
        description:
          "AI-powered virtual assistants to provide instant responses, schedule appointments, and answer patient queries efficiently.",
      },
      {
        title: "Pharmacy Management Systems",
        image: pharmacy,
        description:
          "Automating inventory tracking, prescription processing, and regulatory compliance for pharmacies and healthcare providers.",
      },

      {
        title: "Patient Engagement Platforms",
        image: patientsEngaging,
        description:
          "Digital portals enabling patients to access medical records, schedule appointments, and communicate with healthcare providers seamlessly.",
      },
    ],
  },
  automotive: {
    bannerTitle: "Driving Innovation in Automotive",
    bannerDescription:
      "Transforming the automotive industry with AI, automation, and smart vehicle technologies.",
    title: "Automotive",
    description: "Shaping the Future of Mobility with Technology",
    ExploreTitle: "Explore Our Automotive Solutions",
    services: [
      {
        title: "Autonomous Vehicles",
        icon: <FaCarSide size={80} />,
        description:
          "Self-driving technology powered by AI for safer and more efficient transportation.",
      },
      {
        title: "Connected Car Solutions",
        icon: <RiTaxiWifiLine size={80} />,
        description:
          "Smart vehicle connectivity for real-time navigation, diagnostics, and infotainment.",
      },

      {
        title: "EV Charging Solutions",
        icon: <FaChargingStation size={80} />,
        description:
          "Intelligent charging infrastructure to support the growing electric vehicle market.",
      },
    ],
    solutions: [
      {
        title: "Smart Charging Infrastructure",
        image: fleet,
        description:
          "Developing intelligent EV charging networks with AI-powered load management and real-time analytics.",
      },
      {
        title: "Battery Management Systems",
        image: battery,
        description:
          "Enhancing battery performance and longevity with predictive analytics and real-time monitoring.",
      },
      {
        title: "Autonomous Vehicle Solutions",
        image: autonomous,
        description:
          "Implementing self-driving technology with AI-based navigation, safety, and route optimization.",
      },
    ],
  },

  education: {
    bannerTitle: "Innovating Education",
    bannerDescription:
      "Empowering the future of learning with AI, digital classrooms, and e-learning platforms.",
    title: "Education",
    description: "Revolutionizing Learning with Technology",
    ExploreTitle: "Explore Our Education Solutions",
    services: [
      {
        title: "E-Learning Platforms",
        icon: <SiCircuitverse size={80} />,
        description:
          "Online learning systems with interactive courses, AI tutors, and remote assessments.",
      },
      {
        title: "AI-Based Student Analytics",
        icon: <SiSmartthings size={80} />,
        description:
          "Use AI to analyze student performance and personalize learning experiences.",
      },
      {
        title: "Virtual Classrooms",
        icon: <SiGoogleclassroom size={80} />,
        description:
          "Seamless online collaboration tools for live lectures, discussions, and group projects.",
      },
      {
        title: "LMS Development",
        icon: <SiMoodle size={80} />,
        description:
          "Custom Learning Management Systems (LMS) for schools, universities, and corporations.",
      },
      {
        title: "Gamified Learning",
        icon: <SiUnity size={80} />,
        description:
          "Enhance engagement with game-based learning experiences and interactive simulations.",
      },
      {
        title: "AI-Powered Tutoring",
        icon: <SiTensorflow size={80} />,
        description:
          "Intelligent tutors that adapt to students' learning styles and pace.",
      },
      {
        title: "Assessment & Proctoring",
        icon: <SiProbot size={80} />,
        description:
          "Automated exam proctoring and AI-driven assessment tools for secure evaluations.",
      },
      {
        title: "Educational Chatbots",
        icon: <SiChatbot size={80} />,
        description:
          "24/7 AI assistants for instant student support, FAQs, and academic guidance.",
      },
    ],
    solutions: [
      {
        title: "Smart Classrooms",
        image: education1,
        description:
          "Digital whiteboards, AI-assisted learning, and IoT-enabled classrooms for modern education.",
      },
      {
        title: "AI-Powered Tutoring",
        image: education2,
        description:
          "Personalized learning experiences using AI to adapt content based on student progress and needs.",
      },
      {
        title: "E-Learning Platforms",
        image: education3,
        description:
          "Comprehensive online learning management systems with interactive courses, assessments, and certifications.",
      },
    ],
  },

  transportation: {
    bannerTitle: "Smart Mobility Solutions",
    bannerDescription:
      "Innovative technology to enhance transportation efficiency and sustainability.",
    title: "Transportation",
    description: "Transforming Transportation with AI and Automation",
    ExploreTitle: "Explore Our Transportation Solutions",
    services: [
      {
        title: "Intelligent Traffic Management",
        icon: <FaTrafficLight size={80} />,
        description:
          "AI-driven traffic systems to reduce congestion and optimize urban mobility.",
      },
      {
        title: "Fleet Telematics",
        icon: <FaTruckMoving size={80} />,
        description:
          "Real-time vehicle tracking and analytics to improve logistics and delivery services.",
      },
      {
        title: "EV Charging Infrastructure",
        icon: <FaChargingStation size={80} />,
        description:
          "Smart EV charging networks with AI-powered load balancing and real-time monitoring.",
      },
    ],
    solutions: [
      {
        title: "Autonomous Public Transit",
        image: education1,
        description:
          "AI-powered self-driving buses and trains for safe, efficient public transport.",
      },
      {
        title: "Smart Parking Solutions",
        image: education2,
        description:
          "AI-based parking management systems to reduce congestion and optimize space usage.",
      },
      {
        title: "Dynamic Route Optimization",
        image: education3,
        description:
          "AI-powered routing algorithms to improve delivery times and fuel efficiency.",
      },
    ],
  },

  banking: {
    bannerTitle: "Transforming Financial Services",
    bannerDescription:
      "Empowering financial institutions with AI-driven automation, fraud prevention, and digital banking solutions.",
    title: "Banking",
    description: "Digital Banking and AI-Driven Financial Services",
    ExploreTitle: "Explore Our Banking Solutions",
    services: [
      {
        title: "AI Fraud Detection",
        icon: <FaShieldAlt size={80} />,
        description:
          "Identify fraudulent transactions in real-time using machine learning and AI algorithms.",
      },
      {
        title: "Digital Banking Solutions",
        icon: <FaMobileAlt size={80} />,
        description:
          "Enhance customer experience with seamless mobile banking, e-wallets, and payment gateways.",
      },
      {
        title: "E-Wallet & Contactless Payments",
        icon: <FaWallet size={80} />,
        description:
          "Enable secure digital wallets and contactless transactions for seamless payments.",
      },
      {
        title: "Credit & Loan Management",
        icon: <FaCreditCard size={80} />,
        description:
          "Automated loan approvals, credit scoring, and AI-driven risk assessment solutions.",
      },
      {
        title: "Core Banking System",
        icon: <FaBuilding size={80} />,
        description:
          "Cloud-based and on-premise banking infrastructure for seamless financial operations.",
      },
      {
        title: "Automated Payment Processing",
        icon: <FaMoneyCheckAlt size={80} />,
        description:
          "Efficient processing of payments, direct deposits, and automated fund transfers.",
      },
      {
        title: "Biometric Security & Authentication",
        icon: <FaFingerprint size={80} />,
        description:
          "Secure banking transactions with facial recognition, fingerprint scanning, and AI-powered authentication.",
      },
      {
        title: "Foreign Exchange & Cross-Border Payments",
        icon: <FaExchangeAlt size={80} />,
        description:
          "Real-time forex trading, multi-currency support, and blockchain-based cross-border transactions.",
      },
      {
        title: "Wealth & Investment Management",
        icon: <FaChartLine size={80} />,
        description:
          "AI-driven investment insights, robo-advisors, and portfolio optimization tools.",
      },
      {
        title: "Cybersecurity & Data Protection",
        icon: <FaLock size={80} />,
        description:
          "Advanced encryption, secure banking infrastructure, and AI-driven threat detection.",
      },
    ],
    solutions: [
      {
        title: "Robo-Advisors",
        image: finance1,
        description:
          "AI-powered investment advisory solutions for personalized portfolio management.",
      },
      {
        title: "Blockchain-Based Transactions",
        image: finance2,
        description:
          "Secure, transparent, and decentralized banking transactions using blockchain technology.",
      },
      {
        title: "AI-Driven Credit Scoring",
        image: finance3,
        description:
          "Machine learning models that assess creditworthiness more accurately and efficiently.",
      },
      {
        title: "Personalized Banking Assistants",
        image: finance4,
        description:
          "Chatbots and AI assistants providing 24/7 customer support and financial advice.",
      },
      {
        title: "Automated Risk Management",
        image: finance5,
        description:
          "AI-powered risk assessment tools to prevent financial fraud and optimize decision-making.",
      },
    ],
  },
};

export default industryData;
