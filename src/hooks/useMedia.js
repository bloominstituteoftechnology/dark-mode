import { useState, useEffect } from "react";

export const useMedia = (queries, values, defaultValue) => {
  const mediaQueriesList = queries.map(q => window.matchMedia(q));

  const getValue = () => {
    const index = mediaQueriesList.findIndex(mql => mql.matches);
    return typeof values[index] !== "undefined" ? values[index] : defaultValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    const handler = () => setValue(getValue);
    mediaQueriesList.forEach(mql => mql.addEventListener(handler));
  }, []); //eslint-disable-line

  return value;
};
