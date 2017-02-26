const calculate = {
    findLoss: function (pre, post) {
        let sum = Math.round((100 - ((post / pre) * 100)) * 10) / 10;

        return sum !== Infinity && !isNaN(sum) ? sum : "0";
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

    result: function (num, action, state) {
        const {block} = action;

        var pre,
            post;

        if (block === "preWeight") {
            pre = num;
            post = state.postWeight;
        } else if (block === "postWeight") {
            pre = state.preWeight;
            post = num;
        }

        const result = {
            [block]: num,
            ratio: this.findLoss(pre, post)
        }

        return result;
    }
}

export default calculate;
