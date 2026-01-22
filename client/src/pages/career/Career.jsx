import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import { Link } from "react-router-dom";

const Career = () => {
  const hero = useRevealOnScroll({ threshold: 0.2, once: true });
    const why = useRevealOnScroll({ threshold: 0.2, once: true });
     const life = useRevealOnScroll({ threshold: 0.2, once: true });
       const jobsRef = useRevealOnScroll({ threshold: 0.2, once: true });
        const process = useRevealOnScroll({ threshold: 0.2, once: true });
    const growth = useRevealOnScroll({ threshold: 0.2, once: true });
     const cta = useRevealOnScroll({ threshold: 0.2, once: true });
     const reasons = [
    {
      title: "Learning-First Culture",
      desc: "We focus on practical learning through real projects, mentorship, and continuous skill development."
    },
    {
      title: "Real-World Exposure",
      desc: "Work on live industry projects that challenge you and help you grow beyond theory."
    },
    {
      title: "Supportive Team Environment",
      desc: "Collaboration, respect, and open communication define how we work together every day."
    },
    {
      title: "Clear Growth Path",
      desc: "Performance-based growth with clear expectations, feedback, and career progression."
    },
    {
      title: "Ownership & Responsibility",
      desc: "We trust our team members to take ownership and make meaningful contributions."
    },
    {
      title: "Balanced Work Culture",
      desc: "We value productivity, well-being, and a healthy work-life balance."
    }
  ];

  const jobs = [
    {
      title: "Embedded Engineer",
      experience: "2+ ` Years",
      location: "Indore",
      type: "Full Time",
    },
    
  ];

  
  const steps = [
    {
      step: "01",
      title: "Apply Online",
      desc: "Submit your application by sharing your resume and basic details through our website or email."
    },
    {
      step: "02",
      title: "HR Screening",
      desc: "Our HR team reviews your profile to understand your background, interests, and suitability."
    },
    {
      step: "03",
      title: "Technical Discussion",
      desc: "A technical conversation to assess your skills, problem-solving ability, and approach to real-world challenges."
    },
    {
      step: "04",
      title: "Offer & Onboarding",
      desc: "Selected candidates receive an offer and are guided through a smooth onboarding process."
    }
  ];

 const growthPoints = [
    {
      title: "Hands-on Learning",
      desc: "We believe learning happens best by doing. Team members work on real-world projects that enhance both technical and problem-solving skills."
    },
    {
      title: "Mentorship & Guidance",
      desc: "Experienced team members and mentors guide you through challenges, helping you grow with confidence and clarity."
    },
    {
      title: "Skill Development",
      desc: "Continuous learning through internal sessions, discussions, and exposure to modern technologies and tools."
    },
    {
      title: "Career Progression",
      desc: "Clear expectations, constructive feedback, and performance-based growth opportunities help you move forward in your career."
    }
  ];

  return (
    
<>
{/* -------------------- CAREER — HERO SECTION -------------- */}
<section
      ref={hero.ref}
      className={`u-section rtx-career-hero ${
        hero.visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="u-container rtx-career-hero-layout">

        {/* LEFT — CONTENT */}
        <div className="rtx-career-hero-content">

          <span
            className="rtx-career-eyebrow u-drop"
            style={{ "--delay": "0.1s" }}
          >
            Careers at Robotronix
          </span>

          <h1
            className="rtx-career-hero-title u-drop"
            style={{ "--delay": "0.3s" }}
          >
            Build your career <br />
            with <span>purpose</span>, <br />
            not just a job.
          </h1>

          <p
            className="rtx-career-hero-text u-drop"
            style={{ "--delay": "0.5s" }}
          >
            Join a team where learning, ownership, and growth are part of everyday
            work. We believe meaningful careers are built through real impact,
            continuous learning, and strong collaboration.
          </p>

          <div
            className="rtx-career-hero-actions u-drop"
            style={{ "--delay": "0.7s" }}
          >
            <a href="#open-positions" className="btn btn-primary btn-lg">
              View Open Positions
            </a>

            <a href="/contact-us" className="btn btn-outline btn-lg">
              Send Resume
            </a>
          </div>

        </div>

        {/* RIGHT — VISUAL BLOCK */}
        <div
          className="rtx-career-hero-visual u-drop"
          style={{ "--delay": "0.9s" }}
        >
          <div className="rtx-career-hero-card">
            <h4>Why Join Us?</h4>
            <ul>
              <li>Real-world projects</li>
              <li>Learning-first culture</li>
              <li>Supportive team environment</li>
              <li>Clear growth opportunities</li>
            </ul>
          </div>
        </div>

      </div>
    </section>

       {/*------------ CAREER — WHY WORK WITH US ----------- */}

         <section
      ref={why.ref}
      className={`u-section rtx-career-why ${
        why.visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="u-container">

        {/* HEADER */}
        <div className="u-section-header">
          <h2 className="u-title u-drop">
            Why <span>Work With Us</span>
          </h2>
          <p className="u-subtext u-drop" style={{ "--delay": "0.2s" }}>
            We don’t just offer jobs — we help build meaningful careers.
          </p>
        </div>

        {/* GRID */}
        <div className="u-grid-auto">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="card card-hover u-drop"
              style={{ "--delay": `${0.2 + index * 0.1}s` }}
            >
              <h4 className="rtx-career-why-title">{item.title}</h4>
              <p className="rtx-career-why-text">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>

   {/*-------------- CAREER — LIFE AT ROBOTRONIX ------------- */}

   <section
      ref={life.ref}
      className={`u-section rtx-career-life ${
        life.visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="u-container rtx-career-life-layout">

        {/* LEFT — CONTENT */}
        <div className="rtx-career-life-content">
          <h2
            className="u-title u-drop"
            style={{ "--delay": "0.1s" }}
          >
            Life at <span>Robotronix</span>
          </h2>

          <p
            className="rtx-career-life-text u-drop"
            style={{ "--delay": "0.3s" }}
          >
            At Robotronix, work is not just about tasks and deadlines — it’s
            about people, learning, and growing together. We believe a healthy
            and positive work environment leads to better ideas, stronger teams,
            and meaningful outcomes.
          </p>

          <p
            className="rtx-career-life-text u-drop"
            style={{ "--delay": "0.45s" }}
          >
            From collaborative discussions and real-world problem solving to
            celebrations, team bonding, and continuous learning, we strive to
            create a space where everyone feels valued and motivated.
          </p>
        </div>

        {/* RIGHT — IMAGES */}
        <div
          className="rtx-career-life-images u-drop-right"
          style={{ "--delay": "0.6s" }}
        >
          <div className="rtx-life-img" />
          <div className="rtx-life-img" />
          <div className="rtx-life-img" />
          <div className="rtx-life-img" />
        </div>

      </div>
    </section>

       {/*-------------- CAREER — OPEN POSITIONS ------------- */}

          <section
      id="open-positions"
      ref={jobsRef.ref}
      className={`u-section rtx-career-jobs ${
        jobsRef.visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="u-container">

        {/* HEADER */}
        <div className="u-section-header">
          <h2 className="u-title u-drop">
            Open <span>Positions</span>
          </h2>
          <p className="u-subtext u-drop" style={{ "--delay": "0.2s" }}>
            Explore current opportunities and find a role that fits your skills
            and aspirations.
          </p>
        </div>

        {/* JOB LIST */}
        <div className="rtx-career-job-list">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="rtx-career-job-card u-drop"
              style={{ "--delay": `${0.2 + index * 0.1}s` }}
            >
              <div className="rtx-career-job-info">
                <h4>{job.title}</h4>
                <ul>
                  <li><strong>Experience:</strong> {job.experience}</li>
                  <li><strong>Location:</strong> {job.location}</li>
                  <li><strong>Type:</strong> {job.type}</li>
                </ul>
              </div>

              <div className="rtx-career-job-action">
                <Link to="/contact-us" className="btn btn-outline btn-md">
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

 {/*-------------- CAREER — HIRING PROCESS -------------*/}


       {/*------------- CAREER — GROWTH & LEARNING ------------ */}

         <section
      ref={growth.ref}
      className={`u-section rtx-career-growth ${
        growth.visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="u-container">

        {/* HEADER */}
        <div className="u-section-header">
          <h2 className="u-title u-drop">
            Growth & <span>Learning</span>
          </h2>
          <p className="u-subtext u-drop" style={{ "--delay": "0.2s" }}>
            We invest in people who are curious, committed, and eager to grow.
          </p>
        </div>

        {/* GRID */}
        <div className="u-grid-auto">
          {growthPoints.map((item, index) => (
            <div
              key={index}
              className="card card-hover u-drop"
              style={{ "--delay": `${0.2 + index * 0.15}s` }}
            >
              <h4 className="rtx-career-growth-title">
                {item.title}
              </h4>
              <p className="rtx-career-growth-text">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>

     {/*------------ CAREER — FINAL CTA ----------- */}

       <section
      ref={cta.ref}
      className={`u-section rtx-career-cta ${
        cta.visible ? "u-drop-visible" : ""
      }`}
    >
      <div className="u-container-center">

        <h2
          className="u-title u-drop"
          style={{ "--delay": "0.1s" }}
        >
          Ready to build your <span>career with us?</span>
        </h2>

        <p
          className="rtx-career-cta-text u-drop"
          style={{ "--delay": "0.3s" }}
        >
          Explore open roles or share your resume with us. Even if you don’t see
          a position that fits right now, we’d still love to hear from you.
        </p>

        <div
          className="rtx-career-cta-actions u-drop"
          style={{ "--delay": "0.5s" }}
        >
          <a href="#open-positions" className="btn btn-primary btn-lg">
            View Open Positions
          </a>

          <Link to="/contact-us" className="btn btn-outline btn-lg">
            Send Your Resume
          </Link>
        </div>

      </div>
    </section>
</>
  );
};

export default Career;
