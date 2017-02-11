import { MODE_CHANGE, BLOCK_CHANGE } from '../constants/index';

const initialState = {
  mode: "findRatio",
  block: "coffee"
}

export default function navigation(state = initialState, action) {
  switch (action.type) {
    case MODE_CHANGE:
      return {...state, mode: action.mode};

    case BLOCK_CHANGE:
      return {...state, block: action.block};

    default:
      return state;
  }
}
