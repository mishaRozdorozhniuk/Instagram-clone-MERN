import React from 'react';
import Share from '../../icons/Share';
import SaveIcon from './SaveIcon';

const PostFooterIcons = ({ savePost, savedPostId, id, like, comments, removePostId }) => {
  return (
    <div className="post__footer-icons">
      <div className="post-icons-inner">
        <img className="like-icon" src={like} alt="like" />
        <img className="comments-icon" src={comments} alt="comments" />
        <Share />
      </div>
      {!savePost ? (
        <div onClick={() => savedPostId()}>
          <SaveIcon remove={false} />
        </div>
      ) : (
        <div onClick={() => removePostId(id)}>
          <SaveIcon remove={true} />
        </div>
      )}
    </div>
  );
};

export default PostFooterIcons;
