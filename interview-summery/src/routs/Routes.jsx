import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContext } from '../contex';
import ProfileCurrent from '../components/ProfilePosts/ProfileCurrent';
import Settings from '../pages/Settings/Settings';
import Header from '../components/Header/Header';
import Profile from '../pages/Profile/Profile';
import Login from '../pages/Login/Login';
import SavedPosts from '../pages/SavedPosts/SavedPosts';
import App from '../App';

export const ReactRouters = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Header />
      {isAuth ? (
        <Routes>
          <Route exact="true" path="/" element={<App />} />
          <Route exact="true" path="/profile" element={<Profile />} />
          <Route exact="true" path="/savedPosts" element={<SavedPosts />} />
          <Route exact="true" path="/profile/:profileName" element={<ProfileCurrent />} />
          <Route exact="true" path="/settings" element={<Settings />} />
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
