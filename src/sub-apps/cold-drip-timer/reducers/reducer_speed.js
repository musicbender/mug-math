import { CHANGE_TEMPO, CHANGE_RIPPLE, INIT_RIPPLE, RESET } from '../constants/index';

const initialState = {
    tempo: 40,
    color: "rgb(40,40,40)",
    ripple: 0,
    rippleIsInit: false,
}

export default function speed(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TEMPO:
            function getTheColor(value) {
                const color = value;
                const rgb = `rgb(${color}, ${color}, ${color})`;
                return (rgb);
            }

            var newColor = getTheColor(action.value);

            return {
                ...state,
                tempo: action.value,
                color: newColor
            };

        case CHANGE_RIPPLE:
            var newNum;
            if (state.ripple === 1) {
                newNum = 2;
            } else if (state.ripple === 2 || state.ripple === 0) {
                newNum = 3;
            } else if (state.ripple === 3) {
                newNum = 1;
            }
            return { ...state, ripple: newNum };

        case INIT_RIPPLE:
          return { ...state, rippleIsInit: true };

        case RESET:
          return { ...state, ripple: 0}

        default:
            return state;
    }
}
