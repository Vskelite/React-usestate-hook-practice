import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(3)
  
  const addValue = () => {
    if( counter < 20){
      setCounter(counter + 1);
    }
  }

  const removeValue = () => {
    if( counter > 0){
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>React counter using useState Hook</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value: {counter}</button>
      <button onClick={removeValue}>Remove value: {counter}</button>
    </>
  )
}

export default App
