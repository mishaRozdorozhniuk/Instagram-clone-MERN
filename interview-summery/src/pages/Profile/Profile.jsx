import React, { useState } from 'react';
import CurrentStories from '../../components/CurrentStories/CurrentStories';
import ProfilePosts from '../../components/ProfilePosts/ProfilePosts';
import currentStoriesPhoto1 from '../../icons/profPost1.jpeg';
import currentStoriesPhoto2 from '../../icons/profPost4.jpeg';
import currentStoriesPhoto3 from '../../icons/profPost6.jpeg';
import ProfileInfo from '../../components/ProfilePosts/ProfileInfo';
import ProfileSaved from '../../components/ProfilePosts/ProfileSaved';
import ProfileTarget from '../../components/ProfilePosts/ProfileTarget';
import Tabs from '../../components/Tab/Tabs';
import Tab from '../../components/Tab/Tab';
import './Profile.scss';

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleCurrentEditProfileTab = (selectedTab) => {
    switch (selectedTab) {
      case 0:
        return <ProfilePosts />;
      case 1:
        return <ProfileSaved />;
      case 2:
        return <ProfileTarget />;
      default:
        return;
    }
  };

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
        <Tabs
          btnClass="profile-btn"
          itemClass="profile-item"
          className="profile-list"
          setSelectedTab={setSelectedTab}
        >
          <Tab title="posts">posts</Tab>
          <Tab title="saved">saved</Tab>
          <Tab title="tagged">tagged</Tab>
        </Tabs>
        {handleCurrentEditProfileTab(selectedTab)}
      </div>
    </div>
  );
};
export default Profile;
