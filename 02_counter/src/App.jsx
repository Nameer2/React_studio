import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setcounter] = useState(0)
  const addvalue = ()=>{
    if(counter<20){
      setcounter(counter +1)
    }
  }

  const removevalue = ()=>{
    if(counter>0){
      setcounter(counter - 1)
    }
  }

  return (
    <>
      <h1>React with Nameer</h1>
      <h2>counter value: {counter}</h2>
      <button 
      onClick={addvalue} className='button'>add value
      </button><br />
      <button
      onClick={removevalue} className='button'>remove value</button>
    </>
  )
}

export default App
