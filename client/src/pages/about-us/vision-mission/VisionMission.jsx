import React from "react";
import useRevealOnScroll from "../../../hooks/useRevealOnScroll";
import Card from "../../../components/common/Card";

const VisionMissionHero = () => {
  const hero = useRevealOnScroll({ threshold: 0.15, once: true });
  const vision = useRevealOnScroll({ threshold: 0.15, once: true });
  const mission = useRevealOnScroll({ threshold: 0.15, once: true });
  const closing = useRevealOnScroll({ threshold: 0.15, once: true });

  return (
    <>
      {/* ------------ Vision & Mission Hero -------------- */}
      <section
        ref={hero.ref}
        className={`u-section u-section-lg rtx-vm-hero ${
          hero.visible ? "u-drop-visible" : ""
        }`}
      >
        <div className="u-container-center">
          <span className="rtx-vm-eyebrow u-drop" style={{ "--delay": "0.1s" }}>
            Vision & Mission
          </span>

          <h1 className="rtx-vm-title u-drop" style={{ "--delay": "0.3s" }}>
            Our vision defines where we are headed.
            {/* Vision That Leads. */}
            <br />
            <span className="rtx-vm-missiontext">
              Our mission defines how we get there.
              {/* Mission That Delivers. */}
            </span>
          </h1>

          <p className="rtx-vm-subtext u-drop" style={{ "--delay": "0.5s" }}>
            Transforming industries, enriching lives, and shaping a better
            future through technology.
          </p>
        </div>
      </section>

      {/*--------------------- Our Vision ---------------- */}
      <section
        ref={vision.ref}
        className={`u-section rtx-vision-section ${
          vision.visible ? "u-drop-visible" : ""
        }`}
      >
        <div className="u-container-center rtx-vision-grid">
          <div className="rtx-vision-img"><Card><span style={{height:"40vh"}}></span></Card></div>
          <div className="rtx-vision-content">
            <h2
              className="rtx-vision-title u-drop u-title"
              style={{ "--delay": "0.2s" }}
            >
              Our <span className="rtx-hero-accent">Vision</span>
            </h2>

            <p
              className="rtx-vision-statement u-drop"
              style={{ "--delay": "0.4s" }}
            >
              Our vision is to be a global leader in technological innovation,
              delivering intelligent and integrated solutions that transform
              industries, enrich lives, and lead society toward a better future.
            </p>

            <p className="rtx-vision-text u-drop" style={{ "--delay": "0.6s" }}>
              We aspire to create a world where every individual has equal
              opportunities for progress and development, fostering a prosperous
              and inclusive society where everyone moves forward together.
            </p>
          </div>
        </div>
      </section>

      {/*--------------------- Mission Section --------------------- */}
      <section
        ref={mission.ref}
        className={`u-section rtx-mission-section ${
          mission.visible ? "u-drop-visible" : ""
        }`}
      >
        <div className="u-container rtx-mission-grid">
          <div className="rtx-mission-text u-drop-left">
            <h2 className="u-title">
              Our <span className="rtx-hero-accent">Mission</span>
            </h2>

            <p className="rtx-mission-statement">
              Our mission is to provide cutting-edge, client-centric technology
              solutions that enhance efficiency, inspire innovation, and promote
              sustainable growth.
            </p>

            <p className="rtx-mission-desc">
              We are committed to bridging the digital divide by empowering both
              urban and rural communities through practical education and skill
              development, creating more employment opportunities, and
              contributing to the creation of a self-reliant, “आत्मनिर्भर भारत.”
            </p>

            <p className="rtx-mission-desc">
              Through our efforts, we aim to inspire and enable every individual
              and community to reach their full potential, paving the way for a
              brighter and more inclusive future for all.
            </p>
          </div>

          {/* <div className="rtx-mission-visual u-drop-right">
            <span className="vm-line" />
            <span className="vm-line" />
            <span className="vm-line" />
          </div> */}
          <div className="rtx-mission-img"><Card><span style={{height:"40vh"}}></span></Card></div>
        </div>
      </section>

      {/*---------------- Future Statement Section------------------- */}
      <section
        ref={closing.ref}
        className={`u-section u-section-sm rtx-vm-closing ${
          closing.visible ? "u-drop-visible" : ""
        }`}
      >
        <div className="u-container-center">
          <h2
            className="rtx-vm-closing-title u-drop"
            style={{ "--delay": "0.2s" }}
          >
            Our journey is guided by purpose, driven by innovation, and
            committed to creating lasting impact.
          </h2>

          <p
            className="rtx-vm-closing-text u-drop"
            style={{ "--delay": "0.4s" }}
          >
            We continue to work toward a future where technology empowers people
            and communities to move forward together.
          </p>
        </div>
      </section>
    </>
  );
};

export default React.memo(VisionMissionHero);
