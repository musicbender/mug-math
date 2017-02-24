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

  findMax: function(current, block) {
    const decimal = current.indexOf(".");
    var max;

    switch(decimal) {
      case -1:
        max = block === "water" ? 4 : 3;
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
  isNotMax: {
    numpad: function(current, max) {
      return current.length >= max ? false : true;
    },
    pm: function(value, block) {
      if (block === "water") {
        return value >= 0 && value < 10000;
      } else {
        return value >= 0 && value < 1000;
      }
    }
  },

  isInt: function(n) {
    return n % 1 === 0;
  },

  getValue: function(n, c, b) {
    let value = this.isInt(n) ? n : n.toFixed(1);
    return this.isNotMax.pm(value, b) ? value : c;
  },

  result: function(num, action, state) {
    const {mode, block} = action;

    switch (mode) {
      case "findRatio": {
        var coffee, water;

        if (block === "coffee") {
          coffee = num;
          water = state.water;
        } else if ( block === "water") {
          coffee = state.coffee;
          water = num;
        }

        const result = {
          [block]: num,
          ratio: this.findRatio(coffee, water)
        }

        return result;
      }

      case "findWater": {
        var coffee, ratio;

        if (block === "coffee") {
          coffee = num;
          ratio = state.ratio;
        } else if (block === "ratio") {
          coffee = state.coffee;
          ratio = num;
        }

        const result = {
          [block]: num,
          water: this.findWater(coffee, ratio)
        }

        return result;
      }

      case "findCoffee": {
        var water, ratio;

        if (block === "water") {
          water = num;
          ratio = state.ratio;
        } else if (block === "ratio") {
          water = state.water;
          ratio = num;
        }

        const result = {
          [block]: num,
          coffee: this.findCoffee(water, ratio)
        }

        return result;
      }
    }
  }
}

export default calculate;
