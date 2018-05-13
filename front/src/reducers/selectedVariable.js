import actionTypes from '../actions/actionTypes';

// reducer handling the selected variable in the app state
export default (state = null, action) => {
    if(action.type === actionTypes.CHANGE_VARIABLE){
        return action.variable
    } else {
        return state;
    }
}