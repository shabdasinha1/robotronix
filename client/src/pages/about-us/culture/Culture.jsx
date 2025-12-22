import useRevealOnScroll from "../../../hooks/useRevealOnScroll";
import { Link } from "react-router-dom";

const Culture = () => {
  const hero = useRevealOnScroll({ threshold: 0.2, once: true });
const valuesSec = useRevealOnScroll({ threshold: 0.2, once: true });
const learning = useRevealOnScroll({ threshold: 0.2, once: true });
const ethosSec = useRevealOnScroll({ threshold: 0.2, once: true });
const cta = useRevealOnScroll({ threshold: 0.2, once: true });

//   For section 2 culture values
 const values = [
    {
      title: "Ownership",
      desc: "We take responsibility for what we build, how we build it, and the impact it creates. Ownership drives accountability, quality, and trust in everything we do."
    },
    {
      title: "Continuous Learning",
      desc: "Technology never stands still, and neither do we. We encourage curiosity, experimentation, and continuous upskilling to stay relevant and grow stronger every day."
    },
    {
      title: "Integrity & Trust",
      desc: "We believe long-term relationships are built on honesty, transparency, and ethical decision-making — both within our teams and with our clients."
    },
    {
      title: "Collaboration",
      desc: "Great outcomes are the result of diverse perspectives working together. We value teamwork, open communication, and shared success."
    }
  ];

//   For section 4 Work ethos
  const ethos = [
    "We value clarity over complexity.",
    "We take ownership, not shortcuts.",
    "We learn fast and adapt faster.",
    "We respect time, quality, and trust.",
    "We build with purpose, not noise.",
    "We grow together — as individuals and as a team."
  ];
  return (
    <>
    <section
  ref={hero.ref}
  className={`u-section rtx-culture-hero ${
    hero.visible ? "u-drop-visible" : ""
  }`}
>

      <div className="u-container">

        {/* EYEBROW */}
        <span
          className="rtx-culture-eyebrow u-drop"
          style={{ "--delay": "0.1s" }}
        >
          Our Culture
        </span>

        {/* HEADLINE */}
        <h1
          className="rtx-culture-title u-drop"
          style={{ "--delay": "0.3s" }}
        >
          We build technology.
          <br />
          But more importantly,
          <br />
          we build people.
        </h1>

        {/* TEXT */}
        <p
          className="rtx-culture-subtext u-drop"
          style={{ "--delay": "0.5s" }}
        >
          At Robotronix, culture is not defined by policies or processes — it is
          shaped by curiosity, responsibility, and a shared commitment to
          continuous growth. We believe great technology is built by empowered
          people working together with purpose.
        </p>

      </div>
    </section>

    {/* -------------Culture Values ---------------- */}
    <section
  ref={valuesSec.ref}
  className={`u-section rtx-culture-values ${
    valuesSec.visible ? "u-drop-visible" : ""
  }`}
>

      <div className="u-container">

        {values.map((item, index) => (
          <div
            key={index}
            className={`rtx-value-row ${
              index % 2 === 0 ? "align-left" : "align-right"
            } u-drop`}
            style={{ "--delay": `${0.2 + index * 0.2}s` }}
          >
            {/* BACKGROUND NUMBER */}
            <span className="rtx-value-index">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* CONTENT */}
            <div className="rtx-value-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}

      </div>
    </section>

    {/*----------------- Learning & Growth ------------- */}
     <section
  ref={learning.ref}
  className={`u-section rtx-culture-learning ${
    learning.visible ? "u-drop-visible" : ""
  }`}
>

      <div className="u-container">

        {/* HEADER */}
        <div className="rtx-culture-learning-header u-drop">
          <h2 className="u-title">
            Learning & <span>Growth</span>
          </h2>
        </div>

        {/* CONTENT */}
        <div className="rtx-culture-learning-content u-drop">
          <p>
            At Robotronix, growth is a continuous journey. We believe learning
            should be practical, hands-on, and deeply connected to real-world
            challenges. Our teams are encouraged to explore new technologies,
            sharpen their skills, and take ownership of their professional
            development.
          </p>

          <p>
            We foster an environment where mentorship, experimentation, and
            knowledge sharing are part of everyday work. By combining structured
            learning with real project exposure, we help individuals grow with
            confidence and purpose — building not just better engineers, but
            stronger professionals.
          </p>
        </div>

      </div>
    </section>

    {/*------------------ Work Ethos ------------------ */}
   <section
  ref={ethosSec.ref}
  className={`u-section rtx-culture-ethos ${
    ethosSec.visible ? "u-drop-visible" : ""
  }`}
>

      <div className="u-container">

        <h2 className="u-title u-drop">
          Our <span>Work Ethos</span>
        </h2>

        <div className="rtx-ethos-list">
          {ethos.map((line, i) => (
            <p
              key={i}
              className="rtx-ethos-line u-drop"
              style={{ "--delay": `${0.2 + i * 0.15}s` }}
            >
              {line}
            </p>
          ))}
        </div>

      </div>
    </section>

    {/*------------- Culture CTA ---------------*/}
    <section
  ref={cta.ref}
  className={`u-section rtx-culture-cta ${
    cta.visible ? "u-drop-visible" : ""
  }`}
>

      <div className="u-container-center">

        <h2 className="u-title u-drop">
          Join a culture built on <span>curiosity, ownership, and growth</span>.
        </h2>

        <p className="rtx-culture-cta-text u-drop">
          Whether you are a team member, partner, or collaborator, we believe
          meaningful work begins with shared values and a commitment to building
          something better — together.
        </p>

        <Link
          to="/contact"
          className="btn btn-outline btn-lg u-drop"
        >
          Explore Opportunities
        </Link>

      </div>
    </section>
    </>
  );
};

export default Culture;
