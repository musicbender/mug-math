import {
  SWEETSPOT_ON,
  SWEETSPOT_OFF,
  HELP_OPEN,
  HELP_CLOSE,
} from '../constants/index';

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
