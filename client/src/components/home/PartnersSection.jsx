import React, { useEffect, useMemo, useState } from "react";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

// import logo1 from "../../assets/images/logo/logo1.webp";
// import logo2 from "../../assets/images/logo/logo2.webp";

// import logo3 from "../../assets/images/logo/logo3.webp";
// import logo4 from "../../assets/images/logo/logo4.webp";
// import logo5 from "../../assets/images/logo/logo5.webp";
// import logo6 from "../../assets/images/logo/logo6.webp";
// import logo7 from "../../assets/images/logo/logo7.webp";
// import logo8 from "../../assets/images/logo/logo8.webp";
// import logo9 from "../../assets/images/logo/logo9.webp";
// import logo10 from "../../assets/images/logo/logo10.webp";
import { getAllIndustryLeaders } from "../../services/PublicServices";

/* ===============================
   STATIC LOGOS (SAFE)
=============================== */

// const logos = [
//   logo1,
//   logo2,
//   logo3,
//   logo4,
//   logo5,
//   logo6,
//   logo7,
//   logo8,
//   logo9,
//   logo10,
// ];

const marqueeCopies = [0, 1];

const PartnersSection = React.memo(() => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const res = await getAllIndustryLeaders();
        setLogos(res.data); // make sure this matches your API response
      } catch (error) {
        console.error("Error fetching industry leaders:", error);
      }
    };

    fetchLeaders();
  }, []);

  /* ===============================
     OBSERVER OPTIONS (MEMOIZED)
  =============================== */

  const revealOptions = useMemo(
    () => ({
      threshold: 0.15,
      rootMargin: "0px 0px -120px 0px",
      once: true,
    }),
    [],
  );

  const { ref, visible } = useRevealOnScroll(revealOptions);

  return (
    <section
      ref={ref}
      className={`rtx-partners-wrapper u-section u-section-md ${
        visible ? "u-drop-visible rtx-marquee-active" : ""
      }`}
    >
      <div className="rtx-partners-container u-container-center">
        {/* TITLE */}
        <h2 className="rtx-partners-title u-drop" style={{ "--delay": "0.2s" }}>
          Trusted By <span>Industry Leaders</span>
        </h2>

        <p className="rtx-partners-sub u-drop" style={{ "--delay": "0.4s" }}>
          Companies around the world rely on us for cutting-edge solutions.
        </p>

        {/* ROW */}
        <div className="rtx-marquee-row u-drop" style={{ "--delay": "0.6s" }}>
          <div className="rtx-marquee-track">
            {marqueeCopies.map((i) => (
              <div className="rtx-marquee-set" key={i}>
                {logos.map((logo) => (
                  <img
                    key={logo._id}
                    src={`${process.env.REACT_APP_API_BASE_URL}/${logo.image}`}
                    alt="Industry Leader"
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default PartnersSection;
