import { APP_OPEN, APP_CLOSE, AUDIO_MOUNT } from '../constants/index';

const initialState = {
  open: false,
  audioContext: null,
}

export default function subApp(state = initialState, action) {
  switch (action.type) {
    case APP_OPEN:
      return {...state, open: true};

    case APP_CLOSE:
      return {...state, open: false};

    case AUDIO_MOUNT:
        return { ...state, audioContext: action.payload, }

    default:
      return state;
  }
}
