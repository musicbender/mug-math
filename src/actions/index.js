import { APP_OPEN, APP_CLOSE, AUDIO_MOUNT, MENU_LOADED } from '../constants/index';

export function openApp() {
  return {
    type: APP_OPEN,
  }
}

export function closeApp() {
  return {
    type: APP_CLOSE,
  }
}

export function mountAudio(payload) {
  return {
    type: AUDIO_MOUNT,
    payload,
  }
}

export function loadedMenu() {
  return {
    type: MENU_LOADED,
  }
}
