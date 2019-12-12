import useLocalStorage from './useLocalStorage';

export default function useDarkMode(key, value) {
  const [grabbedValue, setGrabbedValue] = useLocalStorage(key, value)

  const handleChange = updatedValue => {
    setGrabbedValue(updatedValue);
  };

  return [grabbedValue, handleChange];
}