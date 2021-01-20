import React from 'react';
import './App.css';

function App() {

  const [buttonValue, setButtonValue] = React.useState('Start');
  const [seconds, setSeconds] = React.useState(0);
  const [intervalId, setIntervalId] = React.useState();

  const startClick = () => {
    if(buttonValue === 'Start'){
      setButtonValue('Pause');
      let interval = setInterval(() => setSeconds(seconds => seconds +1),1000);
      setIntervalId(interval);
    }else{
      clearInterval(intervalId);
      setButtonValue('Start');
    }
  }

  const resetClick = () => {
    clearInterval(intervalId);
    setSeconds(0);
    setButtonValue('Start');
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {seconds}s
        </p>
        <button onClick={startClick}> {buttonValue}</button>
        <button onClick={resetClick}> reset</button>
      </header>
    </div>
  );
}

export default App;
