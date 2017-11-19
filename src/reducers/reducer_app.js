import { APP_OPEN, APP_CLOSE, AUDIO_MOUNT, MENU_LOADED, INFO_MENU_TOGGLE } from '../constants/index';

const initialState = {
  open: false,
  audioContext: null,
  loaded: false,
  contentBox: true,
  infoMenuOpen: false
}

export default function subApp(state = initialState, action) {
  switch (action.type) {
    case APP_OPEN:
      return {...state, open: true,};

    case APP_CLOSE:
      return {...state, open: false,};

    case AUDIO_MOUNT:
      return { ...state, audioContext: action.payload, }

    case MENU_LOADED:
      return { ...state, loaded: true, }

    case INFO_MENU_TOGGLE:
      return { ...state, infoMenuOpen: !state.infoMenuOpen, }

    default:
      return state;
  }
}
