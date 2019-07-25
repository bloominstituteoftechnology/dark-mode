import React from 'react';
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';



function App() {
  const [name, setName] = useLocalStorage('name', "Carlos");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>
  );
}

export default App;
