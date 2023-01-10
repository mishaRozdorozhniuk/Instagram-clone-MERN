import React from 'react';
import StoriesUser from '../Stories/StoriesUser';
import PostFooter from './PostFooter';
import './Post.scss';

const Post = ({
  setPostCommentInfo,
  handleSubmit,
  postCommentInfo,
  setComentId,
  comment,
  dateOfPost,
  nickName,
  countOfLikes,
  photoDescription,
  subtitle,
  photoOfPost,
  id,
  savePostFlag
}) => {
  return (
    <article className="post">
      <div className="post__header">
        <div className="post__inner">
          <StoriesUser size={true} />
          <div className="post__nick-info">
            <span>
              <a className="post__nick" href="#">
                {nickName}
              </a>
            </span>
            <dl className="post__description">{subtitle}</dl>
          </div>
        </div>
        <span className="post__dots">...</span>
      </div>
      <img className="post__photo" src={photoOfPost} alt="post-foto1" />
      <PostFooter
        id={id}
        postCommentInfo={postCommentInfo}
        nickName={nickName}
        photoOfPost={photoOfPost}
        setComentId={setComentId}
        subtitle={subtitle}
        handleSubmit={handleSubmit}
        comment={comment}
        dateOfPost={dateOfPost}
        setPostCommentInfo={setPostCommentInfo}
        countOfLikes={countOfLikes}
        modalComments={true}
        photoDescription={photoDescription}
        savePostFlag={savePostFlag}
      />
    </article>
  );
};

export default Post;
