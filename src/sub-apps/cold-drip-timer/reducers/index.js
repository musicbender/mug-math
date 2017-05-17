import { combineReducers } from 'redux';
import sound from './reducer_sound';
import speed from './reducer_speed';
import sweetspot from './reducer_sweetspot';
import dialog from './reducer_dialog';

const rootReducer = combineReducers({
  sound,
  speed,
  sweetspot,
  dialog,
});

export default rootReducer;
