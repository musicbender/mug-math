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
          if (!state.coffee) {
            return {...state, coffee: action.input}
          } else {
            return {...state, coffee: `${state.coffee}${action.input}`}
          }
        case "water":
          if (!state.water) {
            return {...state, water: action.input}
          } else {
            return {...state, water: `${state.water}${action.input}`}
          }
        case "ratio":
          if (!state.ratio) {
            return {...state, ratio: action.input}
          } else {
            return {...state, ratio: `${state.ratio}${action.input}`}
          }
        default:
          return state;
      }
    default:
      return state;
  }
}
