import { SOUND_ON, SOUND_OFF, AUDIO_MOUNT } from '../constants/index';

const initialState = {
    playing: false,
    audioContext: null,
}

export default function sound(state = initialState, action) {
    switch (action.type) {
        case AUDIO_MOUNT:
            return { ...state, audioContext: action.payload, }
        case SOUND_ON:
            return { ...state, playing: true, };
        case SOUND_OFF:
            return { ...state, playing: false, };
        ;
        default:
            return state;
    }
}
