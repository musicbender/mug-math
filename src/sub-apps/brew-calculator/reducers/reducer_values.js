import { NUM_CHANGE } from '../constants/index';

const initialState = {
  coffee: 0,
  water: 0,
  ratio: 0
}

export default function values(state = initialState, action) {
  switch(action.type) {
    case NUM_CHANGE:
      const newNum = {
        onlyOneDecimal: function(current) {
          return current.indexOf('.') > -1 ? false : true;
        },

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

        findMax: function(current) {
          const decimal = current.indexOf(".");
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

          return max;
        },

        isNotMax: function(current) {
          return current.length >= this.findMax(current) ? false : true;
        },

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
              output = this.isNotMax(current) ? `${current}${input}` : current;
              break;
            default:
              console.error('output error to default');
              output = current;
          }

          return output;
        },

        num: this.output(action.input, state[action.block])
      }

      const calculate = {
        findRatio: function(coffee, water) {
          return Math.round((parseFloat(water) / parseFloat(coffee)) * 10) / 10
        },

        findWater: function() {
          return;
        },

        findCoffee: function() {
          return;
        },

        getConstant: function(a, b) {
          return;
        },

        result: function() {
          switch (action.mode) {
            case "findRatio": {
              var coffee, water;

              if (action.block === "coffee") {
                coffee = newNum.num;
                water = state.water;
              } else if ( action.block === "water") {
                coffee = state.coffee;
                water = newNum.num;
              }

              var result = {
                [action.block]: newNum.num,
                ratio: this.findRatio(coffee, water)
              }

              console.log(result);

              return result;
            }

            case "findWater": {
              break;
            }

            case "findCoffee": {
              break;
            }
          }
        }
      }

      const output = calculate.result()
      return {...state, ...output}

    default:
      return state;

  }
}

// switch (action.block) {
//   case "coffee":
//     return {...state, coffee: newNum.output(action.input, state[action.block])}
//   case "water":
//     return {...state, water: newNum.output(action.input, state[action.block])}
//   case "ratio":
//     return {...state, ratio: newNum.output(action.input, state[action.block])}
//   default:
//     return state;
// }
