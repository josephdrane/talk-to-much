import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  const redOn = [
    <div key={1} className="red redOn"></div>,
    <div key={2} className="yellow yellowOff"></div>,
    <div key={3} className="green greenOff"></div>,
  ]
  const yellowOn = [
    <div key={1} className="red redOff"></div>,
    <div key={2} className="yellow yellowOn"></div>,
    <div key={3} className="green greenOff"></div>,
  ]
  const greenOn = [
    <div key={1} className="red redOff"></div>,
    <div key={2} className="yellow yellowOff"></div>,
    <div key={3} className="green greenOn"></div>,
  ]
  const [lights, setLights] = useState(redOn);
  const [status, setStatus] = useState('red');
  const talking = async () => {
    setStatus('green');
    setLights(greenOn);
    await sleep(20000);
    setStatus('yellow');
    setLights(yellowOn);
    await sleep(10000);
    setStatus('red');
    setLights(redOn);
  }
  return (
    <div className="App">
      <div className="trafficlight">
        {
          {
            red: <button onClick={talking}>Start Talking</button>,
            yellow: <p className="talking">Ok time to stop talking</p>,
            green: <p className="talking">Keep it short and to the point</p>,
          }[status]
        }
        {lights}
      </div>
    </div>
  );
}

export default App;
