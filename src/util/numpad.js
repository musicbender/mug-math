import calculate from './calculate';

const numpad = {
  // check for multiple decimals
  onlyOneDecimal(current) {
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
  output: function(input, current, block) {
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
        const maximum = calculate.findMax(current, block);
        output = calculate.isNotMax.numpad(current, maximum) ? `${current}${input}` : current;
        break;
      default:
        console.error('output error to default');
        output = current;
    }

    return output;
  },

  //get final number result
  getNum: function(input, current, block) {
    return this.output(input, current)
  }
}

export default numpad;
