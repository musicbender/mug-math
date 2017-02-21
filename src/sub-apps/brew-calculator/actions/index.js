import {
    MODE_CHANGE,
    BLOCK_CHANGE,
    NUM_CHANGE,
    NUM_CLEAR,
    NUM_INCREMENT,
    NUM_DECREMENT
} from '../constants/index';

export function changeMode(mode) {
    return {
      type: MODE_CHANGE,
      mode
    }
}

export function changeBlock(block) {
    return {
      type: BLOCK_CHANGE,
      block
    }
}

export function changeNum(input, mode, block) {
    return {
      type: NUM_CHANGE,
      input,
      mode,
      block
    }
}

export function increaseNum(mode, block) {
    return {
      type: NUM_INCREMENT,
      mode,
      block
    }
}

export function decreaseNum(mode, block) {
  return {
    type: NUM_DECREMENT,
    mode,
    block
  }
}

export function clearNum() {
    return {
      type: NUM_CLEAR
    }
}
