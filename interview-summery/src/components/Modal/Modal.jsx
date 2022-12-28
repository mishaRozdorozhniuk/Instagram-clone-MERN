import React from 'react';
import PostFooter from '../Posts/PostFooter';
import './Modal.scss';

const Modal = ({
  setPostCommentInfo,
  countOfLikes,
  modalImg,
  modalComments,
  setComentId,
  children,
  handleShowModal,
  postCommentInfo,
  handleSubmit,
  comment,
  id
}) => {
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
            <PostFooter
              id={id}
              comment={comment}
              setComentId={setComentId}
              setPostCommentInfo={setPostCommentInfo}
              postCommentInfo={postCommentInfo}
              countOfLikes={countOfLikes}
              handleSubmit={handleSubmit}
              modalComments={modalComments}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
