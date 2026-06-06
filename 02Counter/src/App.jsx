import './App.css';
import { useState } from 'react';
function App() {

  let [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter+1);
  }


  const removeValue = () => {
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Pranay's Counter</h1>
      <br></br>
      <h1>Counter: {counter}</h1>
      <button onClick={addValue} >increment</button>
      <button onClick={removeValue} >descrement</button>
    </>
  )

}

export default App
