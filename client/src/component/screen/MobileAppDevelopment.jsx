import React, { useState, useEffect } from "react";
import {
  Smartphone,
  Layers,
  Zap,
  Paintbrush,
  Shield,
  Rocket,
  FileSearch,
  Code,
  PenTool,
  Play,
  CheckCircle,
} from "lucide-react";
import { FiMenu } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import "./MobileDevelopment.css";
import mobile1 from "../../assets/img/mobile-slide.jpg";
import mobile2 from "../../assets/img/mobile-slide2.jpg";
import mobile3 from "../../assets/img/mobile-slide3.jpg";

function MobileAppDevelopment() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const phoneElement = document.querySelector(".mad-hero-phone");
      if (phoneElement) {
        const translateY = scrollPosition * 0.05;
        phoneElement.setAttribute(
          "style",
          `transform: translateY(${translateY}px)`
        );
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const technologies = [
    {
      name: "Swift",
      logo: "/swift-logo.png",
      description: "Native iOS development",
    },
    {
      name: "Kotlin",
      logo: "/kotlin-logo.png",
      description: "Native Android development",
    },
    {
      name: "React Native",
      logo: "/react-native-logo.png",
      description: "Cross-platform mobile development",
    },
    {
      name: "Flutter",
      logo: "/flutter-logo.png",
      description: "UI toolkit for natively compiled apps",
    },
    {
      name: "Firebase",
      logo: "/firebase-logo.png",
      description: "Backend and analytics platform",
    },
    {
      name: "AWS Amplify",
      logo: "/aws-amplify-logo.png",
      description: "Mobile and web app development platform",
    },
  ];
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Discovery",
      description:
        "We explore your business requirements, target audience, and market to define clear objectives.",
      icon: <FileSearch size={24} />,
      details:
        "Our discovery phase involves in-depth research to understand your users, competitors, and business goals. We define success metrics and outline technical requirements to ensure alignment.",
    },
    {
      title: "Design",
      description:
        "Our UX/UI experts create intuitive and engaging interfaces tailored to your users.",
      icon: <PenTool size={24} />,
      details:
        "We create wireframes, interactive prototypes, and high-fidelity designs that adhere to platform guidelines while delivering your unique brand experience.",
    },
    {
      title: "Development",
      description:
        "Our engineers build your application using the most appropriate technologies and best practices.",
      icon: <Code size={24} />,
      details:
        "Using agile methodologies, we develop your application in sprints with continuous integration and automated testing to ensure high-quality code.",
    },
    {
      title: "Testing",
      description:
        "Rigorous quality assurance across devices, operating systems, and network conditions.",
      icon: <Layers size={24} />,
      details:
        "We perform functional testing, usability testing, performance optimization, and security audits to ensure your app is robust and ready for launch.",
    },
    {
      title: "Launch",
      description:
        "We handle the deployment process including app store submissions and backend infrastructure.",
      icon: <Play size={24} />,
      details:
        "Our team manages the entire submission process to app stores, ensuring compliance with guidelines and optimizing for maximum visibility and downloads.",
    },
    {
      title: "Support",
      description:
        "Ongoing maintenance, analytics, and updates to keep your app performing optimally.",
      icon: <CheckCircle size={24} />,
      details:
        "We provide post-launch support with monitoring, analytics review, performance optimization, and regular updates to adapt to platform changes and user feedback.",
    },
  ];
  return (
    <>
      <section className="mad-hero" id="home">
        <div className="mad-container mad-hero-container">
          <div className="mad-hero-content">
            <h1 className="mad-hero-title">
              Transform Your Ideas into{" "}
              <span className="mad-gradient-accent">Exceptional</span> Mobile
              Experiences
            </h1>
            <p className="mad-hero-subtitle">
              Expert mobile development services to build innovative,
              user-focused applications that drive engagement and deliver
              results.
            </p>
            <div className="mad-hero-cta">
              <button
                className="mean-button primary large"
                onClick={() => navigate("/contact-us")}
              >
                Get Started
              </button>
            </div>
            <div className="mad-hero-stats">
              <div className="mad-stat-item">
                <span className="mad-stat-number">250+</span>
                <span className="mad-stat-label">Projects Completed</span>
              </div>
              <div className="mad-stat-item">
                <span className="mad-stat-number">98%</span>
                <span className="mad-stat-label">Client Satisfaction</span>
              </div>
              <div className="mad-stat-item">
                <span className="mad-stat-number">15+</span>
                <span className="mad-stat-label">Years Experience</span>
              </div>
            </div>
          </div>
          <div className="mad-hero-image">
            <div className="mad-hero-phone mad-animate-float">
              <div className="mad-phone-outline">
                <div className="mad-phone-screen">
                  <div className="mad-app-mockup">
                    <div className="mad-app-header"></div>
                    <div className="mad-app-content">
                      <div className="mad-app-card">
                        <img
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "5px",
                          }}
                          src={mobile1}
                          alt=""
                        />
                      </div>
                      <div className="mad-app-card">
                        <img
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "5px",
                          }}
                          src={mobile2}
                          alt=""
                        />
                      </div>
                      <div className="mad-app-card">
                        <img
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "5px",
                          }}
                          src={mobile3}
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="mad-app-nav"
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        padding: "8px 0",
                        background: "#f0f0f0",
                        borderTop: "1px solid #ddd",
                        borderRadius: "0 0 12px 12px",
                      }}
                    >
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        <IoIosArrowBack size={20} />
                      </button>
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        <GoHome size={20} />
                      </button>
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        <FiMenu size={20} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mad-phone-notch"></div>
              </div>
            </div>
            <div className="mad-circle-1"></div>
            <div className="mad-circle-2"></div>
            <div className="mad-circle-3"></div>
            <div className="mad-dots-pattern"></div>
          </div>
        </div>
        <div className="mad-hero-wave">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              fill="#f7f9fc"
              fillOpacity="1"
              d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,42.7C840,32,960,32,1080,37.3C1200,43,1320,53,1380,58.7L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
            ></path>
          </svg>
        </div>
      </section>
      <section className="features section-light" id="features">
        <div className="container">
          <div className="section-title reveal">
            <h2>Why Our Mobile Development?</h2>
            <p>
              We build exceptional mobile experiences with cutting-edge
              technology and user-centered design
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card reveal">
              <div className="feature-icon">
                <Smartphone size={32} />
              </div>
              <h3>Native Experience</h3>
              <p>
                Leverage platform-specific features and UI patterns for the
                smoothest, most intuitive user experience on iOS and Android.
              </p>
            </div>

            <div className="feature-card reveal">
              <div className="feature-icon">
                <Layers size={32} />
              </div>
              <h3>Cross-Platform Solutions</h3>
              <p>
                Build once, deploy everywhere with React Native and Flutter for
                cost-effective solutions without compromising quality.
              </p>
            </div>

            <div className="feature-card reveal">
              <div className="feature-icon">
                <Zap size={32} />
              </div>
              <h3>High Performance</h3>
              <p>
                Optimized applications that load quickly, respond instantly to
                user interactions, and use minimal device resources.
              </p>
            </div>

            <div className="feature-card reveal">
              <div className="feature-icon">
                <Paintbrush size={32} />
              </div>
              <h3>UI/UX Excellence</h3>
              <p>
                Stunning visuals and intuitive interfaces that delight users and
                keep them coming back to your application.
              </p>
            </div>

            <div className="feature-card reveal">
              <div className="feature-icon">
                <Shield size={32} />
              </div>
              <h3>Security First</h3>
              <p>
                Enterprise-grade security implementations to protect user data
                and ensure compliance with global regulations.
              </p>
            </div>

            <div className="feature-card reveal">
              <div className="feature-icon">
                <Rocket size={32} />
              </div>
              <h3>Continuous Support</h3>
              <p>
                Ongoing maintenance, updates, and feature enhancements to keep
                your app competitive in rapidly evolving markets.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="technologies section-dark" id="technologies">
        <div className="container">
          <div className="section-title reveal">
            <h2>Technologies We Master</h2>
            <p>
              We leverage the most powerful and efficient technologies to
              deliver exceptional mobile experiences
            </p>
          </div>

          <div className="technologies-grid reveal">
            {technologies.map((tech, index) => (
              <div className="tech-card" key={index}>
                <div className="tech-logo">
                  {/* Placeholder logo using background color instead of actual image */}
                  <div className="tech-logo-placeholder">
                    {tech.name.substring(0, 2)}
                  </div>
                </div>
                <h3>{tech.name}</h3>
                <p>{tech.description}</p>
              </div>
            ))}
          </div>

        
        </div>
      </section>
      <section className="process section-light" id="process">
        <div className="container">
          <div className="section-title reveal">
            <h2>Our Development Process</h2>
            <p>
              A proven methodology that delivers exceptional results for every
              mobile project
            </p>
          </div>

          <div className="process-timeline reveal">
            <div className="process-steps">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`process-step ${
                    activeStep === index ? "active" : ""
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="step-icon">{step.icon}</div>
                  <div className="step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="process-detail">
              <div className="process-detail-content">
                <h3>{steps[activeStep].title}</h3>
                <p>{steps[activeStep].details}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    // feature setion section end
  );
}

export default MobileAppDevelopment;
