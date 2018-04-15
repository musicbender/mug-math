import { HELP_OPEN, HELP_CLOSE, VALUE_CHANGE, VALUE_INCREMENT, VALUE_DECREMENT } from '../constants/index';

const initialState = {
  strength: 3,
  volume: 4,
  water: 0,
  coffee: 0,
}

export default function value(state = initialState, action) {
  switch (action.type) {
    case VALUE_CHANGE: {
      const { block, input } = action;
      return { ...state, [block]: input };
    }
    case VALUE_INCREMENT: {
      const { block } = action;
      const max = block === "strength" ? 5 : 16;
      const currentValue = state[block];
      const newValue = currentValue < max ? currentValue + 1 : currentValue;
      return { ...state, [block]: newValue };
    }
    case VALUE_DECREMENT: {
      const { block } = action;
      const min = 1;
      const currentValue = state[block];
      const newValue = currentValue > min ? currentValue - 1 : currentValue;
      return { ...state, [block]: newValue };
    }
    default:
        return state;
  }
}
