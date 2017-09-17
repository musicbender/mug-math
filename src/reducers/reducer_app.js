import { APP_OPEN, APP_CLOSE, AUDIO_MOUNT, MENU_LOADED } from '../constants/index';

const initialState = {
  open: false,
  audioContext: null,
  loaded: false,
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

    default:
      return state;
  }
}
