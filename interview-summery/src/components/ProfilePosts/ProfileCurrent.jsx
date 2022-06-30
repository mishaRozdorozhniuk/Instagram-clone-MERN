import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CurrentStories from '../../components/CurrentStories/CurrentStories';
import ProfilePosts from '../../components/ProfilePosts/ProfilePosts';
import currentStoriesPhoto1 from '../../icons/profPost1.jpeg';
import currentStoriesPhoto2 from '../../icons/profPost4.jpeg';
import currentStoriesPhoto3 from '../../icons/profPost6.jpeg';
import ProfileInfo from '../../components/ProfilePosts/ProfileInfo';
import '../../pages/Profile/Profile.scss';

export default function ProfileCurrent() {
  const [profileData, setProfileData] = useState([]);
  const { profileName } = useParams();
  const currentProfileUser = profileData.find((profile) => profile.id === profileName);

  console.log(currentProfileUser);

  useEffect(() => {
    fetch(`http://localhost:3003/profile/${profileName}`)
      .then((res) => res.json())
      .then((data) => setProfileData(data));
  }, []);

  return (
    <div className="prof">
      <div className="container">
        <ProfileInfo currentProfileUser={currentProfileUser} />
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
}
