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

  result: function(num, mode, block, state) {
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
