import { useState } from "react";
import Layouts from "../../Layouts/Layouts";
import { Link } from "react-router-dom";
import styles from "./calculator.module.css";

const Calculator = () => {
  type Expressions = {
    previous: string;
    current: string;
  };
  const [expression, setExpression] = useState<Expressions>({
    previous: "",
    current: "",
  });

  function Calculate() {
    if (expression.current) {
        try {
            const result = eval(expression.current);
            setExpression((prevState) => ({
                ...prevState,
                previous: prevState.current,
                current: result,
            }));
        } catch (error: any) {
            console.error("An error occurred during evaluation:", error);
            setExpression((prevState) => ({
                ...prevState,
                previous: "Error",
                current: "",
            }));
            return; // Exit the function early if an error occurs
        }
    }
}

  const headerContent = (
    <>
      <Link to="/">
        <button>
          <h3>Back</h3>
        </button>
      </Link>
      <h1>Calculator</h1>
    </>
  );
  return (
    <Layouts header={headerContent}>
      <div className={styles.content}>
        <div className={styles.calculatorContainer}>
          <div className={styles.calculatorHead}>
            <div className={styles.previousExpression}>
              <h3>{expression?.previous}</h3>
            </div>
            <input
              type="text"
              onChange={(e) =>
                setExpression((prevState) => ({
                  ...prevState,
                  current: e.target.value,
                }))
              }
              className={styles.currentExpression}
              value={expression?.current}
            />
          </div>
          <div className={styles.calculatorBody}>
            <button
              className={styles.calculatorButton}
              onClick={() =>
                setExpression((prevState) => ({
                  ...prevState,
                  current: prevState.current + "1",
                }))
              }
            >
              1
            </button>
            <button
              className={styles.calculatorButton}
              onClick={() =>
                setExpression((prevState) => ({
                  ...prevState,
                  current: prevState.current + "2",
                }))
              }
            >
              2
            </button>
            <button
              className={styles.calculatorButton}
              onClick={() =>
                setExpression((prevState) => ({
                  ...prevState,
                  current: prevState.current + "3",
                }))
              }
            >
              3
            </button>
            <button
              className={styles.calculatorButton}
              onClick={() =>
                setExpression((prevState) => ({
                  ...prevState,
                  current: prevState.current + "+",
                }))
              }
            >
              +
            </button>
            <button
              className={styles.calculatorButton}
              onClick={() =>
                setExpression((prevState) => ({
                  ...prevState,
                  current: prevState.current + "4",
                }))
              }
            >
              4
            </button>
            <button
              className={styles.calculatorButton}
              onClick={() =>
                setExpression((prevState) => ({
                  ...prevState,
                  current: prevState.current + "5",
                }))
              }
            >
              5
            </button>
            <button
              className={styles.calculatorButton}
              onClick={() =>
                setExpression((prevState) => ({
                  ...prevState,
                  current: prevState.current + "6",
                }))
              }
            >
              6
            </button>
            <button
              className={styles.calculatorButton}
              onClick={() =>
                setExpression((prevState) => ({
                  ...prevState,
                  current: prevState.current + "-",
                }))
              }
            >
              -
            </button>
            <button
              className={styles.calculatorButton}
              onClick={() =>
                setExpression((prevState) => ({
                  ...prevState,
                  current: prevState.current + "7",
                }))
              }
            >
              7
            </button>
            <button
              className={styles.calculatorButton}
              onClick={() =>
                setExpression((prevState) => ({
                  ...prevState,
                  current: prevState.current + "8",
                }))
              }
            >
              8
            </button>
            <button
              className={styles.calculatorButton}
              onClick={() =>
                setExpression((prevState) => ({
                  ...prevState,
                  current: prevState.current + "9",
                }))
              }
            >
              9
            </button>
            <button
              className={styles.calculatorButton}
              onClick={() =>
                setExpression((prevState) => ({
                  ...prevState,
                  current: prevState.current + "*",
                }))
              }
            >
              *
            </button>
            <button
              className={styles.calculatorButton}
              onClick={() =>
                setExpression((prevState) => ({ ...prevState, current: "" }))
              }
            >
              AC
            </button>
            <button
              className={styles.calculatorButton}
              onClick={() =>
                setExpression((prevState) => ({
                  ...prevState,
                  current: prevState.current + "0",
                }))
              }
            >
              0
            </button>
            <button
              className={styles.calculatorButton}
              onClick={() => Calculate()}
            >
              =
            </button>
            <button
              className={styles.calculatorButton}
              onClick={() =>
                setExpression((prevState) => ({
                  ...prevState,
                  current: prevState.current + "/",
                }))
              }
            >
              /
            </button>
            <button
              className={styles.calculatorButton}
              onClick={() =>
                setExpression((prevState) => ({
                  ...prevState,
                  current: prevState.current.slice(0, -1),
                }))
              }
            >
              C
            </button>
            <div></div>
            <div></div>
            <button className={styles.calculatorButton} 
            onClick={() =>
                setExpression((prevState) => ({
                  ...prevState,
                  current: prevState.current + "%",
                }))
              }>%</button>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Calculator;
