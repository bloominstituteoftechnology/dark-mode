import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (key, initialValues, cb) => {
  const [values, setValues] = useLocalStorage(key, initialValues);

  useEffect(() => {
    if (values === true) {
      const body = document.getElementsByTagName("body");
      body[0].classList.toggle("dark-mode");
    }
  }, [values]);

  //   const handleChanges = e => {
  //     console.log(e.target.name);
  //     setValues({
  //       ...values,
  //       [e.target.name]: e.target.value
  //     });
  //   };

  return [values, setValues];
};
