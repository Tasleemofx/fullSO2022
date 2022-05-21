import React, { useState } from 'react';
import './App.css';
import Button from './component/Button';
import Renders from "./component/Renders";


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  function handleGood(){
    setGood(()=> good+1)
  }
  function handleBad() {
    setBad(() => bad + 1)
  }
  function handleNeut() {
    setNeutral(() => neutral + 1)
  }
  return (
    <div className="App">
      <h1>Give Feedback</h1>
      <Button onClick={handleGood} name="Good"/>
      <Button onClick={handleNeut} name="Neutral" />
      <Button onClick={handleBad} name="Bad" />
      

      <h2>Statistics</h2>
      <section>
        <Renders name="Good" show={good}/> 
        <Renders name="Neutral" show={neutral} />
        <Renders name="Bad" show={bad} />
        <Renders name="Average" show={(good+neutral+bad)/3} />
        <Renders name="Positives" show={(good/(good+neutral+bad))*100} unit="%"/>
      </section>
    </div>
  );
}

export default App;
