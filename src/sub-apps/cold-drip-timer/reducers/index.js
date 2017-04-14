import { combineReducers } from 'redux';
import sound from './reducer_sound';
import speed from './reducer_speed';
import sweetspot from './reducer_sweetspot';

const rootReducer = combineReducers({
  sound,
  speed,
  sweetspot
});

export default rootReducer;
