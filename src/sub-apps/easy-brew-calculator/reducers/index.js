import { combineReducers } from 'redux';
import dialog from './reducer_dialog';

const rootReducer = combineReducers({
  dialog,
});

export default rootReducer;
