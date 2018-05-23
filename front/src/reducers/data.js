import actionTypes from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  error: false,
};
// reducer handling the variables' data in the app state.
export default (state = initialState, action) => {
  // when we receive new data :
  if (action.type === actionTypes.RECEIVE_VARIABLE_DATA) {
    if (action.err) {
      return {
        ...state,
        // stop loading
        isLoading: false,
        // notify error
        error: true,
      };
    }
    return {
      ...state,
      // stop loading
      isLoading: false,
      error: false,
      // save this data
      [action.variable]: action.data,
    };
    // when we start requesting new data :
  } else if (action.type === actionTypes.REQUESTING_VARIABLE_DATA) {
    return {
      ...state,
      // start loading
      isLoading: true,
    };
  }
  return state;
};
