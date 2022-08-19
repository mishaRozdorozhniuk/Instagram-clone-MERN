import React, { useState, useEffect } from 'react';
import like from '../../icons/like.png';
import comments from '../../icons/comments.webp';
import Share from '../../icons/Share';
import NickName from '../NickName/NickName';
import Modal from '../Modal/Modal';
import PostHeader from '../Posts/PostHeader';
import StoriesUser from '../Stories/StoriesUser';
import PostComments from './PostComments';
import './Post.scss';
import SaveIcon from './SaveIcon';

const PostFooter = ({
  comment,
  dateOfPost,
  handleSubmit,
  countOfLikes,
  setComentId,
  photoDescription,
  postsPata,
  nickName,
  subtitle,
  photoOfPost,
  setPostCommentInfo,
  postCommentInfo,
  id,
  modalComments,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [savePost, setSavePost] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const savedPostId = () => {
    setSavePost(!savePost);

    const posts = JSON.parse(localStorage.getItem('posts') || '[]');

    const currentPostId = postsPata.find(({ id: idx }) => idx === id);

    posts.push(currentPostId);

    localStorage.setItem('posts', JSON.stringify(posts));
  };

  return (
    <>
      <div className="post-footer-wrapper">
        <div className="post__footer-icons">
          <div className="post-icons-inner">
            <img className="like-icon" src={like} alt="like" />
            <img className="comments-icon" src={comments} alt="comments" />
            <Share />
          </div>
          <div onClick={() => savedPostId()}>
            <SaveIcon savePost={savePost} />
          </div>
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
          modalImg={photoOfPost}
          setPostCommentInfo={setPostCommentInfo}
          modalComments={false}
          handleSubmit={handleSubmit}
          handleShowModal={handleShowModal}
          comment={comment}
          setComentId={setComentId}
          id={id}
          countOfLikes={countOfLikes}
          postCommentInfo={postCommentInfo}
        >
          <PostHeader nickName={nickName} subtitle={subtitle} />
          <div className="modal__comment-wrapper">
            {comment.map((c, index) => (
              <div key={index} className="modal__comments-inner">
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
        setComentId={setComentId}
        handleSubmit={handleSubmit}
        setPostCommentInfo={setPostCommentInfo}
        postCommentInfo={postCommentInfo}
      />
    </>
  );
};

export default PostFooter;
