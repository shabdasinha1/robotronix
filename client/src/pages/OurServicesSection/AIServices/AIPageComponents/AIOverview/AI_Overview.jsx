import { useEffect, useRef } from "react";

const AI_Overview = ({
  title,
  accent,
  paragraphs = [],
  infoCards = [],
  btnText,
  btnLink = "#",
}) => {
  const overviewRef = useRef(null);

  useEffect(() => {
    const section = overviewRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          section.classList.add("rtx-aioverview-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="rtx-aioverview-section" ref={overviewRef}>
      <div className="rtx-aioverview-container">

        {/* LEFT */}
        <div
          className="rtx-aioverview-left rtx-aioverview-drop"
          style={{ "--delay": "0.2s" }}
        >
          <h2 className="rtx-aioverview-title">
            {title} <span>{accent}</span>
          </h2>

          {paragraphs.map((text, idx) => (
            <p key={idx} className="rtx-aioverview-text">
              {text}
            </p>
          ))}

          {/* ✅ GLOBAL BUTTON (OPTIONAL) */}
          {btnText && (
            <a href={btnLink} className="btn btn-outline">
              {btnText} →
            </a>
          )}
        </div>

        {/* RIGHT — GLOBAL CARDS */}
        <div className="rtx-aioverview-right">
          {infoCards.map((card, idx) => (
            <div
              key={idx}
              className="card card-glass rtx-aioverview-drop"
              style={{ "--delay": `${0.4 + idx * 0.2}s` }}
            >
              <h3 className="text-accent">{card.title}</h3>
              <p className="text-muted">{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AI_Overview;
