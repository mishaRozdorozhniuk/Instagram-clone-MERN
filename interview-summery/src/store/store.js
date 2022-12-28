import { combineReducers, createStore } from 'redux';
import user from './reducers/userIsAuth.js';
import homePosts from './reducers/homePosts.js';

const singleReducer = combineReducers({
  homePosts,
  user
});

const store = createStore(
  singleReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
