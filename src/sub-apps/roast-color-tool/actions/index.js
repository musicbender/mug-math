import {
  SWEETSPOT_ON,
  SWEETSPOT_OFF,
  HELP_OPEN,
  HELP_CLOSE,
  COLOR_CHANGE,
  COLOR_INCREMENT,
  COLOR_DECREMENT
} from '../constants/index';

export function changeColor(value) {
  return {
    type: COLOR_CHANGE,
    value
  }
}

export function incrementColor() {
  return {
    type: COLOR_INCREMENT,
  }
}

export function decrementColor() {
  return {
    type: COLOR_DECREMENT,
  }
}

export function onSweetspot() {
  return {
    type: SWEETSPOT_ON,
  }
}

export function offSweetspot() {
  return {
    type: SWEETSPOT_OFF,
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
