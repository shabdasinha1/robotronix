import { useEffect } from "react";
import { FiX } from "react-icons/fi";

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="rtx-modal-wrapper" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="rtx-modal-backdrop" onClick={onClose}></div>

      {/* Modal Box */}
      <div className="rtx-modal">
        <button
          className="rtx-modal-close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <FiX />
        </button>

        {title && <h3 className="rtx-modal-title">{title}</h3>}

        <div className="rtx-modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;