import {TIME_CHANGE, TIME_CLEAR} from '../constants';

const initialState = {
  fcTime: null,
  totalTime: null,
  development: 0
}

export default function values(state = initialState, action) {
  const {block, input} = action;

  switch(action.type) {
    case TIME_CHANGE: {
      const findDev = {
        convertTime(t) {
          return {
            min: !t ? 0 : t.getHours(),
            sec: !t ? 0 : t.getMinutes()
          }
        },

        addZero(i) {
            return i < 10 ? "0" + i : i;
        },

        findSeconds(time) {
            return (parseFloat(time.min) * 60) + parseFloat(time.sec);
        },

        getTime() {
          var fc, total;
          const newInput = this.convertTime(input);

          if (block === "fcTime") {
            // let totalState = state.totalTime ? state.totalTime : 0;

            fc = newInput;
            total= this.convertTime(state.totalTime);
          } else {
            // let fcState = state.totalTime ? state.fcTime : 0;

            fc = this.convertTime(state.fcTime);
            total = newInput;
          }

          return {
            fc: this.findSeconds(fc),
            total: this.findSeconds(total)
          }
        },

        findPercent(total, dev) {
            const sum = Math.round((100 - ((dev / total) * 100)) * 10) / 10;
            return isFinite(sum) && sum >= 0 ? sum : 0;
        },

        result() {
          const time = this.getTime();
          return this.findPercent(time.total, time.fc);
        }
      }

      const newInput = findDev.convertTime(input);

      return {...state, [block]: input, development: findDev.result() }
    }
    default:
    return state;
  }
}
