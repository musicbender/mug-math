import { combineReducers } from 'redux';
import dialog from './reducer_dialog';
import sweetspot from './reducer_sweetspot';

const rootReducer = combineReducers({
  dialog,
  sweetspot,
});

export default rootReducer;
