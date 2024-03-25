import { useRef } from "react";
import styles from "../css/addtask.module.css";

export default function AddTask({ todoList, setTodoList }) {
  const todoRef = useRef(null);
  function addTodo(event) {
    event.preventDefault();
    const todoValue = todoRef.current.value;
    setTodoList((todoList) => [
      ...todoList,
      { todo: todoValue, completed: false },
    ]);
    todoRef.current.value = "";
  }
  return (
    <>
      <div className={styles.add_task_input_content}>
        <form onSubmit={(e) => addTodo(e)} className={styles.add_task_form}>
          {/* <form action="" className={styles.add_task_form}> */}
          <input
            className={styles.add_task_input}
            type="text"
            ref={todoRef}
            placeholder="Add a task..."
          />
          <button className={styles.add_task_button}>
            {/* <button className={styles.add_task_button} onClick={(e) => addTodo(e)}> */}
            Add
          </button>
        </form>
      </div>
    </>
  );
}
