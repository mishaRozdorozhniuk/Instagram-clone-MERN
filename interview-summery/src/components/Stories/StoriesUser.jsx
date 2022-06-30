import React from 'react';
import avatar from './default-author.png';
import './StoriesUser.scss';

const StoriesUser = ({ size }) => {
  return (
    <div className="user-wrapper" style={{ width: size ? '43px' : null }}>
      <img className="avatar avatar-active-stories" src={avatar} alt="avatar-img" />
      {!size && <figcaption>_procherk_</figcaption>}
    </div>
  );
};

export default StoriesUser;
