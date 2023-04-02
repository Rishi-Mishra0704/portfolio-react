import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, children }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
