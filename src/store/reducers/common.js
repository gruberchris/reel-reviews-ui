import * as CommonActions from '../actions/common';

const INITIAL_STATE = {
  isLoading: null
};

const common = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CommonActions.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    default:
      return state;
  }
};

export default common;
