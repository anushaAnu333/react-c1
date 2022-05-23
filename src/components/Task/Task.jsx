import React from "react";
import styles from "./task.module.css";
import {Counter} from "../Counter";

const Task = ({task}) => {

  const [isCompleted,setIsCompleted]=React.useState(task.isCompleted);
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task }key={task.id}>
      
      <input type="checkbox" 
     
       checked={isCompleted}
       onChange={(e)=>{
         setIsCompleted(e.target.checked)
        
   
       }}
      data-cy="task-checkbox" />
      <div data-cy="task-text"></div>
      {/* Counter here */}
      <button data-cy="task-remove-button" lassName={isCompleted ? styles.striked:""}>{task.value}</button>
    </li>
  );
};

export default Task;
