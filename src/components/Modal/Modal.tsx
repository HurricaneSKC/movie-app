import React from "react";
import ReactDOM from "react-dom";

const Modal = ({
  isShowing,
  hide,
  modalContent,
}: {
  isShowing: boolean;
  hide: () => void;
  modalContent: JSX.Element;
}) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay" />
          <div className="modal-wrapper" aria-modal aria-hidden role="dialog">
            <div className="modal">
              <header className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </header>
              {modalContent}
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default Modal;
