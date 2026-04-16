import { useState } from 'react'

import './App.css'

function App() {

 
 const[counter , setCount] =  useState(10);
 const addValue =()=>{
  setCount(counter + 1)
 }

 const removeValue=()=>{
setCount(counter-1);
 }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value : {counter}</h2>

    <button onClick={addValue}>Add value</button><br />

    <button onClick={removeValue}>remove value</button>
    <p>Lorem ipsum dolor sit amet consectetur. {counter}</p>
    </>
  )
}

export default App
