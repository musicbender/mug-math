import { combineReducers } from 'redux';
import sound from '../apps/cold-drip-timer/reducers/reducer_sound';
import speed from '../apps/cold-drip-timer/reducers/reducer_speed';
import range from '../apps/cold-drip-timer/reducers/reducer_range';

const rootReducer = combineReducers({
  dripTimer_sound: sound,
  dripTimer_speed: speed,
  dripTimer_range: range
});

export default rootReducer;
