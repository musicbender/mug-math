const calculate = {
    findRatio: function(c, w) {
      let sum = Math.round((parseFloat(w) / parseFloat(c)) * 10) / 10;
      return isFinite(sum) ? sum : "0";
    },

    findWater: function(c, r) {
      const sum = Math.round(c * r);
      return isFinite(sum) ? sum : "0";
    },

    findCoffee: function(w, r) {
      const sum = Math.round((parseFloat(w) / parseFloat(r)) * 10) / 10;
      return isFinite(sum) ? sum : "0";

    },
    findMoistureLoss: function (pre, post) {
        let sum = Math.round((100 - ((post / pre) * 100)) * 10) / 10;
        return isFinite(sum) ? sum : "0";
    },

    findMax: function (current, block) {
        const decimal = current.indexOf(".");
        var max;

        switch (decimal) {
            case - 1:
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
        numpad: function (current, max) {
            return current.length >= max ? false : true;
        },
        pm: function (value, block) {
            if (block === "water") {
                return value >= 0 && value < 10000;
            } else {
                return value >= 0 && value < 1000;
            }
        }
    },

    isInt: function (n) {
        return n % 1 === 0;
    },

    getValue: function (n, c, b) {
        let value = this.isInt(n) ? n : n.toFixed(1);
        return this.isNotMax.pm(value, b) ? value : c;
    },

    result: function (ob) {
        switch(ob.app) {
            case "moistureCalc": {
                var pre, post;

                if (ob.block === "preWeight") {
                    pre = ob.value, post = ob.state.postWeight;
                } else if (ob.block === "postWeight") {
                    pre = ob.state.preWeight, post = ob.value;
                } else {
                  console.error('block not defined');
                }

                const result = {
                    [ob.block]: ob.value,
                    moistureLoss: this.findMoistureLoss(pre, post)
                }

                return result;
            }
            case "brewCalc": {
                switch (ob.mode) {
                  case "findRatio": {
                    var coffee, water;

                    if (ob.block === "coffee") {
                      coffee = ob.value, water = ob.state.water;
                    } else if ( ob.block === "water") {
                      coffee = ob.state.coffee, water = ob.value;
                    }

                    const result = {
                      [ob.block]: ob.value,
                      ratio: this.findRatio(coffee, water)
                    }

                    return result;
                  }

                  case "findWater": {
                    var coffee, ratio;

                    if (ob.block === "coffee") {
                      coffee = ob.value;
                      ratio = ob.state.ratio;
                    } else if (ob.block === "ratio") {
                      coffee = ob.state.coffee;
                      ratio = ob.value;
                    }

                    const result = {
                      [ob.block]: ob.value,
                      water: this.findWater(coffee, ratio)
                    }

                    return result;
                  }

                  case "findCoffee": {
                    var water, ratio;

                    if (ob.block === "water") {
                      water = ob.value;
                      ratio = ob.state.ratio;
                    } else if (ob.block === "ratio") {
                      water = ob.state.water;
                      ratio = ob.value;
                    }

                    const result = {
                      [ob.block]: ob.value,
                      coffee: this.findCoffee(water, ratio)
                    }

                    return result;
                  }
                }
            }
        }
    }
}

export default calculate;
