import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0); //setCount is just an indirect way to update count
  const [incrementBy, setIncrementBy] = useState(1);
  function handleIncrement() {
    // setCount("Hello");
    setCount(count + incrementBy);
  }
  function handleDecrement() {
    // setCount("Hello");
    setCount(count - incrementBy);
  }
  function changeIncrementBy(event) {
    const newValue = parseInt(event.target.value);
    setIncrementBy(newValue);
  }
  //   function changeIncrementBy(message, target) {
  //     console.log(message);
  //     const newValue = parseInt(target);
  //     setIncrementBy(newValue);
  //   }
  return (
    <>
      <div>
        <h1>Count value is: {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <input
          type="number"
          name="incrementByInput"
          value={incrementBy}
          onChange={changeIncrementBy}
          //   onChange={(e) =>
          //     changeIncrementBy("Message", parseInt(e.target.value))
          //   }
        />
      </div>
    </>
  );
}
