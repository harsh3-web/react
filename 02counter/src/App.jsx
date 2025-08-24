import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(15);

  const addValue = () => {
    // counter = counter + 1;

    // if (counter > 20) {
    //   counter = 20;
    //   setcounter(counter);
    // } else {
    //   setcounter(counter);
    // }
    setcounter(prevCounter => prevCounter+1)
    setcounter(prevCounter => prevCounter + 1)
    setcounter(prevCounter => prevCounter + 1)
    setcounter(counter + 1);
    setcounter(counter + 1);
  };

  const removeValue = () => {
    console.log("value added", counter);
    counter = counter - 1;
    if (counter < 0) {
      counter = 0;
      setcounter(counter);
    } else {
      setcounter(counter);
    }
  };

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>add value</button>
      <br></br>
      <button onClick={removeValue}>remove value</button>
    </>
  );
}

export default App;
