import React from 'react';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>Olá</h1>
      {props.children}
    </div>
  );
}

export default App;
