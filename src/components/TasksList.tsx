import React from "react";
import "./TasksList.css";
import {Task} from "./Task";
import {TaskType} from "../models/Task"; 

type TasksListProps = {
    tasks: TaskType[]; // on a typé la prop Task en tableau objet et chaque objet est de type task
    deleteTask: (taskId: number) => void;
    editTask: (id: number) => void;
}

export const TasksList = ({tasks, deleteTask, editTask}:TasksListProps) => {
    return (
        // updateTasState, editTask
        <> 
        <div className="list-container">
        {tasks.map((task: TaskType) => (
        <Task 
        task={task} 
        key={task.id} 
        deleteTask={deleteTask}
        editTask ={editTask}
        />
      ))}
        </div>
        </>
        // on peut utiliser les chevrons vides
        // tout doit être encapsulé dans un seul container
    )
}





