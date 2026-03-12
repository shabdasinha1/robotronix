import { useState, useEffect, useRef } from "react";

const Dropdown = ({
  value,
  options = [],
  placeholder = "Select",
  onChange,
  className = "",
  renderExtraInput,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  /* ===============================
     TOGGLE DROPDOWN
  =============================== */
  const toggle = (e) => {
    e.stopPropagation();

    // notify other dropdowns to close
    window.dispatchEvent(new Event("closeAllDropdowns"));

    setOpen((prev) => !prev);
  };

  /* ===============================
     SELECT OPTION
  =============================== */
  const handleSelect = (option) => {
    onChange(option.value);

    // close dropdown unless using extra input
    if (!renderExtraInput || option.value !== "other") {
      setOpen(false);
    }
  };

  /* ===============================
     CLOSE ON OUTSIDE CLICK
  =============================== */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  /* ===============================
     CLOSE WHEN OTHER DROPDOWN OPENS
  =============================== */
  useEffect(() => {
    const closeDropdown = () => setOpen(false);

    window.addEventListener("closeAllDropdowns", closeDropdown);

    return () => window.removeEventListener("closeAllDropdowns", closeDropdown);
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
              className={`ui-dropdown-item ${
                value === opt.value ? "active" : ""
              }`}
              onClick={() => handleSelect(opt)}
            >
              {opt.label}
            </button>
          ))}

          {/* Optional custom input */}
          {renderExtraInput && renderExtraInput(value)}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
