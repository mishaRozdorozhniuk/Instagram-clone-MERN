import React, { useState } from 'react';
import like from '../../icons/like.png';
import comments from '../../icons/comments.webp';
import save from '../../icons/save.webp';
import Share from '../../icons/Share';
import NickName from '../NickName/NickName';
import Modal from '../Modal/Modal';
import PostHeader from '../Posts/PostHeader';
import StoriesUser from '../Stories/StoriesUser';
import PostComments from './PostComments';
import masterpiece from '../Posts/post-photo1.jpeg';
import './Post.scss';

const PostFooter = ({
  comment,
  dateOfPost,
  countOfLikes,
  photoDescription,
  nickName,
  subtitle,
  handleCommentPost,
  postCommentInfo,
  id,
  modalComments,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="post__footer">
        <div className="post__footer-icons">
          <div className="post-icons-inner">
            <img className="like-icon" src={like} alt="like" />
            <img className="comments-icon" src={comments} alt="comments" />
            <Share />
          </div>
          <img className="save-icon" src={save} alt="save" />
        </div>
        <span className="post__likes">{countOfLikes} отметок "Нравится"</span>
        <div className="likes-inner">
          <span>
            <a className="post__nick" href="#">
              __procherk__
            </a>
          </span>
          <span className="likes-deskripiton">{photoDescription}</span>
        </div>
        {modalComments ? (
          <button onClick={handleShowModal} className="post__check-comments">
            Посмотреть все комментарии
          </button>
        ) : (
          ''
        )}
        <span className="post__data">{dateOfPost}</span>
      </div>
      {showModal && (
        <Modal
          modalImg={masterpiece}
          modalComments={false}
          handleShowModal={handleShowModal}
          comment={comment}
          countOfLikes={countOfLikes}
        >
          <PostHeader nickName={nickName} subtitle={subtitle} />
          <div className="modal__comment-wrapper">
            {comment.map((c) => (
              <div className="modal__comments-inner">
                <StoriesUser size={true} />
                <NickName className="modal__comments-nick" nameOfUser={c.senderName} />
                <div className="modal__comments-info">{c.senderCommentText}</div>
              </div>
            ))}
          </div>
        </Modal>
      )}
      <PostComments
        id={id}
        handleCommentPost={handleCommentPost}
        postCommentInfo={postCommentInfo}
      />
    </>
  );
};

export default PostFooter;
