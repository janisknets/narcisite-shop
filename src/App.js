import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './molecules/counter';
import Palette from './molecules/palette';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter />
        <Counter />
        <Palette />
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <p>Pleaaaase work</p>
      </header>
    </div>
  );
}

export default App;
