import { NUM_CHANGE } from '../constants/index';

const initialState = {
  coffee: 0,
  water: 0,
  ratio: 0
}

export default function values(state = initialState, action) {
  switch(action.type) {
    case NUM_CHANGE:

      function deleteLast(input) {
        var newInput;

        if (input.length === 1 || !input.length) {
          newInput = 0;
        } else {
          newInput = input.substr(0, input.length-1);
        }
        
        return newInput;
      }

      switch (action.block) {
        case "coffee":
          if (!state.coffee && action.input !== "delete") {
            return {...state, coffee: action.input}
          } else {
            if (action.input === "delete") {
              let input = deleteLast(state.coffee);
              return {...state, coffee: input}
            } else {
              return {...state, coffee: `${state.coffee}${action.input}`}
            }
          }
        case "water":
          if (!state.water && action.input !== "delete") {
            return {...state, water: action.input}
          } else {
            if (action.input === "delete") {
              let input = deleteLast(state.water);
              return {...state, water: input}
            } else {
              return {...state, water: `${state.water}${action.input}`}
            }
          }
        case "ratio":
          if (!state.ratio && action.input !== "delete") {
            return {...state, ratio: action.input}
          } else {
            if (action.input === "delete") {
              let input = deleteLast(state.ratio);
              return {...state, ratio: input}
            } else {
              return {...state, ratio: `${state.ratio}${action.input}`}
            }
          }
        default:
          return state;
      }
    default:
      return state;
  }
}
