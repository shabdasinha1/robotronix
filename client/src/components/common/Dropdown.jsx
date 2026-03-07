import { useState, useEffect, useRef } from "react";

const Dropdown = ({ value, options = [], placeholder = "Select", onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const toggle = (e) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
  };

  const handleSelect = (option) => {
    onChange(option.value);
    setOpen(false);
  };

  // close on outside click
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  return (
    <div className="ui-dropdown" ref={ref}>
      <button
        type="button"
        className="rtx-input"
        onClick={toggle}
      >
        {value
          ? options.find((o) => o.value === value)?.label
          : placeholder}
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
        </div>
      )}
    </div>
  );
};

export default Dropdown;