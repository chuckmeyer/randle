import React from 'react';
import './App.css';
import Randle from './components/randle';
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-224691097-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Randle />
      </header>
    </div>
  );
}

export default App;
