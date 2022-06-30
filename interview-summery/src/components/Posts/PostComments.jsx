import React from 'react';
import Smile from '../../icons/Smile';

const PostComments = ({ id, handleCommentPost, postCommentInfo }) => {
  return (
    <div className="post__comments">
      <div className="post__comments-group">
        <Smile />
        <input
          name="comment-inputfwef"
          value={postCommentInfo}
          onChange={(e) => handleCommentPost(e, id)}
          className="post__input"
          type="text"
          placeholder="Добавьте комментарий..."
        />
      </div>
      <button className="post__publish">Опубликовать</button>
    </div>
  );
};

export default PostComments;
