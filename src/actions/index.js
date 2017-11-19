import { APP_OPEN, APP_CLOSE, AUDIO_MOUNT, MENU_LOADED, INFO_MENU_OPEN } from '../constants/index';

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

export function openInfoMenu() {
  return {
    type: INFO_MENU_OPEN,
  }
}

export function closeInfoMenu() {
  return {
    type: INFO_MENU_CLOSE,
  }
}
