import React from 'react';
import CurrentStories from '../../components/CurrentStories/CurrentStories';
import ProfilePosts from '../../components/ProfilePosts/ProfilePosts';
import currentStoriesPhoto1 from '../../icons/profPost1.jpeg';
import currentStoriesPhoto2 from '../../icons/profPost4.jpeg';
import currentStoriesPhoto3 from '../../icons/profPost6.jpeg';
import ProfileInfo from '../../components/ProfilePosts/ProfileInfo';
import './Profile.scss';

const Profile = () => {
  return (
    <div className="prof">
      <div className="container">
        <ProfileInfo />
        <div className="prof__stories">
          <CurrentStories
            currentStoriesPhoto={currentStoriesPhoto1}
            acticeStoriesText="my"
            activeStories={false}
          />
          <CurrentStories
            currentStoriesPhoto={currentStoriesPhoto2}
            acticeStoriesText="лауд"
            activeStories={false}
          />
          <CurrentStories
            currentStoriesPhoto={currentStoriesPhoto3}
            acticeStoriesText="💗"
            activeStories={false}
          />
        </div>
        <ProfilePosts />
      </div>
    </div>
  );
};
export default Profile;
