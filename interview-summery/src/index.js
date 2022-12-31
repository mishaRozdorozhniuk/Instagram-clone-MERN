import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ReactRouters } from './routs/Routes.jsx';
import { AuthContext } from '../src/contex/index.js';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import App from './App.js';
import './index.css';

const Main = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [currentPostId, setCurrentPostId] = useState(null);

  return (
    <Provider store={store}>
      <AuthContext.Provider value={{ currentPostId, setCurrentPostId, isAuth, setIsAuth }}>
        <ReactRouters>
          <App />
        </ReactRouters>
      </AuthContext.Provider>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
