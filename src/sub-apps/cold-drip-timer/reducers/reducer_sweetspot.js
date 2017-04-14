import { SWEETSPOT_ON, SWEETSPOT_OFF } from '../constants/index';

const initialState = {
    sweetspot: false
}

export default function sweetspot(state = initialState, action) {
  switch (action.type) {
      case SWEETSPOT_ON:
          return { ...state, sweetspot: true };

      case SWEETSPOT_OFF:
          return { ...state, sweetspot: false };

      default:
          return state;
  }
}
