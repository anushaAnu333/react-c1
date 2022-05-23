import React ,{useState} from "react";
import styles from "./addTask.module.css";
import {Task} from "../Task";


const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const[value,setValue]=useState("")
  const[task,setTask]=useState([])
  
  return (
    <div className={styles.todoForm}>
       {task.map((task)=>(
              <Task key={task.id} todo={task}  />
            ))}
      <input data-cy="add-task-input"
       value={value} type="text" onChange={(e)=>{
        setValue(e.target.value)
    }} />
      <button data-cy="add-task-button" className='btn' onClick={()=>{
            setTask([...task,{id:Date.now(),value:value
            }])
            setValue("")
        }}>+</button>
    </div>
  );
};

export default AddTask;
