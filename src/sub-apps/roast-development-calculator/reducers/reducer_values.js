import {TIME_CHANGE, TIME_CLEAR} from '../constants';

const initialState = {
  fcTime: '0:00',
  totalTime: '0:00'
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
