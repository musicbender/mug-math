import {
  HELP_OPEN,
  HELP_CLOSE,
  VALUE_CHANGE,
  VALUE_INCREMENT,
  VALUE_DECREMENT
} from '../constants/index';

export function changeValue(input, block) {
  return {
    type: VALUE_CHANGE,
    input,
    block
  }
}

export function incrementValue(block) {
  return {
    type: VALUE_INCREMENT,
    block
  }
}

export function decrementValue(block) {
  return {
    type: VALUE_DECREMENT,
    block
  }
}

export function clearValue() {
  return {
    type: VALUE_CLEAR,
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
