import React from "react";
import styles from "./counter.module.css";

const Counter = () => {
  const [count,setCount]=React.useState(0)
  // sample value to be replaced

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" className={styles.btn} onClick={()=>setCount(count+1)}>+</button>
      <span className={styles.Value} data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" className={styles.btn} onClick={()=>setCount(count-1)}>-</button>
    </div>
  );
};

export default Counter;
