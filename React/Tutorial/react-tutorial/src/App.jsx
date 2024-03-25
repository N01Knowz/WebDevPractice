import { useState } from "react";
import Test from "./components/Test";
import Testarray from "./components/Testarray";
import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";
import ChangeName from "./components/ChangeName";
import ShowName from "./components/ShowName";
function App() {
  const [count, setCount] = useState(0);
  const seatNumbers = [1, 4, 6, 8];
  const last_name = "Arnibal";
  const name = "Ron";
  const person = {
    name: name,
    message: "Hello there",
    emoji: "🤣",
    seatNumbers: seatNumbers,
  };
  const [transferName, setTransferName] = useState("Ron"); //setCount is just an indirect way to update count
  return (
    <>
      <div className="app">
        {/* <Test first_name={name} last_name="Arnibal" emoji="😂" /> */}
        {/* <Test first_name={name} last_name={last_name} emoji="😂" /> */}
        {/* <Testarray person={person} /> */}
        {/* <Fruits /> */}
        {/* <ConditionalComponent display={true} /> */}
        {/* <Message/> */}
        {/* <Counter/> */}
        <Form />
        {/* <ChangeName setTransferName={setTransferName} />
        <ShowName transferName={transferName} /> */}
      </div>
    </>
  );
}

export default App;
