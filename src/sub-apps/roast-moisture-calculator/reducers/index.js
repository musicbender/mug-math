import { combineReducers } from 'redux';
import navigation from './reducer_navigation';
import values from './reducer_values';
import dialog from './reducer_dialog';

const rootReducer = combineReducers({
  navigation,
  values,
  dialog,
});

export default rootReducer;
