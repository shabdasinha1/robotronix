import { useEffect, useRef } from "react";

const AI_Hero = ({
  badge,
  title,
  accent,
  subtitle,
  primaryText,
  primaryLink,
  secondaryText,
  secondaryLink,
  stats = [],
}) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const section = heroRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          section.classList.add("rtx-aihero-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="rtx-aihero-wrapper" ref={heroRef}>
      <div className="rtx-aihero-particles"></div>

      <div className="rtx-aihero-container">
        <span className="rtx-aihero-badge rtx-aihero-drop" style={{ "--delay": "0.2s" }}>
          {badge}
        </span>

        <h1 className="rtx-aihero-title rtx-aihero-drop" style={{ "--delay": "0.4s" }}>
          {title} <br />
          <span className="rtx-aihero-accent">{accent}</span>
        </h1>

        <p className="rtx-aihero-subtext rtx-aihero-drop" style={{ "--delay": "0.6s" }}>
          {subtitle}
        </p>

        {/* ✅ GLOBAL BUTTON SYSTEM */}
        <div className="rtx-aihero-btn-group rtx-aihero-drop" style={{ "--delay": "0.8s" }}>
          <a href={primaryLink} className="btn btn-primary">
            {primaryText}
          </a>

          {secondaryText && (
            <a href={secondaryLink} className="btn btn-outline">
              {secondaryText}
            </a>
          )}
        </div>

        {/* ✅ GLOBAL CARD SYSTEM */}
        {stats.length > 0 && (
          <div className="rtx-aihero-stats">
            {stats.map((item, i) => (
              <div
                key={i}
                className="card card-glass rtx-aihero-drop"
                style={{ "--delay": `${1 + i * 0.2}s` }}
              >
                <h3 className="text-accent">{item.value}</h3>
                <p className="text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AI_Hero;
