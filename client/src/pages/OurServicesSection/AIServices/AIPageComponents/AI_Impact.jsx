import useRevealOnScroll from "../../../../hooks/useRevealOnScroll";

const AI_Impact = ({ title, subtitle }) => {
  const { ref, visible } = useRevealOnScroll({
    threshold: 0.15,
    rootMargin: "0px 0px -120px 0px",
    once: true,
  });

  return (
    <section
      ref={ref}
      className={`rtx-aiimpact-section u-section u-section-sm ${
        visible ? "u-drop-visible" : ""
      }`}
    >
      <div
        className="rtx-aiimpact-container u-drop"
        style={{ "--delay": "0.2s" }}
      >
        <h2 className="rtx-aiimpact-title">{title}</h2>
        <p className="rtx-aiimpact-subtext">{subtitle}</p>
      </div>
    </section>
  );
};

export default AI_Impact;
