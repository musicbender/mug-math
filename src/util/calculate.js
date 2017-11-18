const calculate = {
  findRatio(c, w) {
    const sum = Math.round((parseFloat(w) / parseFloat(c)) * 10) / 10;
    return isFinite(sum) ? sum : "0";
  },

  findWater(c, r) {
    const sum = Math.round(c * r);
    return isFinite(sum) ? sum : "0";
  },

  findCoffee(w, r) {
    const sum = Math.round((parseFloat(w) / parseFloat(r)) * 10) / 10;
    return isFinite(sum) ? sum : "0";
  },

  findMoistureLoss(pre, post) {
    const sum = Math.round((100 - ((post / pre) * 100)) * 10) / 10;
    return isFinite(sum) ? sum : "0";
  },

  findMax(current, block) {
    const decimal = current.indexOf(".");
    let max;
    switch (decimal) {
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

  // check if number is maxed out
  isNotMax: {
    numpad(current, max) {

      return !(current.length >= max);
    },

    pm(value, block) {
      if (block === "water") {
        return value >= 0 && value < 10000;
      } else {
        return value >= 0 && value < 1000;
      }
    },
  },

  isInt(n) {
    return n % 1 === 0;
  },

  getValue(n, c, b) {
    const value = this.isInt(n) ? n : n.toFixed(1);
    return this.isNotMax.pm(value, b) ? value : c;
  },

  result(ob) {
    switch (ob.app) {
      case "moistureCalc":
        {
          let pre;
          let post;

          if (ob.block === "preWeight") {
            pre = ob.value;
            post = ob.state.postWeight;
          } else if (ob.block === "postWeight") {
            pre = ob.state.preWeight;
            post = ob.value;
          }

          const result = {
            [ob.block]: ob.value,
            moistureLoss: this.findMoistureLoss(pre, post),
          };

          return result;
        }
      case "brewCalc":
        {
          switch (ob.mode) {
            case "findRatio":
              {
                let coffee;
                let water;

                if (ob.block === "coffee") {
                  coffee = ob.value;
                  water = ob.state.water;
                } else if (ob.block === "water") {
                  coffee = ob.state.coffee;
                  water = ob.value;
                }

                const result = {
                  [ob.block]: ob.value,
                  ratio: this.findRatio(coffee, water),
                };

                return result;
              }

            case "findWater":
              {
                let coffee;
                let ratio;

                if (ob.block === "coffee") {
                  coffee = ob.value;
                  ratio = ob.state.ratio;
                } else if (ob.block === "ratio") {
                  coffee = ob.state.coffee;
                  ratio = ob.value;
                }

                const result = {
                  [ob.block]: ob.value,
                  water: this.findWater(coffee, ratio),
                };

                return result;
              }

            case "findCoffee":
              {
                let water;
                let ratio;

                if (ob.block === "water") {
                  water = ob.value;
                  ratio = ob.state.ratio;
                } else if (ob.block === "ratio") {
                  water = ob.state.water;
                  ratio = ob.value;
                }

                const result = {
                  [ob.block]: ob.value,
                  coffee: this.findCoffee(water, ratio),
                };

                return result;
              }
          }
        }
    }
  },
};

export default calculate;
