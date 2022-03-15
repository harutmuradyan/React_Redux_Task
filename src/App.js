import React from 'react';
import './App.scss';
import Content from './Components/Contents/Contents';
import Players from './Components/Players/Players';
import Teams from './Components/Teams/Teams';

function App() {

  return (
    <div className='app'>
      <div className='layout'>
        <Content/>
        <Teams/>
        <Players/>
      </div>
    </div>
  )
}

export default App;
