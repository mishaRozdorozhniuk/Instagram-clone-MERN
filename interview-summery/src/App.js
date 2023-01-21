import React from 'react';
import Home from './pages/Home/Home.jsx';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector((state) => state.switchTheme.appTheme);
  document.querySelector('.body').setAttribute('data-theme', theme);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
