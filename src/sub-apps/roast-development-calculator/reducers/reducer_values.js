import { NUM_CHANGE, NUM_INCREMENT, NUM_DECREMENT, NUM_CLEAR } from '../constants/index';
import numpad from '../../../util/numpad';
import calculate from '../../../util/calculate';

const initialState = {
  preWeight: 0,
  postWeight: 0,
  moistureLoss: 0
}

export default function values(state = initialState, action) {
  const block = action.block,
        current = state[block],
        app = "moistureCalc";

  switch(action.type) {
    case NUM_CHANGE: {
      return {...state, ...calculate.result({
        value: numpad.getNum(action.input, current, block),
        block,
        state,
        app
      })};
    }

    case NUM_INCREMENT: {
      let value = calculate.getValue(Number(current) + 1, current, block);

      return {...state, ...calculate.result({
        value: value.toString(),
        block,
        state,
        app
      })};
    }

    case NUM_DECREMENT: {
      let value = calculate.getValue(Number(current) - 1, current, block);

      return {...state, ...calculate.result({
        value: value.toString(),
        block,
        state,
        app
      })};
    }

    case NUM_CLEAR:
      return {
        ...state,
        preWeight: 0,
        postWeight: 0,
        moistureLoss: 0
      }


    default:
      return state;
  }
}
