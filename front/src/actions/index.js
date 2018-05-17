import fetch from 'cross-fetch';

import actionTypes from './actionTypes';

export const changeVariable = newVariable => {
    return ({
        type: actionTypes.CHANGE_VARIABLE,
        variable: newVariable
    })
}

export const changeNRows = n_rows => {
    return ({
        type: actionTypes.CHANGE_N_ROWS,
        n_rows
    })
}

export const receiveVariableData = (variable, data) => {
    return ({
        type: actionTypes.RECEIVE_VARIABLE_DATA,
        variable,
        data,
        receivedAt: Date.now()
    })
}

export const requestingVariableData = (variable) => {
    return ({
        type: actionTypes.REQUESTING_VARIABLE_DATA,
        variable,
        requestedAt: Date.now()
    })
}

// Action creator handled by the Redux thunk middleware
// Role : fetch the data for a specific variable
export const fetchVariableData = (variable) => {
    // the middleware calls that function with store.dispatch and store.getState
    return (dispatch, getState) => {
        // check if the states already contains the variable's data
        let data = getState().data[variable];
        if (!data){
            // if not, fetch the data :
            dispatch(requestingVariableData(variable))
            return fetch(`/info/${variable}`)
            .then(data=>data.json())
            .then(data=>{
                dispatch(receiveVariableData(variable, data))
            })
        } else {
            return data
        }
    }
}