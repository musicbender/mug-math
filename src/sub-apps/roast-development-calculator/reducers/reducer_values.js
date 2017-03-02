import {TIME_CHANGE, TIME_CLEAR} from '../constants';

const initialState = {
  fcTime: {value: null},
  totalTime: {value: null}
}

export default function values(state = initialState, action) {

  const {block, input} = action;


  switch(action.type) {
    case TIME_CHANGE: {
      return {...state, [block]: input }
    }
    default:
    return state;
  }
}
