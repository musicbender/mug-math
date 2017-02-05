import { MODE_CHANGE, BLOCK_CHANGE, NUM_CHANGE } from '../constants/index';

const initialState = {
  mode: "ratio",
  block: "coffee",
  coffee: 0,
  water: 0,
  ratio: 0
}

export default function subApp(state = initialState, action) {
  switch (action.type) {
    case MODE_CHANGE:
      return {...state, mode: action.mode};

    default:
      return state;
  }
}
