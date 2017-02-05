import { MODE_CHANGE, BLOCK_CHANGE, NUM_CHANGE } from '../constants/index';

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

export function changeNum(input, block) {
  return {
    type: NUM_CHANGE,
    input,
    block
  }
}
