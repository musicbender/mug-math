import { NUM_CHANGE, NUM_INCREMENT, NUM_DECREMENT, NUM_CLEAR } from '../constants/index';
import calculate from '../util/calculate';

const initialState = {
  coffee: 0,
  water: 0,
  ratio: 0
}

export default function values(state = initialState, action) {
  switch(action.type) {
    case NUM_CHANGE: {

      const newNum = {
        //check for multiple decimals
        onlyOneDecimal: function(current) {
          return current.indexOf('.') > -1 ? false : true;
        },

        //backspace
        deleteLast: function(current) {
          var newInput;

          if (current.length === 1 || !current.length) {
            newInput = 0;
          } else {
            let c = current.substr(0, current.length-1);
            newInput = c;
          }
          return newInput;
        },

        //what our number will be based on input and current number
        output: function(input, current) {
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
              output = this.deleteLast(current);
              break;
            case (input === "." && this.onlyOneDecimal(current)):
              output = current + input;
              break;
            case (input === "." && !(this.onlyOneDecimal(current))):
              console.error('too many decibles');
              output = current;
              break;
            case (input !== "." && input !== "delete"):
              const maximum = calculate.findMax(current, action.block);
              output = calculate.isNotMax.numpad(current, maximum) ? `${current}${input}` : current;
              break;
            default:
              console.error('output error to default');
              output = current;
          }

          return output;
        },

        //get final number result
        getNum: function() {
          return this.output(action.input, state[action.block])
        }
      }

      const output = calculate.result(newNum.getNum(), action, state);
      return {...state, ...output}
    }

    case NUM_INCREMENT: {
      const blk = action.block;
      const current = state[blk];

      let value = calculate.getValue(Number(current) + 1, current, blk);
      return {...state, ...calculate.result(value.toString(), action, state)};
    }

    case NUM_DECREMENT: {
      const blk = action.block;
      const current = state[blk];

      let value = calculate.getValue(Number(current) - 1, current, blk);
      return {...state, ...calculate.result(value.toString(), action, state)};
    }

    case NUM_CLEAR:
      return {
        ...state,
        coffee: 0,
        water: 0,
        ratio: 0
      }

    default:
      return state;
  }
}
