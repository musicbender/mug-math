import {
    BLOCK_CHANGE,
    NUM_CHANGE,
    NUM_CLEAR,
    NUM_INCREMENT,
    NUM_DECREMENT,
    HELP_OPEN,
    HELP_CLOSE,
} from '../constants/index';


export function changeBlock(block) {
  return {
    type: BLOCK_CHANGE,
    block
  }
}

export function changeNum(input, block) {
  return {
    type: NUM_CHANGE,
    input,
    block
  }
}

export function increaseNum(block) {
  return {
    type: NUM_INCREMENT,
    block
  }
}

export function decreaseNum(block) {
  return {
    type: NUM_DECREMENT,
    block
  }
}

export function clearNum() {
  return {
    type: NUM_CLEAR,
  }
}

export function openHelp() {
  return {
    type: HELP_OPEN,
  }
}

export function closeHelp() {
  return {
    type: HELP_CLOSE,
  }
}
