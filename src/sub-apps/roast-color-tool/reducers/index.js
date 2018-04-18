import { combineReducers } from 'redux';
import dialog from './reducer_dialog';
import sweetspot from './reducer_sweetspot';
import color from './reducer_color';

const rootReducer = combineReducers({
  dialog,
  sweetspot,
  color,
});

export default rootReducer;
