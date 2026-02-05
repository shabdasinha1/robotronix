import { useState,useEffect } from "react";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import { Link,NavLink,useLocation} from "react-router-dom";



const Portfolio = () => {
  const [active, setActive] = useState("AI & Machine Learning");
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("AI & Machine Learning");
  



  const hero = useRevealOnScroll({
    threshold: 0.2,
    once: true,
  });
  const filterSec = useRevealOnScroll({
    threshold: 0.2,
    once: true,
  });
  const gridSec = useRevealOnScroll({
    threshold: 0.15,
    once: true,
  });
  const industriesSec = useRevealOnScroll({
    threshold: 0.2,
    once: true,
  });

  const techSec = useRevealOnScroll({
    threshold: 0.2,
    once: true,
  });

  const ctaSec = useRevealOnScroll({
    threshold: 0.2,
    once: true,
  });

  //   For Section 2 PortfolioFilters 
  const categories = [
    // "All",
    "AI & Machine Learning",
    "Generative AI",
    "Web & Enterprise Applications",
    "Mobile App Development",
    "Embedded Systems & IoT",

  ];

  const aiProjects = [
  {
    title: "High-Precision X-ray Image Annotation for Security Screening",
    category: "AI & Machine Learning",
    industry: "Aviation Security",
    description:
      "Creation of a high-precision annotated X-ray image dataset for training YOLO-based object detection models to identify prohibited items such as guns, knives, and cutters in airport luggage scans.",
    tech: ["Python", "YOLOv5", "YOLOv8", "LabelImg", "CVAT"],
  },
  {
    title: "AI-Powered Multi-Camera Surveillance & Business Intelligence",
    category: "AI & Machine Learning",
    industry: "Smart Cities / Retail Analytics",
    description:
      "Real-time multi-camera surveillance system delivering people counting, queue monitoring, demographic analysis, identity tracking, and heatmap-based crowd flow insights using advanced computer vision.",
    tech: ["Python", "OpenCV", "YOLOv8", "DeepSort", "InsightFace", "React"],
  },
  {
    title: "Automated Offence Classification for Military Legal Frameworks",
    category: "AI & Machine Learning",
    industry: "Defense & Legal Systems",
    description:
      "NLP-based annotation and classification system for military legal offence data, enabling AI-assisted charge sheet generation with on-premise deployment for strict data security.",
    tech: ["Python", "Pandas", "NLTK", "SpaCy", "Ollama", "Streamlit"],
  },
  {
    title: "Microscopic Image Restoration & Enhancement Pipeline",
    category: "AI & Machine Learning",
    industry: "Scientific Imaging / Research",
    description:
      "Image processing pipeline for aligning, merging, and enhancing low-quality microscopic images with accurate RGB alignment, white balance correction, and noise reduction.",
    tech: ["Python", "OpenCV", "Image Processing", "Feature Matching"],
  },
  {
    title: "DR. AI – Intelligent Patient Care Matching System",
    category: "AI & Machine Learning",
    industry: "Healthcare & MedTech",
    description:
      "AI-driven patient onboarding and recommendation system that processes medical reports using OCR and NLP to provide personalized hospital, specialist, and vendor recommendations.",
    tech: ["Python", "Flask", "OCR", "NLP", "Chatbot Systems"],
  },
  {
    title: "LeadAngel – Retrieval Augmented Generation (RAG) System",
    category: "Generative AI",
    industry: "Enterprise Knowledge Systems",
    description:
      "End-to-end RAG system for web and document data enabling real-time contextual Q&A with semantic search, persistent chat history, and scalable ingestion pipelines.",
    tech: ["LangChain", "Qdrant", "FastAPI", "MongoDB", "OpenAI", "React"],
  },
  {
    title: "Multilingual Translation & Conversational AI Module",
    category: "Generative AI",
    industry: "Enterprise Platforms",
    description:
      "Multilingual translation and conversational AI system enabling text, voice, and document translation while maintaining backend processing consistency and contextual accuracy.",
    tech: ["NLP", "Speech-to-Text", "Translation Models", "Conversational AI"],
  },
  {
    title: "Email Summarization & Classification Engine",
    category: "Generative AI",
    industry: "Enterprise Communication",
    description:
      "Secure, on-premise AI pipeline for automatic comprehension, summarization, and classification of multi-threaded emails using LLaMA models and vLLM.",
    tech: ["LLaMA 3.1", "vLLM", "Python", "MongoDB", "AWS S3"],
  },
  {
    title: "IoT Sensor Data Annotation for Pet Activity Recognition",
    category: "AI & Machine Learning",
    industry: "IoT & Wearables",
    description:
      "End-to-end workflow for collecting, annotating, and validating time-series sensor data to train AI models for pet activity recognition with high real-world accuracy.",
    tech: ["Python", "TensorFlow", "PyTorch", "NumPy", "Pandas"],
  },
  {
    title: "Stress Recognition using Facial Landmark Annotation",
    category: "AI & Machine Learning",
    industry: "Human Behavior Analytics",
    description:
      "Facial landmark-based dataset preparation for stress and emotion recognition, enabling AI models to quantify human stress levels accurately.",
    tech: ["MediaPipe", "OpenCV", "Python", "NumPy", "Pandas"],
  },
];

const webProjects = [
  {
    title: "CaseUp AI – Interview Preparation Platform",
    category: "Web & Enterprise Applications",
    industry: "EdTech / Career Development",
    description:
      "AI-powered interview preparation platform enabling users to take mock interviews, receive detailed performance analysis, and improve skills through personalized feedback and insights.",
    tech: ["React", "Node.js", "AI APIs", "MongoDB"],
  },
  {
    title: "Parser AI – Data Parsing & Summarization Platform",
    category: "Web & Enterprise Applications",
    industry: "Data Processing / Automation",
    description:
      "AI-driven platform that allows users to upload CSV and PDF files and instantly extract, analyze, and generate clean, easy-to-understand summaries of structured and unstructured data.",
    tech: ["React", "Node.js", "PDF Processing", "CSV Parsing", "AI APIs"],
  },
  {
    title: "FortiTudeFashion.com – E-commerce Admin Platform",
    category: "Web & Enterprise Applications",
    industry: "Retail / E-commerce",
    description:
      "Full-stack MERN-based fashion e-commerce website with a dynamic admin panel for managing products, content, and site configuration efficiently.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Admin Dashboard"],
  },
  {
    title: "Lead Angel – Real-Time Chat UI",
    category: "Web & Enterprise Applications",
    industry: "Enterprise Communication",
    description:
      "Modern, responsive chat user interface built with React, focusing on real-time interaction patterns, smooth UX, and scalable frontend architecture.",
    tech: ["React", "WebSockets", "Responsive Design", "UI/UX"],
  },
  {
    title: "Surveillance System Analytics Dashboard",
    category: "Web & Enterprise Applications",
    industry: "Security / Smart Monitoring",
    description:
      "Analytics-driven dashboard to visualize surveillance data using charts and insights, enabling trend analysis and data-driven decision-making.",
    tech: ["React", "Chart.js", "Data Visualization", "Dashboard UI"],
  },
  {
    title: "QAPreneur – Backend Optimization Platform",
    category: "Web & Enterprise Applications",
    industry: "SaaS / Automation",
    description:
      "Backend optimization and feature enhancement project focused on improving performance, scalability, and automation using Node.js and Express.",
    tech: ["Node.js", "Express", "API Optimization", "Automation"],
  },
  {
    title: "Kusum Industries – Inventory Management Dashboard",
    category: "Web & Enterprise Applications",
    industry: "Manufacturing / Industrial Operations",
    description:
      "Comprehensive inventory management system for industrial operations, enabling product tracking, raw material monitoring, and real-time insights through interactive dashboards and reports.",
    tech: ["React", "Node.js", "Charts & Reports", "Inventory Management"],
  },
];

const iotProjects = [
  {
    title: "Sleep Monitoring IoT Device",
    category: "Embedded Systems & IoT",
    industry: "Healthcare & Wellness",
    description:
      "Multi-sensor IoT device designed to monitor sleep patterns and environmental factors such as light, noise, temperature, and motion. Integrated edge computing using AWS Greengrass for real-time analysis and insights.",
    tech: ["IoT Sensors", "Embedded Systems", "AWS Greengrass", "Edge Computing"],
  },
  {
    title: "Smart Pet Activity Tracker",
    category: "Embedded Systems & IoT",
    industry: "Pet Care & Wearables",
    description:
      "Wearable IoT device and companion mobile app for tracking pet activities like walking, running, sleeping, and eating using IMU and temperature sensors with BLE and Wi-Fi connectivity.",
    tech: ["IMU Sensors", "BLE", "Wi-Fi", "Mobile App", "IoT"],
  },
  {
    title: "UV Disinfectant Shelf",
    category: "Embedded Systems & IoT",
    industry: "Healthcare / Hygiene Automation",
    description:
      "Automated UV disinfectant shelf using UVC light, sensors, motors, and microcontrollers to sterilize multiple objects simultaneously with high efficiency and reliability.",
    tech: ["Microcontrollers", "UVC Technology", "Sensors", "Embedded Systems"],
  },
  {
    title: "Wireless UV Disinfectant Machine",
    category: "Embedded Systems & IoT",
    industry: "Public Safety & Hygiene",
    description:
      "Remote-controlled UV disinfection machine leveraging UVC light and RF-based wireless activation to safely sanitize environments and surfaces.",
    tech: ["UVC Light", "RF Communication", "Embedded Systems"],
  },
  {
    title: "Automatic Hand Sanitizer with IoT Integration",
    category: "Embedded Systems & IoT",
    industry: "Smart Devices / Public Hygiene",
    description:
      "Touchless automatic hand sanitizer dispenser with infrared sensors, liquid level monitoring, refill alerts, and IoT-based data collection.",
    tech: ["IR Sensors", "IoT", "Embedded Systems", "Level Monitoring"],
  },
  {
    title: "Drowsiness Detection Cap",
    category: "Embedded Systems & IoT",
    industry: "Automotive Safety",
    description:
      "Embedded safety device installed on a cap to detect driver drowsiness using motion and vibration sensing, triggering alerts and alarms to prevent accidents.",
    tech: ["Motion Sensors", "Embedded Systems", "Alert Systems"],
  },
  {
    title: "Secured LoRa-Based Communication System",
    category: "Embedded Systems & IoT",
    industry: "Defense & Military Communication",
    description:
      "Secure bidirectional LoRaWAN-based communication system for military environments, implementing AES and PBKDF2 encryption for confidential data transmission.",
    tech: ["LoRaWAN", "AES Encryption", "IoT Security", "Embedded Systems"],
  },
  {
    title: "RFID-Based Race Timing System",
    category: "Embedded Systems & IoT",
    industry: "Sports Technology",
    description:
      "Automated RFID-based race timing and participant classification system with real-time data transmission to a GUI server using IoT.",
    tech: ["RFID", "IoT", "Embedded Systems", "Real-Time Monitoring"],
  },
  {
    title: "Women Safety & Emergency Response System",
    category: "Embedded Systems & IoT",
    industry: "Public Safety",
    description:
      "IoT-enabled women safety system combining sensors, AI analysis, GPS tracking, camera capture, and emergency alerts to pre-stored contacts during critical situations.",
    tech: ["IoT Sensors", "GPS", "Camera Module", "AI Integration"],
  },
  {
    title: "Anxiety Detection using AI & Biometric Sensors",
    category: "Embedded Systems & IoT",
    industry: "Mental Health & Wellness",
    description:
      "AI-powered anxiety detection system using EEG, heart rate, GSR, and brainwave sensors integrated with IoT controllers for real-time emotional state assessment.",
    tech: ["Biometric Sensors", "AI Models", "IoT Controllers"],
  },
  {
    title: "AI-Based Fire Detection using CCTV",
    category: "Embedded Systems & IoT",
    industry: "Safety & Surveillance",
    description:
      "AI-driven fire detection system utilizing existing CCTV infrastructure and RTSP streams to detect fire patterns in real time and trigger alerts via a monitoring GUI.",
    tech: ["CCTV", "RTSP", "AI Detection", "Monitoring Dashboard"],
  },
  {
    title: "Weather Monitoring Station",
    category: "Embedded Systems & IoT",
    industry: "Environmental Monitoring",
    description:
      "Solar-powered IoT weather station collecting real-time data on temperature, humidity, wind speed, and pressure, visualized through an interactive GUI.",
    tech: ["IoT Sensors", "Solar Power", "Data Visualization", "Embedded Systems"],
  },
  {
    title: "Humanoid Robot – Ahilya (Arya V1 & V2)",
    category: "Embedded Systems & IoT",
    industry: "Robotics & Smart Automation",
    description:
      "Humanoid robots designed for interactive assistance, hospitality, and guided tours with speech recognition, face recognition, and personalized user interaction.",
    tech: ["Robotics", "Speech Recognition", "Face Recognition", "IoT"],
  },
  {
    title: "Kevin – Humanoid Serving Robot",
    category: "Embedded Systems & IoT",
    industry: "Service Robotics",
    description:
      "IoT-enabled humanoid serving robot controlled via a mobile app, capable of navigation, object delivery, and interactive service in hospitality and healthcare environments.",
    tech: ["Robotics", "IoT", "Mobile App Control", "Automation"],
  },
];
const mobileProjects = [
  {
    title: "Pawzmo – Animal Health Monitoring Mobile App",
    category: "Mobile App Development",
    industry: "IoT / Animal Healthcare",
    description:
      "IoT-enabled Flutter mobile application for real-time animal health and activity monitoring using BLE-based wearable devices. Supports Android and iOS with real-time data streaming and background synchronization.",
    tech: [
      "Flutter",
      "Dart",
      "BLE",
      "MQTT",
      "WebSocket",
      "Firebase",
      "REST APIs",
    ],
  },
  {
    title: "ND Tatva – Community Engagement Application",
    category: "Mobile App Development",
    industry: "Community & Social Platforms",
    description:
      "Community-focused Android application providing matrimony, job postings, announcements, and social engagement features with controlled access and admin approval workflow.",
    tech: ["Flutter", "Dart", "REST APIs"],
  },
  {
    title: "Gautam Setu – Community Services Platform",
    category: "Mobile App Development",
    industry: "Community Services",
    description:
      "Feature-rich community application connecting members through jobs, businesses, healthcare services, notifications, and digital contact sharing with monetization via Google Ads.",
    tech: [
      "Flutter",
      "Firebase Authentication",
      "REST APIs",
      "Google Ads",
    ],
  },
  {
    title: "QAPreneur – Learning & Career Development Platform (Mobile)",
    category: "Mobile App Development",
    industry: "EdTech / Career Platforms",
    description:
      "Full-scale learning and career development mobile platform offering LMS, mock interviews, certifications, job marketplace, subscription plans, and payment integration.",
    tech: [
      "Flutter",
      "Dart",
      "Firebase",
      "REST APIs",
      "Payment Gateway",
    ],
  },
  {
    title: "Shourya – Secure Data Collection App for Indian Army",
    category: "Mobile App Development",
    industry: "Defense / Secure Applications",
    description:
      "Secure Flutter-based Android application for Indian Army personnel to collect and store sensitive data with offline-first support and automatic cloud synchronization.",
    tech: [
      "Flutter",
      "Firebase Authentication",
      "Google Sign-In",
      "SQLite (SQFlite)",
      "Offline Sync",
    ],
  },
];


  //For Section 3 Portfolio Projects
 const projects = [
  ...aiProjects,
  ...webProjects,
   ...iotProjects,
   ...mobileProjects,
];


  // For section 4
  const industries = [
    {
      title: "Healthcare & MedTech",
      desc: "Secure, scalable IT solutions for healthcare platforms, data analytics, and intelligent systems that improve operational efficiency and patient outcomes.",
    },
    {
      title: "Manufacturing & Industrial",
      desc: "IoT-enabled monitoring, embedded systems, and predictive analytics solutions designed to optimize industrial operations and equipment performance.",
    },
    {
      title: "Enterprise & Corporate IT",
      desc: "Robust enterprise applications, workflow automation, and data-driven platforms built for scalability, security, and performance.",
    },
    {
      title: "Education & Skill Development",
      desc: "Digital learning platforms and technology solutions that enable skill development, accessibility, and scalable education delivery.",
    },
    {
      title: "Smart Cities & Infrastructure",
      desc: "AI-powered surveillance, data analytics, and connected systems supporting smarter, safer, and more efficient urban environments.",
    },
    {
      title: "Retail & Logistics",
      desc: "Technology solutions that enhance supply chain visibility, customer engagement, and operational decision-making through data insights.",
    },
  ];

  // For section 5 Technology Stack
const techStack = [
  {
    group: "Web Development – Frontend",
    items: [
      "HTML",
      "CSS (Bootstrap 3, 4)",
      "JavaScript",
      "jQuery",
      "React JS",
      "Angular",
    ],
  },
  {
    group: "Backend Development & APIs",
    items: [
      "PHP (CodeIgniter, Laravel)",
      "Java (Spring MVC, Spring Boot, Hibernate, JPA, JDBC)",
      "Python (Flask, Django)",
      "Node.js",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    group: "Databases",
    items: [
      "MySQL",
      "MS SQL",
      "PostgreSQL",
      "MongoDB",
      "DynamoDB",
      "BigQuery",
      "SQLite",
    ],
  },
  {
    group: "Cloud, DevOps & Tools",
    items: [
      "AWS EC2",
      "AWS S3",
      "AWS Lambda",
      "AWS RDS",
      "AWS IoT Core",
      "AWS Greengrass",
      "Docker",
      "CI/CD Pipelines",
      "GitHub",
      "GitLab",
      "Jira",
      "GCS Services",
    ],
  },
  {
    group: "Mobile App Development",
    items: [
      "Flutter (Android & iOS)",
      "Dart",
      "Firebase Authentication",
      "Google Ads",
      "Google Sign-In",
      "SignIn with apple",
      "REST APIs",
      "SQLite (Offline Storage)",
      
    ],
  },
  {
    group: "AI, Machine Learning & Computer Vision",
    items: [
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "YOLO (v5 to v8)",
      "CNN (ResNet, InceptionNet)",
      "Object Detection & Recognition",
    ],
  },
  {
    group: "Natural Language Processing (NLP)",
    items: [
      "TensorFlow NLP",
      "SpaCy",
      "Gensim",
      "BERT",
      "ALBERT",
      "LSTM",
      "RNN",
    ],
  },
  {
    group: "Generative AI & LLM Frameworks",
    items: [
      "LangChain",
      "OpenAI Models",
      "Gemini",
      "Hugging Face Transformers",
      "AWS Bedrock",
      "RAG Pipelines",
    ],
  },
  {
    group: "Data Analytics & ETL",
    items: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Tableau",
      "Power BI",
      "Kafka",
      "Kafka Connect",
      "Kafka Streams",
      "Apache Spark",
      "PySpark",
      "Airflow",
      "Flink",
    ],
  },
  {
    group: "Embedded Systems & IoT",
    items: [
      "Embedded System Design",
      "Hardware & Circuit Design",
      "2-layer & Multilayer PCB Design",
      "ESP Controllers",
      "ATmega Controllers",
      "Raspberry Pi",
      "Jetson Orin",
      "RF & GPS Modules",
      "Wi-Fi & BLE Firmware",
      "MQTT (Mosquitto, EMQX)",
      "Edge IoT",
    ],
  },
  {
    group: "Firmware & Low-Level Development",
    items: [
      "C / C++",
      "Python",
      "Lua",
      "Arduino IDE",
      "VS Code",
      "DipTrace",
    ],
  },
];



  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);


const handleClick = (cat) => {
  setActive(cat);
  setActiveCategory(cat);

  // smooth scroll to project grid
  setTimeout(() => {
    gridSec.ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 50);
};

useEffect(() => {
  if (location.state?.scrollTo === "tech-stack" && techSec.ref.current) {
    // wait for layout + reveal animations
    setTimeout(() => {
      const yOffset = -100;
      const y =
        techSec.ref.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }, 300);
  }
}, [location, techSec.ref]);


  return (
    <>
       {/*---------------- Hero ------------ */}
      <section
        ref={hero.ref}
        className={`u-section rtx-portfolio-hero ${hero.visible ? "u-drop-visible" : ""
          }`}
      >
        <div className="u-container-center">

          {/* EYEBROW */}
          <span
            className="rtx-portfolio-eyebrow u-drop"
            style={{ "--delay": "0.1s" }}
          >
            Our Portfolio
          </span>

          {/* MAIN TITLE */}
          <h1
            className="rtx-portfolio-title u-drop"
            style={{ "--delay": "0.3s" }}
          >
            Engineering <span>Real-World IT Solutions</span>
            <br />
            That Drive Business Impact
          </h1>

          {/* SUBTEXT */}
          <p
            className="rtx-portfolio-subtext u-drop"
            style={{ "--delay": "0.5s" }}
          >
            Explore our portfolio of software engineering, AI & machine learning,
            embedded systems, IoT, and full-stack product development projects.
            Each solution is designed to solve complex challenges, improve
            efficiency, and deliver scalable, future-ready technology outcomes.
          </p>

          {/* HIGHLIGHTS */}
          <div
            className="rtx-portfolio-highlights u-drop"
            style={{ "--delay": "0.7s" }}
          >
            <span>Founded 2010</span>
            <span>IT & Product Development</span>
            <span>AI, ML & Data-Driven Solutions</span>
            <span>Embedded Systems & IoT</span>
            <span>Enterprise-Grade Engineering</span>
          </div>

        </div>
      </section>

      {/*---------------- PortfolioFilters ------------ */}
      <section
        ref={filterSec.ref}
        className={`u-section rtx-portfolio-filters ${filterSec.visible ? "u-drop-visible" : ""
          }`}
      >
        <div className="u-container-center">

          {/* HEADER */}
          <div className="u-section-header u-drop">
            <h2 className="u-title">
              Explore Our <span>Technology Work</span>
            </h2>
            <p className="u-subtext">
              Browse our portfolio by technology domain, solution type, and
              engineering focus. Each project reflects our commitment to scalable,
              secure, and impact-driven IT solutions.
            </p>
          </div>

          {/* FILTER TABS */}
          <div className="rtx-portfolio-filter-tabs u-drop">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`rtx-filter-btn ${active === cat ? "rtx-active" : ""
                  }`}
                onClick={() => handleClick(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/*-------------- Portfolio Projects ------------ */}
      <section
        ref={gridSec.ref}
        className={`u-section rtx-portfolio-grid ${gridSec.visible ? "u-drop-visible" : ""
          }`}
      >
        <div className="u-container">

          {/* HEADER */}
          <div className="u-section-header u-drop">
            <h2 className="u-title">
              Featured <span>Projects</span>
            </h2>
            <p className="u-subtext">
              A selection of our real-world IT projects showcasing software
              engineering excellence, AI-driven innovation, and scalable
              technology solutions.
            </p>
          </div>

          {/* GRID */}
          <div className="rtx-projects-grid">
           {filteredProjects.map((item, i) => (
              <article
                key={i}
                className="rtx-project-card u-drop-scale"
                style={{ "--delay": `${0.15 + i * 0.1}s` }}
              >
                <span className="rtx-project-category">
                  {item.category}
                </span>

                <h3>{item.title}</h3>

                <p className="rtx-project-desc">
                  {item.description}
                </p>

                <div className="rtx-project-meta">
                  <span>{item.industry}</span>
                </div>

                <div className="rtx-project-tech">
                  {item.tech.map((t, idx) => (
                    <span key={idx}>{t}</span>
                  ))}
                </div>
                 {/* CTA */}
  <div className="rtx-project-cta">
    <NavLink to="/contact-us" className="rtx-project-link">
      Discuss this project →
    </NavLink>
  </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/*------------------ Industries We Serve ------------- */}
      <section
        ref={industriesSec.ref}
        className={`u-section rtx-portfolio-industries ${industriesSec.visible ? "u-drop-visible" : ""
          }`}
      >
        <div className="u-container">

          {/* HEADER */}
          <div className="u-section-header u-drop">
            <h2 className="u-title">
              Industries <span>We Serve</span>
            </h2>
            <p className="u-subtext">
              Our IT solutions are built to address real-world challenges across
              diverse industries, combining engineering excellence with deep
              domain understanding.
            </p>
          </div>

          {/* GRID */}
          <div className="rtx-industries-grid">
            {industries.map((item, i) => (
              <div
                key={i}
                className="rtx-industry-card u-drop-scale"
                style={{ "--delay": `${0.15 + i * 0.1}s` }}
              >
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/*------------------ Technology Stack --------------- */}
      <section
      id="tech-stack"
        ref={techSec.ref}
        className={`u-section rtx-portfolio-tech ${techSec.visible ? "u-drop-visible" : ""
          }`}
      >
        <div className="u-container">

          {/* HEADER */}
          <div className="u-section-header u-drop">
            <h2 className="u-title">
              Technology <span>Stack</span>
            </h2>
            <p className="u-subtext">
              Our solutions are powered by a modern, scalable, and battle-tested
              technology stack — carefully selected to deliver performance,
              security, and long-term reliability.
            </p>
          </div>

          {/* STACK GROUPS */}
          <div className="rtx-tech-groups">
            {techStack.map((group, i) => (
              <div
                key={i}
                className="rtx-tech-group u-drop-scale"
                style={{ "--delay": `${0.15 + i * 0.1}s` }}
              >
                <h3>{group.group}</h3>
                <div className="rtx-tech-items">
                  {group.items.map((item, idx) => (
                    <span key={idx}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/*-------------- Portfolio Call To Action (CTA) ------------- */}
      <section
        ref={ctaSec.ref}
        className={`u-section rtx-portfolio-cta ${ctaSec.visible ? "u-drop-visible" : ""
          }`}
      >
        <div className="u-container-center">

          {/* TITLE */}
          <h2
            className="rtx-portfolio-cta-title u-drop"
            style={{ "--delay": "0.2s" }}
          >
            Ready to Build Your Next <span>Intelligent IT Solution</span>?
          </h2>

          {/* TEXT */}
          <p
            className="rtx-portfolio-cta-text u-drop"
            style={{ "--delay": "0.4s" }}
          >
            Whether you are planning a new digital product, scaling an existing
            platform, or exploring AI, IoT, or enterprise software solutions,
            Robotronix Engineering Tech Pvt. Ltd. is ready to partner with you and
            deliver secure, scalable, and future-ready technology.
          </p>

          {/* ACTIONS */}
          <div
            className="rtx-portfolio-cta-actions u-drop"
            style={{ "--delay": "0.6s" }}
          >
            <Link to="/contact-us" className="btn btn-primary btn-lg">
              Start a Conversation
            </Link>

            {/* <Link to="/services" className="btn btn-outline btn-lg">
              View Our Services
            </Link> */}
          </div>

        </div>
      </section>
    </>
  );
};

export default Portfolio;
