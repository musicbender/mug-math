import { AUDIO_MOUNT, SOUND_ON, SOUND_OFF, CHANGE_TEMPO, CHANGE_RIPPLE, SWEETSPOT_ON, SWEETSPOT_OFF } from '../constants/index';

export function mountAudio(payload) {
  return {
    type: AUDIO_MOUNT,
    payload
  }
}

export function soundOn() {
  return {
    type: SOUND_ON
  }
}

export function soundOff() {
  return {
    type: SOUND_OFF
  }
}

export function changeTempo(value) {
  return {
    type: CHANGE_TEMPO,
    value
  }
}

export function changeRipple() {
  return {
    type: CHANGE_RIPPLE
  }
}

export function onSweetspot() {
  return {
    type: SWEETSPOT_ON
  }
}

export function offSweetspot() {
  return {
    type: SWEETSPOT_OFF
  }
}
