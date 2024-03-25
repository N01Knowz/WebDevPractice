import { useState } from "react";

export default function Form() {
  //   const [name, setName] = useState("Ron");
  const [name, setName] = useState({ first_name: "Ron", last_name: "Arn" });
  function handleChange(event) {
    setName(event.target.value);
  }
  function handleClick(event) {
    event.preventDefault();
    console.log(name);
  }
  return (
    <>
      <div>
        <form action="#" method="get">
          {/* <input
            type="text"
            name=""
            onChange={function demo(e) {
              return handleChange(e);
            }}
            value={name}
            id=""
          /> */}
          <input
            type="text"
            name=""
            onChange={(e) => setName({ ...name, first_name: e.target.value })} //put the ...variableName if you want to change the value of a key in an object
            value={name.first_name}
            id=""
          />
          <input
            type="text"
            name=""
            onChange={(e) => setName({ ...name, last_name: e.target.value })}
            value={name.last_name}
            id=""
          />
          {/* <input
            type="text"
            name=""
            onChange={(e) => handleChange(e)}
            value={name}
            id=""
          /> */}
          <h1>
            {name.first_name} {name.last_name}
          </h1>
          <button onClick={(e) => handleClick(e)}>Add</button>
        </form>
      </div>
    </>
  );
}
