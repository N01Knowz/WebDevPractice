import AddTask from "./AddTask";
import Tasklist from "./TaskList";
import styles from "../css/content.module.css";

export default function Content({ todoList, setTodoList }) {
  return (
    <>
      <div className={styles.content}>
        <AddTask todoList={todoList} setTodoList={setTodoList} />
        <Tasklist todoList={todoList} setTodoList={setTodoList} />
      </div>
    </>
  );
}
