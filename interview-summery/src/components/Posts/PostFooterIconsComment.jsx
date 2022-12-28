import React from 'react';
import PostFooterIcons from './PostFooterIcons';

const PostFooterIconsComment = ({
  handleShowModal,
  photoDescription,
  dateOfPost,
  modalComments,
  savedPostId,
  removePostId,
  savePost,
  like,
  id,
  comments,
  countOfLikes
}) => {
  return (
    <div className="post-footer-wrapper">
      <PostFooterIcons
        removePostId={removePostId}
        savedPostId={savedPostId}
        id={id}
        savePost={savePost}
        like={like}
        comments={comments}
      />
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
  );
};

export default PostFooterIconsComment;
