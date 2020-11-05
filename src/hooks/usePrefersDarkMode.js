import useMedia from './useMedia';

const usePrefersDarkMode = () => {
  return useMedia(['(prefers-color-scheme: dark)'], [true], false);
};

export default usePrefersDarkMode;