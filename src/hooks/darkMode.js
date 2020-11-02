import saveToLocalStorage from './saveToLocalStorage copy'
import React, { useState, useEffect } from "react";

const DarkMode = () => {
  const [value, setValue] = saveToLocalStorage('darkMode', false);
  return [value, setValue];
};

export default DarkMode;