import { DIALOG_OPEN, DIALOG_CLOSE, HELP_OPEN, HELP_CLOSE } from '../constants/index';

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
