import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [lsValue, setLsValue] = useLocalStorage("dark", false);
  console.log(lsValue);
  return [lsValue, setLsValue];
};
export default useDarkMode;
