import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState, useEffect } from "react";

export default function App() {
  const [todoList, setTodoList] = useState([
    {
      todo: "Drive",
      completed: false,
    },
    {
      todo: "Walk",
      completed: true,
    },
  ]);

  useEffect(() => {
    // Sort the todoList array when the component renders
    let sortedTodoList = [...todoList].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );
    setTodoList(sortedTodoList);
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  return (
    <>
      <Header />
      <Content todoList={todoList} setTodoList={setTodoList} />
      <Footer todoList={todoList} />
    </>
  );
}
