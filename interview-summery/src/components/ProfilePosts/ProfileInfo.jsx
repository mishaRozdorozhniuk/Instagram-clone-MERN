import React from 'react';
import { Link } from 'react-router-dom';
import masterpiece from '../../components/Header/header-avatar.jpeg';
import ProfileFollowers from './ProfileFollowers';
import useScreenWidth from '../../hooks/useScreenWidth';
import { useSelector } from 'react-redux';

const ProfileInfo = () => {
  const { windowSize } = useScreenWidth();
  const settingsUserInfo = useSelector((state) => state.settings.settingsInfo);
  const theme = useSelector((state) => state.switchTheme.appTheme);

  const handleUpdateUserProfileInfo = (updatedValue, initialValue) => {
    return settingsUserInfo !== undefined ? updatedValue : initialValue;
  };

  return (
    <div data-theme={theme} className="prof__header">
      <div className="d">
        {windowSize <= 565 ? (
          <div className="avatar-small-scrin">
            <h1 className="prof__header-nick">
              {handleUpdateUserProfileInfo(settingsUserInfo?.userName, '__procherk__')}
            </h1>
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
          {windowSize > 565 && (
            <h1 className="prof__header-nick">
              {handleUpdateUserProfileInfo(settingsUserInfo?.userName, '__procherk__')}
            </h1>
          )}
          <Link to="/settings">
            <button className="prof__header-edit">Edit Profile</button>
          </Link>
          <div className="prof__header-settings">settings</div>
        </div>
        <ProfileFollowers />
        <div className="prof__subtitle">
          <span className="prof__subtitle-text">drug</span>
          <Link to="platitenalogi" className="prof__subtitle-link">
            {handleUpdateUserProfileInfo(settingsUserInfo?.bio, '@platitenalog')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
