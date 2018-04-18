import { COLOR_CHANGE, COLOR_INCREMENT, COLOR_DECREMENT } from '../constants/index';
import colors from '../constants/colors.json';

const initialState = {
    color: 0,
}

export default function dialog(state = initialState, action) {
  switch (action.type) {
    case COLOR_CHANGE: {
      return { ...state, color: action.value }
    }
    case COLOR_INCREMENT: {
      const max = Object.keys(colors).length;
      const newValue = state.color < max ? state.color + 1 : state.color;
      return { ...state, color: newValue };
    }
    case COLOR_DECREMENT: {
      const min = 0;
      const newValue = state.color > min ? state.color - 1 : state.color;
      return { ...state, color: newValue };
    }
    default:
      return state;
  }
}
