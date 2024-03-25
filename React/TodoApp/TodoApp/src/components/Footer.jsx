import styles from "../css/footer.module.css";

export default function Footer({ todoList }) {
  const todoCount = todoList.length;
  const completedCount = todoList.filter((item) => item.completed).length;
  return (
    <>
      <footer className={styles.footer}>
        <h3>Total Todos: {todoCount}</h3>
        <h3>Completed Todos: {completedCount}</h3>
      </footer>
    </>
  );
}
