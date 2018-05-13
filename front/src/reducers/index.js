import { combineReducers } from 'redux';

import selectedVariable from './selectedVariable';
import selectedNRows from './selectedNRows';
import data from './data';

export default combineReducers({
    selectedVariable,
    selectedNRows,
    data
  })