import { NUM_CHANGE } from '../constants/index';

const initialState = {
  coffee: 0,
  water: 0,
  ratio: 0
}

export default function values(state = initialState, action) {
  switch(action.type) {
    case NUM_CHANGE:

      function onlyOneDecimal(current) {
        return current.indexOf('.') > -1 ? false : true;
      }

      function deleteLast(current) {
        var newInput;

        if (current.length === 1 || !current.length) {
          newInput = 0;
        } else {
          let c = current.substr(0, current.length-1);
          newInput = c;
        }
        return newInput;
      }

      function numberMax(input, current) {
        const decimal = current.search(".");
        var max;

        switch(decimal) {
          case -1:
            max = 3;
            break;
          case 1:
            max = 4;
            break;
          case 2:
            max = 5;
            break;
          case 3:
            max = 6;
            break;
        }

      }

      function newNumber(input, current) {
        var output;

        switch (true) {
          case (!current && input !== "delete" && input !== "." && input !== "0"):
            output = input;
            break;
          case (!current && input === "."):
            output = `0${input}`;
            break;
          case (!current && input === "0"):
            output = current;
            break;
          case (input === "delete"):
            output = deleteLast(current);
            break;
          case (input === "." && onlyOneDecimal(current)):
            output = current + input;
            break;
          case (input === "." && !(onlyOneDecimal(current))):
            console.error('too many decibles');
            output = current;
            break;
          case (input !== "." && input !== "delete"):
            output = `${current}${input}`;
            break;
          default:
            console.error('output error to default');
            output = current;
        }

        return output;
      }


      switch (action.block) {
        case "coffee":
          return {...state, coffee: newNumber(action.input, state.coffee)}
        case "water":
          break;
        case "ratio":
          break;
        default:
          return state;
      }
    default:
      return state;
  }
}
