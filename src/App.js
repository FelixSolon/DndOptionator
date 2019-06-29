import React, { BrowserRouter as Router, Switch } from 'react';
import logo from './logo.svg';
import './App.css';
import spells from "./data/Paladin";
import Spell from "./components/Spell"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        {spells.map((spell) => <Spell spell={spell} />)}
      </header>
    </div>
  );
}

export default App;
