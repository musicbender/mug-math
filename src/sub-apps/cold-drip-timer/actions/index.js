import {
  SOUND_ON,
  SOUND_OFF,
  CHANGE_TEMPO,
  CHANGE_RIPPLE,
  SWEETSPOT_ON,
  SWEETSPOT_OFF,
  DIALOG_OPEN,
  DIALOG_CLOSE,
  HELP_OPEN,
  HELP_CLOSE,
} from '../constants/index';

export function soundOn() {
  return {
    type: SOUND_ON,
  }
}

export function soundOff() {
  return {
    type: SOUND_OFF,
  }
}

export function changeTempo(value) {
  return {
    type: CHANGE_TEMPO,
    value,
  }
}

export function changeRipple() {
  return {
    type: CHANGE_RIPPLE,
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

export function openDialog() {
  return {
    type: DIALOG_OPEN
  }
}

export function closeDialog() {
  return {
    type: DIALOG_CLOSE
  }
}

export function openHelp() {
  return {
    type: HELP_OPEN
  }
}

export function closeHelp() {
  return {
    type: HELP_CLOSE
  }
}
