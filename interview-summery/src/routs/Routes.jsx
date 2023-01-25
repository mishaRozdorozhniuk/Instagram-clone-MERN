import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfileCurrent from '../components/ProfilePosts/ProfileCurrent';
import Settings from '../pages/Settings/Settings';
import Header from '../components/Header/Header';
import Profile from '../pages/Profile/Profile';
import Login from '../pages/Login/Login';
import SavedPosts from '../pages/SavedPosts/SavedPosts';
import SloriesSliderPage from '../pages/StoriesSlider/StoriesSliderPage';
import { useSelector } from 'react-redux';
import App from '../App';

export const ReactRouters = () => {
  const user = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      {user.isAuth ? <Header /> : null}
      {user.isAuth ? (
        <Routes>
          <Route exact="true" path="/" element={<App />} />
          <Route exact="true" path="/profile" element={<Profile />} />
          <Route exact="true" path="/savedPosts" element={<SavedPosts />} />
          <Route exact="true" path="/profile/:profileName" element={<ProfileCurrent />} />
          <Route exact="true" path="/settings" element={<Settings />} />
          <Route exact="true" path="/stories" element={<SloriesSliderPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Login path="/login" replace />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};
