import { DIALOG_OPEN, DIALOG_CLOSE, HELP_OPEN, HELP_CLOSE } from '../constants/index';

const initialState = {
    dialog: false,
    help: false,
}

export default function dialog(state = initialState, action) {
  switch (action.type) {
      case DIALOG_OPEN:
          return { ...state, dialog: true, };

      case DIALOG_CLOSE:
          return { ...state, dialog: false, };

      case HELP_OPEN:
          return { ...state, help: true, };

      case HELP_CLOSE:
          return { ...state, help: false, };

      default:
          return state;
  }
}
