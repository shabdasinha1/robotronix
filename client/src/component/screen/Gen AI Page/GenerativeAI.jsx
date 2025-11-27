import React from "react";
import {
  FiCpu,
  FiLayers,
  FiMessageCircle,
  FiZap,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import aiHeroImg from "../../../assets/img/new/generative-ai-banner.jpg"; // <-- Replace with your banner image
import "./GenerativeAI.css";



const GenerativeAI = () => {

    const INDUSTRY_ITEMS = [
  { icon: "🏢", title: "Corporate", desc: "Document automation & smart processes" },
  { icon: "🎨", title: "Media", desc: "AI scriptwriting, video generation & VFX" },
  { icon: "🏬", title: "Retail", desc: "Personalized product descriptions & creatives" },
  { icon: "🏫", title: "Education", desc: "AI tutors & course content generation" },
  { icon: "🏥", title: "Healthcare", desc: "Clinical notes, reports & automation" },
  { icon: "💻", title: "Software", desc: "Code generation & UX prototyping" },
  { icon: "📈", title: "Marketing", desc: "Campaign ideas & automated content" },
];

const WHY_ITEMS = [
  "Expertise in LLMs & Deep Neural Models",
  "Enterprise-grade scalable deployments",
  "Strong focus on data privacy & ethical AI",
  "Tailored AI solutions for real-world impact",
];

  return (
    <>
      {/* ===================== HERO SECTION (SPLIT LAYOUT) ===================== */}
      <section className="genai-hero-section">
        <div className="container genai-hero-container">

          {/* LEFT SIDE */}
          <div className="genai-hero-text">
            <span className="genai-tag">Generative AI Solutions</span>

            <h1 className="genai-title">
              Transform Ideas into Intelligent Outcomes with Gen AI
            </h1>

            <p className="genai-subtext">
              Empowering businesses to innovate, create, and scale using advanced
              Large Language Models, Diffusion Systems, and enterprise-grade AI.
            </p>

            <div className="genai-buttons">
              <NavLink className="genai-btn-primary" to="/contact-us">

                Talk to Experts <FiArrowRight />
              </NavLink>

          
            </div>

            <div className="genai-meta">
              <div>
                <h3>15+ Years</h3>
                <p>Engineering Excellence</p>
              </div>
              <div>
                <h3>Enterprise Ready</h3>
                <p>Secure AI Deployments</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="genai-hero-image">
            <img src={aiHeroImg} alt="Generative AI Illustration" loading="lazy"  />
          </div>
        </div>
      </section>

      {/* ===================== SECTION 2 – WHAT IS GEN AI ===================== */}
      <section className="genai-section light-grey">
        <div className="container">
          <h2 className="section-heading">What is Generative AI?</h2>
          <p className="section-text">
            Generative AI enables machines to create original content — including
            text, images, code, media, and product designs — using powerful LLMs
            and neural networks. It pushes beyond automation into intelligent
            creation.
          </p>
        </div>
      </section>

      {/* ===================== SECTION 3 – OUR APPROACH (GRID) ===================== */}
      <section className="genai-section">
        <div className="container">
          <h2 className="section-heading">Our Approach to Gen AI</h2>

          <div className="genai-grid">
            <div className="genai-card">
              <FiCpu className="genai-icon" />
              <h3>Model Development</h3>
              <p>Fine-tuning GPT, Diffusion Models & Transformers.</p>
            </div>

            <div className="genai-card">
              <FiLayers className="genai-icon" />
              <h3>AI Content Generation</h3>
              <p>High-accuracy automation for text, visuals & processes.</p>
            </div>

            <div className="genai-card">
              <FiMessageCircle className="genai-icon" />
              <h3>Conversational AI</h3>
              <p>Natural, human-like chatbots & virtual assistants.</p>
            </div>

            <div className="genai-card">
              <FiZap className="genai-icon" />
              <h3>Design & Innovation</h3>
              <p>AI-powered product design & creative acceleration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 4 – INDUSTRY APPLICATIONS (CARD GRID) ===================== */}
      <section className="genai-section gradient-bg">
        <div className="container">
          <h2 className="section-heading">Industry Applications</h2>

          <div className="industry-grid">
            {INDUSTRY_ITEMS .map((item, i) => (
              <div key={i} className="industry-card">
                <span className="industry-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION 5 – WHY CHOOSE US (GLASS CARDS) ===================== */}
      <section className="genai-section dark-section">
        <div className="container">
          <h2 className="section-heading white">Why Choose Robotronix?</h2>

          <div className="why-grid">
            {WHY_ITEMS.map((text, i) => (
              <div key={i} className="why-card">
                <FiCheckCircle className="why-icon" />
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA (PREMIUM GLASS CARD STYLE) ===================== */}
<section className="genai-cta-new">
  <div className="container">
    <div className="cta-card">
      <h2>Ready to Transform Your Business with Gen AI?</h2>
      <p>
        Unlock automation, innovation, and next-generation intelligence with
        enterprise-grade Generative AI solutions.
      </p>

      <NavLink to="/contact-us" className="cta-btn">

        Get Started <FiArrowRight />
     </NavLink>
    </div>
  </div>
</section>

    </>
  );
};

export default React.memo(GenerativeAI);