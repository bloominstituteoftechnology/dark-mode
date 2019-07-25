import React from 'react';
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import useDarkMode from './hooks/useDarkMode';



function App() {
  const [name, setName] = useLocalStorage('name', "Carlos");
  return (
    <div className="App">
      <useDarkMode />
    </div>
  );
}

export default App;
