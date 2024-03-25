import { useEffect, useState } from "react";
import styles from "./css/app.module.css";

function App() {
  const numRows = 25;
  const numCols = 25;
  const startingX = 12;
  const startingY = 12;
  const [snekHead, setSnekHead] = useState({ x: startingX, y: startingY });
  const snekBody = 2;
  const snekFood = 3;
  const [snekGrid, setSnekGrid] = useState(
    Array.from({ length: numRows }, () =>
      Array.from({ length: numCols }, () => 0)
    )
  );
  const [moveSnek, setMoveSnek] = useState(false);
  useEffect(() => {
    setSnekGrid((snekGrid) => {
      let updatedSnekGrid = [...snekGrid];
      updatedSnekGrid[startingX][startingY] = 1;
      return updatedSnekGrid;
    });
  }, []);

  useEffect(() => {
    console.log(moveSnek);
  }, [moveSnek]);

  function makeSnekMove(event) {
    const keyMove = {
      ArrowLeft: 1,
      ArrowUp: 2,
      ArrowRight: 3,
      ArrowDown: 4,
      a: 1,
      w: 2,
      d: 3,
      s: 4,
    };
    if (event.key in keyMove) {
      const direction = keyMove[event.key];
      setMoveSnek(direction);
    }
  }

  useEffect(() => {
    if (moveSnek) {
      const intervalId = setInterval(() => {
        let movementX = 0;
        let movementY = 0;
        if (moveSnek === 1) {
          movementX = -1;
        }
        if (moveSnek === 2) {
          movementY = -1;
        }
        if (moveSnek === 3) {
          movementX = 1;
        }
        if (moveSnek === 4) {
          movementY = 1;
        }

        setSnekGrid((snekGrid) => {
          const updatedSnekGrid = snekGrid.map((row) => [...row]); // Create a new copy of the grid
          updatedSnekGrid[snekHead.x + movementX][snekHead.y + movementY] = 1;
          updatedSnekGrid[snekHead.x][snekHead.y] = 0;
          setSnekHead((prevHead) => ({
            x: prevHead.x + movementX,
            y: prevHead.y + movementY,
          }));
          return updatedSnekGrid;
        });
      }, 1000);

      return () => clearInterval(intervalId); // Cleanup on unmount or state change
    }
  }, [moveSnek, snekHead]); // Include snekHead in the dependencies array
  return (
    <>
      <div
        className={styles.Snake}
        tabIndex={0} // Add this to make the div focusable
        onKeyDown={(e) => makeSnekMove(e)}
      >
        <h1>Snek</h1>
        <div className={styles.SnekContainer}>
          {snekGrid.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.SnekRow}>
              {row.map((cell, colIndex) => (
                <div
                  key={colIndex}
                  className={`${styles.SnekCell} ${
                    cell === 1 && styles.snakeHead
                  }`}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
