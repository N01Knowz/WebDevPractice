import styles from "../css/tasklist.module.css";

export default function Tasklist({ todoList, setTodoList }) {
  function removeTask(e, index) {
    setTodoList((todoList) => {
      const updatedTodoList = todoList.filter((_, i) => i !== index);
      return updatedTodoList;
    });
  }
  function toggleTask(index) {
    // setTodoList((todoList) => {
    //   const updatedTodoList = todoList.map((task, i) => {
    //     if (i == index) {
    //       return {
    //         ...task,
    //         completed: !task.completed,
    //       };
    //     }
    //     return task;
    //   });
    //   return updatedTodoList;
    // });
    setTodoList((todoList) => {
      let updatedTodoList = [...todoList];
      const task = { ...updatedTodoList[index] };
      task.completed = !task.completed;
      updatedTodoList[index] = task;
      updatedTodoList = updatedTodoList
        .slice()
        .sort((a, b) => Number(a.completed) - Number(b.completed));
      return updatedTodoList;
    });
  }
  return (
    <>
      <div
        // style={{
        //   display: "flex",
        //   justifyContent: "space-between", // Corrected property name to camelCase
        //   width: "20em",
        //   padding: "1em",
        //   border: "1px solid black",
        // }}
        className={styles.list_items}
      >
        {todoList.map((todo, index) => (
          <div key={index} className={styles.list_content}>
            <div
              className={styles.content_item}
              onClick={() => toggleTask(index)}
            >
              {todo.completed ? (
                <s>
                  <h1>{todo.todo}</h1>
                </s>
              ) : (
                <h1>{todo.todo}</h1>
              )}
            </div>
            <div className={styles.content_button}>
              <button onClick={(e) => removeTask(e, index)}>X</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
