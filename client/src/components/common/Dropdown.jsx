import { useState, useEffect, useRef } from "react";

const Dropdown = ({
  value,
  options = [],
  placeholder = "Select",
  onChange,
  className = "",
  renderExtraInput, // optional function to render an input or any custom content
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const toggle = (e) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
  };

  const handleSelect = (option) => {
    onChange(option.value);
    // only close dropdown if no extra input
    if (!renderExtraInput || option.value !== "other") {
      setOpen(false);
    }
  };

  // close on outside click
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  const selectedLabel = options.find((o) => o.value === value)?.label;

  return (
    <div className={`ui-dropdown ${className}`} ref={ref}>
      <button type="button" className="rtx-input" onClick={toggle}>
        {selectedLabel || placeholder}
      </button>

      {open && (
        <div className="ui-dropdown-menu">
          {options.map((opt) => (
            <button
              key={opt.value}
              className={`ui-dropdown-item ${value === opt.value ? "active" : ""}`}
              onClick={() => handleSelect(opt)}
            >
              {opt.label}
            </button>
          ))}

          {/* render optional extra input */}
          {renderExtraInput && renderExtraInput(value)}
        </div>
      )}
    </div>
  );
};

export default Dropdown;