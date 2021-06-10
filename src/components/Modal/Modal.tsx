import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isShowing, hide }: { isShowing: boolean; hide: any }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay" />
          <div className="modal-wrapper" aria-modal aria-hidden role="dialog">
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default Modal;
