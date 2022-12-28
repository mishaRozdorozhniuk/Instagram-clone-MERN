import React from 'react';
import { Link } from 'react-router-dom';
import masterpiece from '../../components/Header/header-avatar.jpeg';
import ProfileFollowers from './ProfileFollowers';
import useScreenWidth from '../../hooks/useScreenWidth';

const ProfileInfo = () => {
  const { windowSize } = useScreenWidth();

  return (
    <div className="prof__header">
      <div className="d">
        {windowSize <= 565 ? (
          <div className="avatar-small-scrin">
            <h1 className="prof__header-nick">__procherk__</h1>
            <div className="prof__current">
              <img className="prof__current-avatar" src={masterpiece} alt="profile-avatar" />
            </div>
          </div>
        ) : (
          <div className="prof__current">
            <img className="prof__current-avatar" src={masterpiece} alt="profile-avatar" />
          </div>
        )}
      </div>
      <div className="prof__header-subs">
        <div className="prof__header-inner">
          {windowSize > 565 && <h1 className="prof__header-nick">__procherk__</h1>}
          <Link to="/settings">
            <button className="prof__header-edit">Edit Profile</button>
          </Link>
          <div className="prof__header-settings">settings</div>
        </div>
        <ProfileFollowers />
        <div className="prof__subtitle">
          <span className="prof__subtitle-text">drug</span>
          <Link to="platitenalogi" className="prof__subtitle-link">
            @platitenalogi
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
