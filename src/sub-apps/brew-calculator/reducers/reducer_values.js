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
        let a = current.toString();
        console.log(a.indexOf('.') > -1 ? false : true);
        return a.indexOf('.') > -1 ? false : true;
      }

      function deleteLast(current) {
        var newInput;
        var c = current.toString();

        if (c.length === 1 || !c.length) {
          newInput = 0;
        } else {
          c = c.substr(0, c.length-1);
          newInput = c;
        }
        return newInput;
      }

      function newNumber(input, current) {
        var output;

        switch (true) {
          case (!current && input !== "delete" && input !== "."):
            output = input;
            break;
          case (input === "delete"):
            output = deleteLast(current);
            break;
          case (input === "." && onlyOneDecimal(current)):
            let a = input.toString();
            output = current + input;
            break;
          case (input === "1"):
          case (input === "2"):
          case (input === "3"):
          case (input === "4"):
          case (input === "5"):
          case (input === "6"):
          case (input === "7"):
          case (input === "8"):
          case (input === "9"):
          case (input === "0"):
            output = `${current}${input}`;
            break;
          default:
            console.error('output error to default');
            output = 0;
        }
        console.log(typeof output);
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
