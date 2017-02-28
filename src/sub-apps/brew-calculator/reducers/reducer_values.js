import { NUM_CHANGE, NUM_INCREMENT, NUM_DECREMENT, NUM_CLEAR } from '../constants/index';
import numpad from '../../../util/numpad';
import calculate from '../../../util/calculate';

const initialState = {
  coffee: 0,
  water: 0,
  ratio: 0
}

export default function values(state = initialState, action) {
  const block = action.block,
        current = state[block],
        mode = action.mode,
        app = "brewCalc";

  switch(action.type) {
    case NUM_CHANGE: {
      return {...state, ...calculate.result({
        value: numpad.getNum(action.input, current, block),
        block,
        state,
        mode,
        app
      })};
    }

    case NUM_INCREMENT: {
      let value = calculate.getValue(Number(current) + 1, current, block);

      return {...state, ...calculate.result({
        value: value.toString(),
        block,
        state,
        mode,
        app
      })};
    }

    case NUM_DECREMENT: {
      let value = calculate.getValue(Number(current) - 1, current, block);

      return {...state, ...calculate.result({
        value: value.toString(),
        block,
        state,
        mode,
        app
      })};
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
