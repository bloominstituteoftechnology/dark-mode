import useMedia from './useMedia';

// Compose our useMedia hook to detect dark mode preference.
// The API for useMedia looks a bit weird, but that's because ...
// ... it was designed to support multiple media queries and return values.
// Thanks to hook composition we can hide away that extra complexity!
// Read the recipe for useMedia to learn more: usehooks.com/useMedia
function usePrefersDarkMode() {
    return useMedia(['(prefers-color-scheme: dark)'], [true], false);
  }

  export default usePrefersDarkMode;