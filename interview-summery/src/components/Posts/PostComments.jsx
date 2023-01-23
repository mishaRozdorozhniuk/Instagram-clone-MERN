import React, { useContext } from 'react';
import { AuthContext } from '../../contex';
import Smile from '../../icons/Smile';
import { useSelector } from 'react-redux';

const PostComments = ({ id, handleSubmit, setPostCommentInfo, setComentId, postCommentInfo }) => {
  const { currentPostId } = useContext(AuthContext);

  const theme = useSelector((state) => state.switchTheme.appTheme);

  const iconCondition = theme === 'dark' ? '#fff' : '#000';

  return (
    <div className="post__comments">
      <div className="post__comments-group">
        <Smile theme={iconCondition} />
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
      <button
        form="comments-form"
        type="submit"
        className={postCommentInfo ? 'post__publish' : 'post__publish post__publish-disabled'}>
        Опубликовать
      </button>
    </div>
  );
};

export default PostComments;
