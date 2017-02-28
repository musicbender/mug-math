import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import subApp from './reducer_app';
import sound from '../sub-apps/cold-drip-timer/reducers/reducer_sound';
import speed from '../sub-apps/cold-drip-timer/reducers/reducer_speed';
import range from '../sub-apps/cold-drip-timer/reducers/reducer_range';
import brewCalc from '../sub-apps/brew-calculator/reducers/index';
import roastMoistureCalc from '../sub-apps/roast-moisture-calculator/reducers/index'
import roastDevCalc from '../sub-apps/roast-development-calculator/reducers/index'

const rootReducer = combineReducers({
  routing: routerReducer,
  subApp,
  dripTimer_sound: sound,
  dripTimer_speed: speed,
  dripTimer_range: range,
  brewCalc,
  roastMoistureCalc,
  roastDevCalc
});

export default rootReducer;
