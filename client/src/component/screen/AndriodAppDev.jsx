import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import {
  Smartphone,
  Code,
  Zap,
  Shield,
  Users,
  CheckCircle,
  Globe,
  Layers,
  Cpu,
  Database,
} from "lucide-react";

import mobile3 from "../../assets/img/mobile-slide3.jpg";
import mobile1 from "../../assets/img/mobile-slide.jpg";
import mobile2 from "../../assets/img/mobile-slide2.jpg";
import { useNavigate } from "react-router-dom";

const AndriodAppDev = () => {
  const navigate = useNavigate();
  const { appType } = useParams();
  const tabMap = useMemo(
    () => ({
      "android-app-development": "native",
      "flutter-app-development": "flutter",
      "ios-app-development": "ios",
      "react-native-app-development": "reactnative",
    }),
    []
  );

  const [activeTab, setActiveTab] = useState("native");

  useEffect(() => {
    setActiveTab(tabMap[appType] || "native");
  }, [appType, tabMap]);

  const techContent = {
    native: {
      title: "Native Android Development",
      desc: "Build high-performance apps using Kotlin and Java with direct access to Android APIs and optimal device integration.",
      features: [
        "Maximum Performance",
        "Full Platform Features",
        "Native UI/UX",
      ],
    },
    cross: {
      title: "Cross-Platform Solutions",
      desc: "Develop once, deploy everywhere with React Native and Flutter for cost-effective multi-platform apps.",
      features: ["Cost Effective", "Faster Development", "Shared Codebase"],
    },
    hybrid: {
      title: "Hybrid App Solutions",
      desc: "Combine web technologies with native capabilities for rapid development and easy maintenance.",
      features: ["Rapid Prototyping", "Easy Updates", "Web Technology Stack"],
    },
    flutter: {
      title: "Flutter App Development",
      desc: "Create beautiful natively compiled applications for mobile from a single codebase using Flutter.",
      features: [
        "Single Codebase for All Platforms",
        "Rich UI with Material & Cupertino Widgets",
        "Hot Reload for Faster Development",
      ],
    },
    ios: {
      title: "iOS App Development",
      desc: "Build elegant and secure iOS apps using Swift or Objective-C that deliver top-notch user experiences on Apple devices.",
      features: [
        "Swift or Objective-C Development",
        "App Store Optimization",
        "Seamless Integration with iOS Ecosystem",
      ],
    },
    reactnative: {
      title: "React Native App Development",
      desc: "Develop cross-platform apps with a native look and feel using React Native and JavaScript.",
      features: [
        "Reusable Components",
        "Fast Refresh & Hot Reload",
        "Strong Community Support",
      ],
    },
  };

  const services = [
    {
      icon: <Smartphone className="adp-service-icon" />,
      title: "Custom App Development",
      description:
        "Tailored mobile apps to match your business goals and user expectations.",
    },
    {
      icon: <Code className="adp-service-icon" />,
      title: "UI/UX Design",
      description:
        "Attractive, intuitive, and responsive designs built for optimal user engagement.",
    },
    {
      icon: <Zap className="adp-service-icon" />,
      title: "Performance Optimization",
      description:
        "Speed, stability, and scalability improvements for high-performance apps.",
    },
    {
      icon: <Shield className="adp-service-icon" />,
      title: "App Security",
      description:
        "Data encryption, secure APIs, and compliance implementations.",
    },
    {
      icon: <Database className="adp-service-icon" />,
      title: "Backend Integration",
      description: "Robust APIs and server connections for dynamic data flow.",
    },
    {
      icon: <Globe className="adp-service-icon" />,
      title: "Deployment & Maintenance",
      description: "App store submissions, updates, and long-term support.",
    },
  ];

  const features = [
    {
      icon: <Layers className="adp-feature-icon" />,
      title: "Modern UI/UX",
      description: "Engaging and accessible design tailored to your audience.",
    },
    {
      icon: <Cpu className="adp-feature-icon" />,
      title: "Optimized Code",
      description: "Efficient code for fast, reliable app behavior.",
    },
    {
      icon: <Shield className="adp-feature-icon" />,
      title: "Enterprise Security",
      description: "Protect your data with top-level encryption and security.",
    },
    {
      icon: <Users className="adp-feature-icon" />,
      title: "Scalability",
      description: "Grow your app seamlessly with scalable infrastructure.",
    },
  ];

  return (
    <div className="adp-container">
      {/* Hero Section */}
      <section className="adp-hero">
        <div className="adp-hero-content">
          <h1 className="adp-hero-title">{techContent[activeTab].title}</h1>
          <p className="adp-hero-subtitle">{techContent[activeTab].desc}</p>
          <div className="adp-hero-buttons">
            <button
              className="mean-button primary large"
              onClick={() => navigate("/contact-us")}
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="adp-hero-visual">
          <div className="adp-phone-mockup">
            <div className="adp-phone-screen">
              <div className="adp-app-preview">
                <div className="adp-app-header"></div>
                <div className="adp-app-content">
                  <div className="adp-app-card">
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
                  <div className="adp-app-card">
                    {" "}
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
                  <div className="adp-app-card">
                    {" "}
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
                  <div className="adp-app-card">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="adp-services">
        <div className="adp-container-inner">
          <h2 className="adp-section-title">Our Development Services</h2>
          <p className="adp-section-subtitle">
            Comprehensive solutions for all your mobile app development needs
          </p>
          <div className="adp-services-grid">
            {services.map((service, index) => (
              <div key={index} className="adp-service-card">
                <div className="adp-service-icon-wrapper">{service.icon}</div>
                <h3 className="adp-service-title">{service.title}</h3>
                <p className="adp-service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="adp-features">
        <div className="adp-container-inner">
          <h2 className="adp-section-title">Why Choose Our Development</h2>
          <div className="adp-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="adp-feature-card">
                <div className="adp-feature-icon-wrapper">{feature.icon}</div>
                <h3 className="adp-feature-title">{feature.title}</h3>
                <p className="adp-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="adp-tech-stack">
        <div className="adp-container-inner">
          <h2 className="adp-section-title">Development Approach</h2>
          <div className="adp-tech-tabs">
            {Object.keys(techContent).map((key) => (
              <button
                key={key}
                className={`adp-tech-tab ${activeTab === key ? "active" : ""}`}
                onClick={() => setActiveTab(key)}
              >
                {techContent[key].title}
              </button>
            ))}
          </div>
          <div className="adp-tech-content">
            <div className="adp-tech-panel">
              <h3>{techContent[activeTab].title}</h3>
              <p>{techContent[activeTab].desc}</p>
              <div className="adp-tech-features">
                {techContent[activeTab].features.map((feature, index) => (
                  <div key={index} className="adp-tech-feature">
                    <CheckCircle className="adp-check-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="adp-cta">
        <div className="adp-container-inner">
          <h2 className="adp-cta-title">Ready to Build Your App?</h2>
          <p className="adp-cta-subtitle">
            Let's turn your idea into a successful application that users will
            love.
          </p>
          <div className="adp-cta-buttons">
            <button
              className="mean-button primary large"
              onClick={() => navigate("/contact-us")}
            >
              Start Your Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AndriodAppDev;
