import { NUM_CHANGE } from '../constants/index';

const initialState = {
  coffee: 0,
  water: 0,
  ratio: 0
}

export default function values(state = initialState, action) {
  switch(action.type) {
    case NUM_CHANGE:
      switch (action.block) {
        case "coffee":
          return {...state, coffee: action.input}
        case "water":
          return{...state, water: action.input}
        case "ratio":
          return {...state, ratio: action.input}
        default:
          return state;
      }
    default:
      return state;
  }
}
