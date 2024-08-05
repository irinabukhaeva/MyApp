import React from "react";
import { Transition } from "react-transition-group";
import { ResetIcon } from "../Icons";
import "./SimpleModal.scss";

export const SimpleModal = ({ isOpen, onClose, children }) => {
  const onWrapperClick = (event) => {
    if (event.target.classList.contains("modal-wrapper")) onClose();
  };
  return (
    <>
      <Transition in={isOpen} timeout={350} unmountOnExit={true}>
        {(state) => (
          <div className={`modal modal--${state}`}>
            <div className="modal-wrapper" onClick={onWrapperClick}>
              <div className="modal-content">
                <button
                  className="modal-close-button"
                  onClick={() => onClose()}
                >
                  <ResetIcon />
                </button>
                {children}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};