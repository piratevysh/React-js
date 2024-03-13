import Youtube from "./Youtube"
import { useState } from "react";

function App() {
  const [counter,setCounter] = useState(0)

  const addValue = () =>{
    setCounter(counter+1)
  }

  const removeValue = () =>{
    setCounter(counter-1)
  }

  return (
    <>
     {/* <Youtube />
     <h1>First react app</h1> */}
     <h1>React course Project {counter}</h1>
     <h2>Counter Value : {counter}</h2>
     <button onClick={addValue}>Add Value</button> {" "}
     <button onClick={removeValue}>Remove Value</button>

    </>
  )
}

export default App
