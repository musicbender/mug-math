import { NUM_CHANGE, NUM_CLEAR } from '../constants/index';

const initialState = {
  coffee: 0,
  water: 0,
  ratio: 0
}

export default function values(state = initialState, action) {
  switch(action.type) {
    case NUM_CHANGE:

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

        //find our max number limit
        findMax: function(current) {
          const decimal = current.indexOf(".");
          var max;
          var b = action.block;

          switch(decimal) {
            case -1:
              max = b === "water" ? 4 : 3;
              break;
            case 1:
              max = 3;
              break;
            case 2:
              max = 4;
              break;
            case 3:
              max = 5;
              break;
            case 4:
              max = 6;
              break;
          }

          return max;
        },

        //check if number is maxed out
        isNotMax: function(current) {
          return current.length >= this.findMax(current) ? false : true;
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
              output = this.isNotMax(current) ? `${current}${input}` : current;
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

      const calculate = {
        findRatio: function(c, w) {
          let sum = Math.round((parseFloat(w) / parseFloat(c)) * 10) / 10;

          return sum !== Infinity && !isNaN(sum) ? sum : "0";
        },

        findWater: function(c, r) {
          const sum = Math.round(c * r);

          return sum !== Infinity && !isNaN(sum) ? sum : "0";
        },

        findCoffee: function(w, r) {
          const sum = Math.round((parseFloat(w) / parseFloat(r)) * 10) / 10;

          return sum !== Infinity && !isNaN(sum) ? sum : "0";
          return;
        },

        result: function() {
          switch (action.mode) {
            case "findRatio": {
              var coffee, water;

              if (action.block === "coffee") {
                coffee = newNum.getNum();
                water = state.water;
              } else if ( action.block === "water") {
                coffee = state.coffee;
                water = newNum.getNum();
              }

              const result = {
                [action.block]: newNum.getNum(),
                ratio: this.findRatio(coffee, water)
              }

              return result;
            }

            case "findWater": {
              var coffee, ratio;

              if (action.block === "coffee") {
                coffee = newNum.getNum();
                ratio = state.ratio;
              } else if ( action.block === "ratio") {
                coffee = state.coffee;
                ratio = newNum.getNum();
              }

              const result = {
                [action.block]: newNum.getNum(),
                water: this.findWater(coffee, ratio)
              }

              return result;
            }

            case "findCoffee": {
              var water, ratio;

              if (action.block === "water") {
                water = newNum.getNum();
                ratio = state.ratio;
              } else if ( action.block === "ratio") {
                water = state.water;
                ratio = newNum.getNum();
              }

              const result = {
                [action.block]: newNum.getNum(),
                coffee: this.findCoffee(water, ratio)
              }

              return result;
            }
          }
        }
      }

      const output = calculate.result();
      return {...state, ...output}

    case NUM_CLEAR:
      return {
        ...state,
        coffee: 0,
        water: 0,
        ratio: 0
      }

    default:
    console.log("NUM_CHANGE: default");
      return state;
  }
}
