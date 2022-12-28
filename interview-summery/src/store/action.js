import * as actions from './actionTypes.js';

export const userIsAuth = (isAuth) => ({
  type: actions.USER_IS_AUTH,
  payload: isAuth
});

export let currentPostAction = (id) => ({
  type: actions.CURRENT_POST,
  payload: id
});

export const currentProfilePost = (postData, id) => ({
  type: actions.CURRENT_PROFILE_POST,
  payload: postData,
  id
});
