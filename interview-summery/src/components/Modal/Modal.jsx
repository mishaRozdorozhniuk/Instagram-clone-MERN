import React from 'react';
import PostFooter from '../Posts/PostFooter';
import './Modal.css';

const Modal = ({ countOfLikes, modalImg, modalComments, children, handleShowModal }) => {
  return (
    <div className="fixed-modal">
      <div className="modal modal-wrapper">
        <div className="modal__cross" onClick={handleShowModal}>
          <span></span>
          <span></span>
        </div>
        <div className="modal-content">
          <img className="modal-img" src={modalImg} alt="" />
          <div className="modal-comments">
            {children}
            <PostFooter countOfLikes={countOfLikes} modalComments={modalComments} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
