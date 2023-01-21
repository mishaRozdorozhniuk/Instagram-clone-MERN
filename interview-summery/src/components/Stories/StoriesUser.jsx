import React from 'react';
import avatar from './default-author.png';
import './StoriesUser.scss';
import useTheme from '../../hooks/useLocalStorage';

const StoriesUser = ({ size }) => {
  const { theme } = useTheme();
  return (
    <div data-theme={theme} className="user-wrapper" style={{ width: size ? '43px' : null }}>
      <img className="avatar avatar-active-stories" src={avatar} alt="avatar-img" />
      {!size && <figcaption className="comment-post-author">_procherk_</figcaption>}
    </div>
  );
};

export default StoriesUser;
