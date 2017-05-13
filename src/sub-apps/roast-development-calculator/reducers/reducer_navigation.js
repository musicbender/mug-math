import { BLOCK_CHANGE } from '../constants/index';

const initialState = {
  block: "fcTime"
}

export default function navigation(state = initialState, action) {
  switch (action.type) {
    case BLOCK_CHANGE:
      return {...state, block: action.block};

    default:
      return state;
  }
}
