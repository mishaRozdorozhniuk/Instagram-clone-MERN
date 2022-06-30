import React from 'react';
import StoriesUser from '../Stories/StoriesUser';
import masterpiece from './post-photo1.jpeg';
import PostFooter from './PostFooter';
import './Post.scss';

const Post = ({
  handleCommentPost,
  postCommentInfo,
  comment,
  dateOfPost,
  nickName,
  countOfLikes,
  photoDescription,
  subtitle,
  id,
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
      <img className="post__photo" src={masterpiece} alt="post-foto1" />
      <PostFooter
        id={id}
        handleCommentPost={handleCommentPost}
        postCommentInfo={postCommentInfo}
        nickName={nickName}
        subtitle={subtitle}
        comment={comment}
        dateOfPost={dateOfPost}
        countOfLikes={countOfLikes}
        modalComments={true}
        photoDescription={photoDescription}
      />
    </article>
  );
};

export default Post;
