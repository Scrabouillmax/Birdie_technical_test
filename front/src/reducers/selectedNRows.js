import actionTypes from '../actions/actionTypes';

// reducer handling the selected number of rows in the app state.
export default (state = 5, action) => {
  if (action.type === actionTypes.CHANGE_N_ROWS) {
    return action.nRows;
  }
  return state;
};
