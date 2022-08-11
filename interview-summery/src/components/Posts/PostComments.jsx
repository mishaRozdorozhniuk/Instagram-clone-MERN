import React, { useContext } from 'react';
import { AuthContext } from '../../contex';
import Smile from '../../icons/Smile';

const PostComments = ({ id, handleSubmit, setPostCommentInfo, setComentId, postCommentInfo }) => {
  const { currentPostId } = useContext(AuthContext);
  return (
    <div className="post__comments">
      <div className="post__comments-group">
        <Smile />
        <form id="comments-form" onSubmit={handleSubmit}>
          <input
            name="comment"
            value={id === currentPostId ? postCommentInfo : ''}
            onChange={(e) =>
              id
                ? (setPostCommentInfo(e.target.value), setComentId(id))
                : (setPostCommentInfo(''), setComentId(null))
            }
            className="post__input"
            type="text"
            placeholder="Добавьте комментарий..."
          />
        </form>
      </div>
      <button form="comments-form" type="submit" className="post__publish">
        Опубликовать
      </button>
    </div>
  );
};

export default PostComments;
