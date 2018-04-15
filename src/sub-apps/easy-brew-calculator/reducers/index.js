import { combineReducers } from 'redux';
import dialog from './reducer_dialog';
import value from './reducer_value';

const rootReducer = combineReducers({
  dialog,
  value,
});

export default rootReducer;
