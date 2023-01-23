import React from 'react';
import Share from '../../icons/Share';
import SaveIcon from './SaveIcon';
import Like from '../../icons/Like';
import { useSelector } from 'react-redux';
import Comments from '../../icons/Comments';

const PostFooterIcons = ({ trigger, savedPostId, removePostId, showModal }) => {
  const theme = useSelector((state) => state.switchTheme.appTheme);

  const iconCondition = theme === 'dark' ? '#fff' : '#262626';

  return (
    <div data-theme={theme} className="post__footer-icons">
      <div className="post-icons-inner">
        <Like theme={iconCondition} />
        <span onClick={showModal} className="comments-icon-wrapper">
          <Comments theme={iconCondition} />
        </span>
        <Share theme={iconCondition} />
      </div>
      {!trigger ? (
        <div onClick={() => savedPostId()}>
          <SaveIcon theme={iconCondition} remove={false} />
        </div>
      ) : (
        <div onClick={() => removePostId()}>
          <SaveIcon theme={iconCondition} remove={true} />
        </div>
      )}
    </div>
  );
};

export default PostFooterIcons;
