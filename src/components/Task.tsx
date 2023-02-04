import React from "react";
import { TaskType } from "../models/Task";
import "./Task.css";

type TaskProps = {
  task: TaskType;
  deleteTask: (taskId: number) => void;
  editTask: (id: number) => void;
};

export const Task = ({task, deleteTask, editTask}: TaskProps) => {
  // const {title} = task.props; (aussi possible)
  return (
    <div className="task-container">
      <div className="task-content">
        <label className="container">
          <input type="checkbox" checked={false} onChange={() => console.log('')}/>
          <span className="checkmark"></span>
        </label>
        <p>{task.title}</p>
      </div>
      <div className="task-actions">
        <button onClick={() => editTask(task.id)}>Edit</button>
        {/* <button onClick={() => editTask(task.id)}>Edit</button> */}
        <button onClick={() => deleteTask(task.id)}>Delete</button>
        {/* 1ère itération id1, 2ème itération id2 */}

      </div>
    </div>
  );
};

