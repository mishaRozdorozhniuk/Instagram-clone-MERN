import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { ReactRouters } from './routs/Routes';
import { AuthContext } from '../src/contex/index.js';
import App from './App';
import './index.css';

// import { Provider } from 'react-redux';

// // import store from './redux/store';

// import { createStore } from 'redux';

// const reducer = (state, action) => {
//   console.log(state, 'state');
//   switch (action.type) {
//     case 'ADD':
//       state = state + action.payload;
//       console.log(state, 'state');
//     case 'SUBSTRACT':
//       state = state - action.payload;
//   }
//   return state;
// };

// const store = createStore(reducer, 1);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch({
//   type: 'ADD',
//   payload: 10,
// });

const Main = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [currentPostId, setCurrentPostId] = useState(null);

  return (
    <AuthContext.Provider value={{ currentPostId, setCurrentPostId, isAuth, setIsAuth }}>
      <ReactRouters>
        <App />
      </ReactRouters>
    </AuthContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);

reportWebVitals();
