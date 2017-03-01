import {
    BLOCK_CHANGE,
    NUM_CHANGE,
    NUM_CLEAR,
    NUM_INCREMENT,
    NUM_DECREMENT
} from '../constants/index';


export function changeBlock(block) {
  return {
    type: BLOCK_CHANGE,
    block
  }
}

export function changeTime(input, block) {
  return {
    type: TIME_CHANGE,
    inpout,
    block
  }
}

export function clearTime() {
  return {
    type: NUM_CLEAR
  }
}
