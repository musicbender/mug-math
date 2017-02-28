import { combineReducers } from 'redux';
import navigation from './reducer_navigation';
import values from './reducer_values';

const rootReducer = combineReducers({
  navigation,
  values
});

export default rootReducer;
