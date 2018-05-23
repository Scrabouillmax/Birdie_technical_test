import fetch from 'cross-fetch';

import actionTypes from './actionTypes';

export const changeVariable = newVariable => ({
  type: actionTypes.CHANGE_VARIABLE,
  variable: newVariable,
});

export const changeNRows = nRows => ({
  type: actionTypes.CHANGE_N_ROWS,
  nRows,
});

export const receiveVariableData = (err, variable, data) => ({
  type: actionTypes.RECEIVE_VARIABLE_DATA,
  err,
  variable,
  data,
  receivedAt: Date.now(),
});

export const requestingVariableData = variable => ({
  type: actionTypes.REQUESTING_VARIABLE_DATA,
  variable,
  requestedAt: Date.now(),
});

// Action creator handled by the Redux thunk middleware
// Role : fetch the data for a specific variable
export const fetchVariableData = variable =>
  // the middleware calls that function with store.dispatch and store.getState
  (dispatch, getState) => {
    // check if the states already contains the variable's data
    const data = getState().data[variable];
    if (!data) {
      // if not, fetch the data :
      dispatch(requestingVariableData(variable));
      return fetch(`/info/${variable}`)
        .then(res => res.json())
        .then(
          (res) => {
            dispatch(receiveVariableData(null, variable, res));
          },
          (err) => {
            dispatch(receiveVariableData(err, variable, null));
          },
        );
    }
    return data;
  };

