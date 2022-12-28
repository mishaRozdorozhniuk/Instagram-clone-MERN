import * as actions from '../actionTypes.js';

export default (state = true, action) => {
  switch (action.type) {
    case actions.USER_IS_AUTH:
      // eslint-disable-next-line no-case-declarations
      let { payload } = action;
      return {
        ...state,
        isAuth: !payload
      };
    default:
      return state;
  }
};
