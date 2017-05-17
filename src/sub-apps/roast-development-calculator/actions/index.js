import {
    BLOCK_CHANGE,
    TIME_CHANGE,
    TIME_CLEAR,
    HELP_OPEN,
    HELP_CLOSE,
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
    input,
    block
  }
}

export function clearTime() {
  return {
    type: TIME_CLEAR
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
