import useRevealOnScroll from "../../../hooks/useRevealOnScroll";

const VisionMissionHero = () => {
  const hero = useRevealOnScroll({ threshold: 0.15, once: true });
const vision = useRevealOnScroll({ threshold: 0.15, once: true });
const mission = useRevealOnScroll({ threshold: 0.15, once: true });
const closing = useRevealOnScroll({ threshold: 0.15, once: true });


  return (
    <>
    {/* ------------ Vision & Mission Hero --------------*/}
    <section
  ref={hero.ref}
  className={`u-section rtx-vm-hero ${
    hero.visible ? "u-drop-visible" : ""
  }`}
>

      <div className="u-container-center">

        {/* EYEBROW */}
        <span
          className="rtx-vm-eyebrow u-drop"
          style={{ "--delay": "0.1s" }}
        >
          Vision & Mission
        </span>

        {/* MAIN STATEMENT */}
        <h1
          className="rtx-vm-title u-drop"
          style={{ "--delay": "0.3s" }}
        >
          Shaping the future through intelligent,
          <br />
          inclusive, and impactful technology.
        </h1>

        {/* SUPPORT LINE */}
        <p
          className="rtx-vm-subtext u-drop"
          style={{ "--delay": "0.5s" }}
        >
          Our vision defines where we are headed. Our mission defines how we get
          there.
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

      <div className="u-container-center">

        {/* TITLE */}
        <h2
          className="rtx-vision-title u-drop"
          style={{ "--delay": "0.2s" }}
        >
          Our <span>Vision</span>
        </h2>

        {/* STATEMENT */}
        <p
          className="rtx-vision-statement u-drop"
          style={{ "--delay": "0.4s" }}
        >
          To be a global leader in technological innovation, delivering
          intelligent and integrated solutions that transform industries and
          enrich lives.
        </p>

        {/* SUPPORTING TEXT */}
        <p
          className="rtx-vision-text u-drop"
          style={{ "--delay": "0.6s" }}
        >
          We envision a future where technology becomes a force for equality,
          progress, and opportunity — bridging the digital divide, empowering
          communities, and enabling individuals to move forward together.
        </p>

        <p
          className="rtx-vision-text u-drop"
          style={{ "--delay": "0.8s" }}
        >
          Our vision is rooted in creating sustainable impact by shaping
          solutions that advance industries while contributing to a more
          inclusive and prosperous society.
        </p>

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

        {/* LEFT — TEXT */}
        <div className="rtx-mission-text u-drop-left">
          <h2 className="u-title">
            Our <span>Mission</span>
          </h2>

          <p className="rtx-mission-statement">
            To deliver cutting-edge, client-centric technology solutions that
            enhance efficiency, inspire innovation, and promote sustainable
            growth.
          </p>

          <p className="rtx-mission-desc">
            Our mission is rooted in empowering businesses and communities
            through practical, reliable, and scalable technology. We are
            committed to bridging the digital divide by enabling access to
            skills, opportunities, and innovation across both urban and rural
            ecosystems.
          </p>

          <p className="rtx-mission-desc">
            By combining engineering excellence with social responsibility, we
            strive to create employment opportunities, encourage self-reliance,
            and enable individuals and organizations to reach their full
            potential — contributing to a more inclusive and resilient future.
          </p>
        </div>

        {/* RIGHT — VISUAL RHYTHM */}
        <div className="rtx-mission-visual u-drop-right">
          <span className="vm-line" />
          <span className="vm-line" />
          <span className="vm-line" />
        </div>

      </div>
    </section>

    {/*---------------- Future Statement Section------------------- */}
   <section
  ref={closing.ref}
  className={`u-section rtx-vm-closing ${
    closing.visible ? "u-drop-visible" : ""
  }`}
>

      <div className="u-container-center">

        <h2
          className="rtx-vm-closing-title u-drop"
          style={{ "--delay": "0.2s" }}
        >
          Our journey is guided by purpose, driven by innovation, and committed
          to creating lasting impact.
        </h2>

        <p
          className="rtx-vm-closing-text u-drop"
          style={{ "--delay": "0.4s" }}
        >
          As technology continues to evolve, we remain focused on building
          intelligent solutions that empower people, strengthen businesses, and
          contribute to a better, more connected world.
        </p>

      </div>
    </section>
    </>
  );
};

export default VisionMissionHero;
