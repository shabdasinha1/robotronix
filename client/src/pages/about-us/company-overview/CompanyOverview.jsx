import React from "react";
import useRevealOnScroll from "../../../hooks/useRevealOnScroll";
import Card from "../../../components/common/Card";

const steps = [
  {
    title: "Understand & Discover",
    desc: "We analyze business needs, challenges, and long-term objectives to define a clear direction.",
  },
  {
    title: "Design with Precision",
    desc: "Architectures, workflows, and experiences are designed for clarity, scalability, and performance.",
  },
  {
    title: "Build & Engineer",
    desc: "Solutions are engineered using robust practices to ensure reliability and future readiness.",
  },
  {
    title: "Test, Optimize & Secure",
    desc: "Continuous testing and optimization ensure performance, stability, and security.",
  },
  {
    title: "Deploy, Support & Evolve",
    desc: "We deliver, support, and continuously improve solutions as technology and needs evolve.",
  },
];

const strengths = [
  {
    title: "Customer-Centric Engineering",
    desc: "Every solution is designed around real business needs, ensuring measurable value and long-term success.",
  },
  {
    title: "Product Development Expertise",
    desc: "We specialize in building scalable, secure, and high-performance products across industries.",
  },
  {
    title: "Innovation-Driven Mindset",
    desc: "From AI and IoT to cloud-native systems, innovation is embedded into everything we create.",
  },
  {
    title: "End-to-End Capability",
    desc: "From ideation and design to deployment and support, we deliver complete technology lifecycles.",
  },
];

const stats = [
  { value: "10+", label: "Years of Engineering Experience" },
  { value: "Multiple", label: "Industries Served" },
  { value: "End-to-End", label: "Technology Solutions" },
  { value: "Long-Term", label: "Client Partnerships" },
];

const glanceCard = [
  {
    value: "2000+",
    title: "Projects Delivered",
    desc: "Successfully delivered solutions across embedded, IoT, and digital platforms.",
    icon: "📦",
  },
  {
    value: "98%",
    title: "Client Satisfaction",
    desc: "Consistently trusted for quality, reliability, and long-term partnerships.",
    icon: "⭐",
  },
  {
    value: "10+ yrs",
    title: "Delivery Excellence",
    desc: "Over a decade of experience delivering scalable, future-ready solutions.",
    icon: "🚀",
  },
  {
    value: "24/7",
    title: "Support Available",
    desc: "Round-the-clock technical support for uninterrupted operations.",
    icon: "🛠️",
  },
];


const CompanyOverview = () => {
  const hero = useRevealOnScroll({ threshold: 0.2, once: true });
  const who = useRevealOnScroll({ threshold: 0.2, once: true });
  const approach = useRevealOnScroll({ threshold: 0.2, once: true });
  const strengthsSec = useRevealOnScroll({ threshold: 0.2, once: true });
  const impact = useRevealOnScroll({ threshold: 0.2, once: true });
  const philosophy = useRevealOnScroll({ threshold: 0.2, once: true });

  return (
    <>
      {/* ------------ Hero Section ---------------- */}
      <section
        ref={hero.ref}
        className={`u-section u-section-lg rtx-overview-hero ${
          hero.visible ? "u-drop-visible" : ""
        }`}
      >
        <div className="u-container-center">
          <span className="rtx-hero-badge u-drop" style={{ "--delay": "0.1s" }}>
            About Robotronix
          </span>

          <h1 className="u-title u-drop" style={{ "--delay": "0.3s" }}>
            Engineering <span>Intelligent Technology</span> for a Smarter Future
          </h1>

          <p className="u-subtext u-drop" style={{ "--delay": "0.5s" }}>
            Robotronix Engineering Tech Pvt. Ltd. is a pioneering product
            development and service-based organization founded in 2010 and
            headquartered in Indore, India. We deliver high-end,
            customer-centric technology solutions that drive innovation,
            scalability, and real-world impact.
          </p>

          <div
            className="rtx-overview-highlights u-drop"
            style={{ "--delay": "0.7s" }}
          >
            <span>Founded 2010</span>
            <span>Product & Service Based</span>
            <span>Innovative Tech Leader</span>
            <span>Customer-Centric Approach</span>
          </div>
        </div>
      </section>

      {/*----------------- Who we are ---------------- */}
      <section
        ref={who.ref}
        className={`u-section u-section-md rtx-who-wrapper ${
          who.visible ? "u-drop-visible" : ""
        }`}
      >
        <div className="u-container rtx-who-grid">
          <div className="rtx-who-text u-drop-left">
            <h2 className="u-title">
              Who <span>We Are</span>
            </h2>

            <p className="u-subtext">
              Robotronix Engineering Tech Pvt. Ltd. is a technology-driven
              organization focused on pioneering product development and
              delivering meticulously tailored services. Since our inception in
              2010, we have consistently worked at the intersection of
              innovation, engineering excellence, and real-world problem
              solving.
            </p>

            <p className="u-subtext">
              Our approach is deeply customer-centric. We believe technology
              should not only function efficiently but also create meaningful
              impact. By combining advanced engineering practices with practical
              industry insights, we build scalable, secure, and future-ready
              solutions that exceed expectations and drive long-term value.
            </p>

            <p className="u-subtext">
              Recognized for delivering transformative technological
              experiences, Robotronix continues to evolve as a trusted partner
              for businesses seeking innovation with reliability.
            </p>
          </div>

          {/* <div className="rtx-who-visual u-drop-right">
            <div className="rtx-who-core">
              <span className="node n1" />
              <span className="node n2" />
              <span className="node n3" />
              <span className="node n4" />
            </div>
          </div> */}
          <div className="rtx-who-glance">

              <Card>
              <h3>Company at a Glance</h3>
                {glanceCard.map((item, index) => {
                  return (
                    <div key={index} className="rtx-who-subcard-grid">
                      <span className="rtx-who-glance-icon">{item.icon}</span>

                      <div className="rtx-who-glance-content">
                        <h5>
                          {item.value} <span>{item.title}</span>
                        </h5>
                        <p className="u-subtext rtx-who-desc">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </Card>
          </div>
        </div>
      </section>

      {/*----------------- Our Approach ---------------- */}
      <section
        ref={approach.ref}
        className={`u-section u-section-md rtx-approach-wrapper ${
          approach.visible ? "u-drop-visible" : ""
        }`}
      >
        <div className="u-container">
          <div className="u-section-header u-drop">
            <h2 className="u-title">
              Our <span>Approach</span>
            </h2>
            <p className="u-subtext">
              We follow a structured yet flexible approach that ensures every
              solution is purposeful, scalable, and aligned with real business
              outcomes.
            </p>
          </div>

          <div className="rtx-approach-flow">
            {steps.map((step, i) => (
              <div
                key={i}
                className="rtx-approach-step u-drop-scale"
                style={{ "--delay": `${0.2 + i * 0.15}s` }}
              >
                <span className="step-index">{i + 1}</span>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*----------------- Core Strengths -------------- */}
      <section
        ref={strengthsSec.ref}
        className={`u-section u-section-md rtx-strengths-wrapper ${
          strengthsSec.visible ? "u-drop-visible" : ""
        }`}
      >
        <div className="u-container">
          <div className="u-section-header u-drop">
            <h2 className="u-title">
              Our <span>Core Strengths</span>
            </h2>
            <p className="u-subtext">
              Our strengths are built on years of engineering expertise,
              customer focus, and a relentless drive to deliver impactful
              technology solutions.
            </p>
          </div>

          <div className="u-grid-auto">
            {strengths.map((item, i) => (
              <div
                key={i}
                className="card card-hover u-drop-scale"
                style={{ "--delay": `${0.2 + i * 0.15}s` }}
              >
                <h4 className="text-accent">{item.title}</h4>
                <p className="text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*----------------- Impact ---------------- */}
      <section
        ref={impact.ref}
        className={`u-section u-section-md rtx-impact-wrapper ${
          impact.visible ? "u-drop-visible" : ""
        }`}
      >
        <div className="u-container">
          <div className="u-section-header u-drop">
            <h2 className="u-title">
              Our <span>Impact</span>
            </h2>
            <p className="u-subtext">
              Over the years, Robotronix has delivered consistent results by
              combining engineering excellence with real-world business insight.
            </p>
          </div>

          <div className="rtx-impact-grid">
            {stats.map((item, i) => (
              <div
                key={i}
                className="rtx-impact-card u-drop-scale"
                style={{ "--delay": `${0.2 + i * 0.15}s` }}
              >
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*------------------- Philosophy ---------------- */}
      <section
        ref={philosophy.ref}
        className={`u-section u-section-md rtx-philosophy-wrapper ${
          philosophy.visible ? "u-drop-visible" : ""
        }`}
      >
        <div className="u-container-center">
          <blockquote
            className="rtx-philosophy-quote u-drop"
            style={{ "--delay": "0.2s" }}
          >
            Technology is meaningful only when it empowers people, strengthens
            businesses, and contributes to a more inclusive future.
          </blockquote>

          <p
            className="rtx-philosophy-text u-drop"
            style={{ "--delay": "0.4s" }}
          >
            At Robotronix, we believe innovation is not just about building
            advanced systems, but about creating solutions that enable progress,
            opportunity, and sustainable growth. Our philosophy is rooted in
            responsibility, continuous learning, and the belief that technology
            should bridge gaps — not create them.
          </p>

          <p
            className="rtx-philosophy-text u-drop"
            style={{ "--delay": "0.6s" }}
          >
            We strive to build intelligent, integrated solutions that move
            industries forward while positively impacting society at large.
          </p>
        </div>
      </section>
    </>
  );
};

export default React.memo(CompanyOverview);
