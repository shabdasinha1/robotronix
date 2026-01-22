import useRevealOnScroll from "../../../hooks/useRevealOnScroll";
import { Link } from "react-router-dom";
import heroFloat from "../../../assets/images/culture/celebration/celebration1.jpg";
import heroMain from "../../../assets/images/culture/celebration/celebration2.jpg";

import strip1 from "../../../assets/images/culture/festival/festival1.jpg";
import strip2 from "../../../assets/images/culture/festival/festival1.jpg";
import strip3 from "../../../assets/images/culture/festival/festival1.jpg";
import strip4 from "../../../assets/images/culture/festival/festival1.jpg";

import together1 from "../../../assets/images/culture/festival/festival1.jpg";
import together2 from "../../../assets/images/culture/festival/festival1.jpg";
import together3 from "../../../assets/images/culture/festival/festival1.jpg";
import together4 from "../../../assets/images/culture/festival/festival1.jpg";

import celebrate1 from "../../../assets/images/culture/festival/festival1.jpg";
import celebrate2 from "../../../assets/images/culture/festival/festival1.jpg";
import celebrate3 from "../../../assets/images/culture/festival/festival1.jpg";
import celebrate4 from "../../../assets/images/culture/festival/festival1.jpg";

import festivalMain from "../../../assets/images/culture/festival/festival1.jpg";
import festival1 from "../../../assets/images/culture/festival/festival2.jpg";
import festival2 from "../../../assets/images/culture/festival/festival10.jpg";
import festival3 from "../../../assets/images/culture/festival/festival14.jpg";

import bonding1 from "../../../assets/images/culture/team-bonding/team-bond1.jpeg";
import bonding2 from "../../../assets/images/culture/team-bonding/team-bond2.jpg";
import bonding3 from "../../../assets/images/culture/team-bonding/team-bond3.jpg";
import bonding4 from "../../../assets/images/culture/team-bonding/team-bond3.jpg";


const Culture = () => {
const hero = useRevealOnScroll({ threshold: 0.2, once: true });
const strip = useRevealOnScroll({ threshold: 0.15, once: true });
const together = useRevealOnScroll({ threshold: 0.2, once: true });
 const celebrate = useRevealOnScroll({ threshold: 0.15, once: true });
   const festivals = useRevealOnScroll({ threshold: 0.2, once: true });
   const bonding = useRevealOnScroll({ threshold: 0.2, once: true });

return(
  <>
  {/*---------------- CULTURE HERO — EDITORIAL ------------- */}

    <section
      ref={hero.ref}
      className={`u-section rtx-culture-hero ${
        hero.visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="u-container rtx-culture-hero-layout">

        {/* LEFT — CONTENT */}
        <div className="rtx-culture-hero-content">
          <span
            className="rtx-culture-eyebrow u-drop"
            style={{ "--delay": "0.1s" }}
          >
            Robotronix Culture
          </span>

          <h1
            className="rtx-culture-hero-title u-drop"
            style={{ "--delay": "0.3s" }}
          >
            Our Office Culture <br />
            <span>& Celebrations</span>
          </h1>

          <p
            className="rtx-culture-hero-text u-drop"
            style={{ "--delay": "0.5s" }}
          >
            At our workplace, culture is not just about work—it’s about people,
            collaboration, and shared moments. We believe that a positive work
            environment inspires creativity, productivity, and long-term growth.
          </p>
        </div>

        {/* RIGHT — IMAGES */}
        <div
          className="rtx-culture-hero-images u-drop"
          style={{ "--delay": "0.7s" }}
        >
           <img
    src={heroMain}
    alt="Robotronix team culture and collaboration"
    className="rtx-culture-img main-img"
    loading="lazy"
  />
           <img
    src={heroFloat}
    alt="Robotronix team togetherness"
    className="rtx-culture-img floating-img img-1"
    loading="lazy"
  />

          {/* <div className="rtx-culture-img floating-img img-2" /> */}
        </div>

      </div>
    </section>

     {/*-------------- CULTURE — IMAGE STRIP ---------- */}

      <section
      ref={strip.ref}
      className={`u-section rtx-culture-strip ${
        strip.visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="u-container">

        {/* OPTIONAL MICRO TEXT */}
        <p
          className="rtx-culture-strip-text u-drop"
          style={{ "--delay": "0.1s" }}
        >
          Culture is built in shared moments, not just meetings.
        </p>

        {/* IMAGE STRIP */}
        <div
          className="rtx-culture-strip-images u-drop"
          style={{ "--delay": "0.3s" }}
        >
         <img
  src={strip1}
  alt="Team collaboration at Robotronix"
  className="rtx-strip-img"
  loading="lazy"
/>
<img
  src={strip2}
  alt="Office culture moments"
  className="rtx-strip-img"
  loading="lazy"
/>
<img
  src={strip3}
  alt="Team working together"
  className="rtx-strip-img"
  loading="lazy"
/>
<img
  src={strip4}
  alt="Creative workspace environment"
  className="rtx-strip-img"
  loading="lazy"
/>

        </div>

      </div>
    </section>

     {/*----------- CULTURE — TOGETHERNESS (EDITORIAL) ------------- */}

       <section
      ref={together.ref}
      className={`u-section rtx-culture-togetherness ${
        together.visible ? "u-drop-visible" : ""
      }`}  
    >
      <div className="u-container rtx-culture-togetherness-layout">

        {/* LEFT — STORY */}
        <div className="rtx-culture-togetherness-content">
          <h2
            className="u-title u-drop"
            style={{ "--delay": "0.1s" }}
          >
            A Culture of <span>Togetherness</span>
          </h2>

          <p  
            className="rtx-culture-togetherness-text u-drop"
            style={{ "--delay": "0.3s" }}
          >
            Our office culture is built on mutual respect, teamwork, and open
            communication. We encourage employees to support each other, share
            ideas freely, and grow together as one team.
          </p>

          <p
            className="rtx-culture-togetherness-text u-drop"
            style={{ "--delay": "0.45s" }}
          >
            By fostering collaboration and trust, we create an environment where
            individuals feel confident to contribute, innovate, and succeed
            collectively.
          </p>
        </div>

        {/* RIGHT — IMAGES */}
        <div
          className="rtx-culture-togetherness-images u-drop-right"
          style={{ "--delay": "0.6s" }}
        >
       <img
  src={together1}
  alt="Team discussion session"
  className="rtx-together-img"
  loading="lazy"
/>
<img
  src={together2}
  alt="Collaborative workspace"
  className="rtx-together-img"
  loading="lazy"
/>
<img
  src={together3}
  alt="Team brainstorming"
  className="rtx-together-img"
  loading="lazy"
/>
<img
  src={together4}
  alt="Office teamwork culture"
  className="rtx-together-img"
  loading="lazy"
/>

        </div>

      </div>
    </section>

      {/*----------- CULTURE — CELEBRATIONS (GALLERY) ------------- */}

       <section
      ref={celebrate.ref}
      className={`u-section rtx-culture-celebrations ${
        celebrate.visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="u-container-center">

        {/* HEADER */}
        <h2
          className="u-title u-drop"
          style={{ "--delay": "0.1s" }}
        >
          Celebrating <span>Every Moment</span>
        </h2>

        <p
          className="rtx-culture-celebrations-text u-drop"
          style={{ "--delay": "0.3s" }}
        >
          We believe in celebrating both professional milestones and personal
          joys. From festivals and team achievements to birthdays and special
          occasions, every celebration adds energy and positivity to our
          workplace.
        </p>

        {/* IMAGE GALLERY */}
        <div
          className="rtx-culture-celebrations-gallery u-drop"
          style={{ "--delay": "0.5s" }}
        >
         <img
  src={celebrate1}
  alt="Office celebration moments"
  className="rtx-celebration-img tall"
  loading="lazy"
/>
<img
  src={celebrate2}
  alt="Team celebration event"
  className="rtx-celebration-img"
  loading="lazy"
/>
<img
  src={celebrate3}
  alt="Festival celebration at work"
  className="rtx-celebration-img"
  loading="lazy"
/>
<img
  src={celebrate4}
  alt="Company celebration gathering"
  className="rtx-celebration-img wide"
  loading="lazy"
/>

        </div>

      </div>
    </section>

      {/*----------- CULTURE — FESTIVALS AT WORK (CONTRAST) ------------ */}

      <section
      ref={festivals.ref}
      className={`u-section rtx-culture-festivals ${
        festivals.visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="u-container rtx-culture-festivals-layout">

        {/* LEFT — MAIN IMAGE */}
       <img
  src={festivalMain}
  alt="Festival celebration at Robotronix office"
  className="rtx-culture-festivals-main-img u-drop-left"
  loading="lazy"
/>


        {/* RIGHT — CONTENT */}
        <div className="rtx-culture-festivals-content">
          <h2
            className="u-title u-drop"
            style={{ "--delay": "0.1s" }}
          >
            Festivals <span>at Work</span>
          </h2>

          <p
            className="rtx-culture-festivals-text u-drop"
            style={{ "--delay": "0.35s" }}
          >
            Our office comes alive during festivals. Traditional decorations,
            cultural activities, and team celebrations help us stay connected to
            our roots while enjoying time together beyond work.
          </p>

          <p
            className="rtx-culture-festivals-text u-drop"
            style={{ "--delay": "0.5s" }}
          >
            These moments create shared memories, strengthen bonds, and bring a
            sense of warmth and belonging into the workplace.
          </p>

          {/* SUPPORTING IMAGES */}
          <div
            className="rtx-culture-festivals-sub-images u-drop"
            style={{ "--delay": "0.65s" }}
          >
          <img
  src={festival1}
  alt="Office festival decor"
  className="rtx-festival-img"
  loading="lazy"
/>
<img
  src={festival2}
  alt="Team festival celebration"
  className="rtx-festival-img"
  loading="lazy"
/>
<img
  src={festival3}
  alt="Cultural celebration at work"
  className="rtx-festival-img"
  loading="lazy"
/>

          </div>
        </div>

      </div>
    </section>
       {/*-------- CULTURE — TEAM BONDING (LIFESTYLE) ---------- */}

        <section
      ref={bonding.ref}
      className={`u-section rtx-culture-bonding ${
        bonding.visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="u-container rtx-culture-bonding-layout">

        {/* LEFT — IMAGES */}
        <div
          className="rtx-culture-bonding-images u-drop-left"
          style={{ "--delay": "0.2s" }}
        >
     <img
  src={bonding1}
  alt="Team outing activity"
  className="rtx-bonding-img"
  loading="lazy"
/>
<img
  src={bonding2}
  alt="Informal team bonding"
  className="rtx-bonding-img"
  loading="lazy"
/>
<img
  src={bonding3}
  alt="Team engagement session"
  className="rtx-bonding-img"
  loading="lazy"
/>
<img
  src={bonding4}
  alt="Office team fun activity"
  className="rtx-bonding-img"
  loading="lazy"
/>

        </div>

        {/* RIGHT — CONTENT */}
        <div className="rtx-culture-bonding-content">
          <h2
            className="u-title u-drop"
            style={{ "--delay": "0.1s" }}
          >
            Team <span>Bonding Activities</span>
          </h2>

          <p
            className="rtx-culture-bonding-text u-drop"
            style={{ "--delay": "0.35s" }}
          >
            Regular team-building activities, outings, and informal gatherings
            help strengthen relationships, improve collaboration, and create a
            friendly work atmosphere.
          </p>

          <p
            className="rtx-culture-bonding-text u-drop"
            style={{ "--delay": "0.5s" }}
          >
            By spending time together outside formal work settings, teams build
            trust naturally, communicate openly, and enjoy working together
            every day.
          </p>
        </div>

      </div>
    </section>
  </>
);
};

export default Culture;
