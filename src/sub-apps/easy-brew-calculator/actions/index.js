import {
    HELP_OPEN,
    HELP_CLOSE,
} from '../constants/index';

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
