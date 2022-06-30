import React from 'react';
import like from '../../icons/like-pos.png';
import comment from '../../icons/comment-pos.png';

const LikesAndComment = ({ likes, comments }) => {
  return (
    <div className="mask">
      <span className="mask-likes">
        <img className="mask-like-icon" src={like} alt="" />
        {likes}
      </span>
      <span className="mask-coments">
        <img className="mask-comment-icon" src={comment} alt="" />
        {comments}
      </span>
    </div>
  );
};
export default LikesAndComment;
