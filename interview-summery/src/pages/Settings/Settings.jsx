import React, { useState } from 'react';
import ChangePassword from '../../components/ChangePassword/ChangePassword';
import EditForm from '../../components/EditForm/EditForm';
import Tab from '../../components/Tab/Tab';
import Tabs from '../../components/Tab/Tabs';
import './Settings.scss';
import { useSelector } from 'react-redux';

const EditProfile = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const theme = useSelector((state) => state.switchTheme.appTheme);

  const handleCurrentEditProfileTab = (selectedTab) => {
    switch (selectedTab) {
      case 0:
        return <EditForm />;
      case 1:
        return <ChangePassword />;
      default:
        return;
    }
  };

  return (
    <section data-theme={theme} className="edit-prof container">
      <aside className="edit-prof__aside">
        <Tabs
          btnClass="tab-btn"
          itemClass="tab-item"
          className="tab-list"
          setSelectedTab={setSelectedTab}>
          <Tab title="Edit Profile">Edit Profile</Tab>
          <Tab title="Change Password">Change Password</Tab>
          <Tab title="Apps and websites">Apps and websites</Tab>
          <Tab title="Email notifications">Email notifications</Tab>
          <Tab title="Push notifications">Push notifications</Tab>
          <Tab title="Manage contacts">Manage contacts</Tab>
          <Tab title="Privacy and security">Privacy and security</Tab>
          <Tab title="Login activity">Login activity</Tab>
          <Tab title="Emails from Instagram">Emails from Instagram</Tab>
          <Tab title="Help">Help</Tab>
        </Tabs>
      </aside>
      {handleCurrentEditProfileTab(selectedTab)}
    </section>
  );
};

export default EditProfile;
