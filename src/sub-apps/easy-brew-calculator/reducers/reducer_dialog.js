import { HELP_OPEN, HELP_CLOSE,VALUE_CHANGE, VALUE_INCREMENT, VALUE_DECREMENT } from '../constants/index';

const initialState = {
  help: false,
}

export default function dialog(state = initialState, action) {
  switch (action.type) {
      case HELP_OPEN:
          return { ...state, help: true, };

      case HELP_CLOSE:
          return { ...state, help: false, };

      default:
          return state;
  }
}
