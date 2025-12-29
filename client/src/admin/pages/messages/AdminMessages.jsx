import { useState } from "react";
import useRevealOnScroll from "../../../hooks/useRevealOnScroll";

const AdminMessages = () => {
  const { ref, visible } = useRevealOnScroll({
    threshold: 0.1,
    once: true,
  });

  const [activeMessage, setActiveMessage] = useState(null);

  const messages = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "9876543210",
      message: "I want to know more about your AI services and pricing."
    },
    {
      id: 2,
      name: "Anjali Verma",
      email: "anjali@gmail.com",
      phone: "9123456789",
      message: "Please call me back regarding partnership opportunities."
    }
  ];

  return (
    <div
      ref={ref}
      className={`rtx-admin-messages ${visible ? "u-drop-visible" : ""}`}
    >
      {/* HEADER */}
      <div className="rtx-admin-page-header u-drop">
        <h2 className="u-title">
          Messages <span>Inbox</span>
        </h2>
        <p className="u-subtext">
          Contact form messages received from the website
        </p>
      </div>

      {/* TABLE */}
      <div className="rtx-admin-table-wrapper u-drop" style={{ "--delay": "0.2s" }}>
        <table className="rtx-admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {messages.map((msg) => (
              <tr key={msg.id}>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td>{msg.phone}</td>
                <td className="rtx-message-preview">
                  {msg.message}
                </td>
                <td>
                  <button
                    className="rtx-btn-view"
                    onClick={() => setActiveMessage(msg)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MODAL ================= */}
      {activeMessage && (
        <div
          className="rtx-modal-overlay"
          onClick={() => setActiveMessage(null)}
        >
          <div
            className="rtx-modal u-drop"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rtx-modal-header">
              <h3>Message Details</h3>
              <button
                className="rtx-modal-close"
                onClick={() => setActiveMessage(null)}
              >
                ✕
              </button>
            </div>

            <div className="rtx-modal-body">
              <div className="rtx-modal-row">
                <span>Name</span>
                <p>{activeMessage.name}</p>
              </div>

              <div className="rtx-modal-row">
                <span>Email</span>
                <p>{activeMessage.email}</p>
              </div>

              <div className="rtx-modal-row">
                <span>Phone</span>
                <p>{activeMessage.phone}</p>
              </div>

              <div className="rtx-modal-row full">
                <span>Message</span>
                <p>{activeMessage.message}</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminMessages;
