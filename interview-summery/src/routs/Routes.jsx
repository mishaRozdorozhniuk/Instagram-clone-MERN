import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Header from '../components/Header/Header';
import ProfileCurrent from '../components/ProfilePosts/ProfileCurrent';
import { AuthContext } from '../contex';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';

export const ReactRouters = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Header />
      {isAuth ? (
        <Routes>
          <Route exact="true" path="/" element={<App />} />
          <Route exact="true" path="/profile" element={<Profile />} />
          <Route exact="true" path="/profile/:profileName" element={<ProfileCurrent />} />
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
