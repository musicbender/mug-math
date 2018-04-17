import { combineReducers } from 'redux';
import subApp from './reducer_app';
import coldDripTimer from '../sub-apps/cold-drip-timer/reducers';
import brewCalc from '../sub-apps/brew-calculator/reducers';
import roastMoistureCalc from '../sub-apps/roast-moisture-calculator/reducers';
import roastDevCalc from '../sub-apps/roast-development-calculator/reducers';
import easyBrewCalc from '../sub-apps/easy-brew-calculator/reducers';
import roastColorTool from '../sub-apps/roast-color-tool/reducers';

const rootReducer = combineReducers({
  subApp,
  coldDripTimer,
  brewCalc,
  roastMoistureCalc,
  roastDevCalc,
  easyBrewCalc,
  roastColorTool,
});

export default rootReducer;
