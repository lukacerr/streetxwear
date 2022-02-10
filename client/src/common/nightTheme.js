import * as nightTheme from 'darkreader';
nightTheme.setFetchMethod(window.fetch);

const NIGHT_THEME_STORAGE = 'sxw-night-theme';
let CURRENT_THEME = JSON.parse(localStorage.getItem(NIGHT_THEME_STORAGE)) ?? !nightTheme.auto();

export const ToggleTheme = () => {
  CURRENT_THEME = !nightTheme.isEnabled();
  CURRENT_THEME ? nightTheme.enable() : nightTheme.disable();
  localStorage.setItem(NIGHT_THEME_STORAGE, JSON.stringify(CURRENT_THEME));
};

export default nightTheme;
