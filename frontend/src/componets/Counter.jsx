import { useEffect, useState } from "react"

function Counter(){
  const [count,setCount] =  useState(0);
  useEffect(()=>{
    console.log("use effect ");
    
  },[count])
  return<>
    <div>
      <h1>Count : {count} </h1>
      <button onClick={()=>setCount(count + 1)}>Increase</button>
      <button onClick={()=>setCount(count - 1)}>decrease</button>
    </div>
  </>
}

export default Counter