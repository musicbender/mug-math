import { combineReducers } from 'redux';
import subApp from './reducer_app';
import coldDripTimer from '../sub-apps/cold-drip-timer/reducers/index';
import brewCalc from '../sub-apps/brew-calculator/reducers/index';
import roastMoistureCalc from '../sub-apps/roast-moisture-calculator/reducers/index'
import roastDevCalc from '../sub-apps/roast-development-calculator/reducers/index'

const rootReducer = combineReducers({
  subApp,
  coldDripTimer,
  brewCalc,
  roastMoistureCalc,
  roastDevCalc
});

export default rootReducer;
