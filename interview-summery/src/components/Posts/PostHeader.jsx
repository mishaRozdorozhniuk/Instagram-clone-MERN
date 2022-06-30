import StoriesUser from '../Stories/StoriesUser';
import React from 'react';

const PostHeader = ({ nickName, subtitle }) => {
  return (
    <div className="post__header">
      <div className="post__inner">
        <StoriesUser size={true} />
        <div className="post__nick-info">
          <span>
            <a className="post__nick" href="/someName">
              {nickName}
            </a>
          </span>
          <dl className="post__description">{subtitle}</dl>
        </div>
      </div>
      <span className="post__dots">...</span>
    </div>
  );
};

export default PostHeader;
