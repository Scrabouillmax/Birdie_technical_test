import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoading: false,
    data: {}
}
// reducer handling the variables' data in the app state. 
export default (state = initialState, action) => {
    // when we receive new data :
    if(action.type === actionTypes.RECEIVE_VARIABLE_DATA){    
        return {
            // stop loading
            isLoading: false,
            data: {
                ...state.data,
                // save this data
                [action.variable]: action.data
            }
        }
    // when we start requesting new data :
    } else if(action.type === actionTypes.REQUESTING_VARIABLE_DATA){
        return {
            ...state,
            // start loading
            isLoading: true
        }
    } else {
        return state;
    }
}