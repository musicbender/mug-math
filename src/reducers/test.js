import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import subApp from './reducer_app';

const rootReducer = combineReducers({
  subApp
});

export default rootReducer;
