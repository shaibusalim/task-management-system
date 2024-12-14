import React from 'react';
import './ListTask.css';
import { useState } from 'react';

function ListTask({tasks=[], handleDeleteTask}) {

  const [completedTask, setCompletedTask] = useState({});

  const markTaskAsCompleted = (taskId) => {
      setCompletedTask((prev) => ({
        ...prev,
        [taskId]: true,
      }));
  }

  return (
    <div className="task-list-container">
  {tasks.length === 0 ? (
    <p className="no-tasks">No tasks available. Please add a task.</p>
  ) : (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <h3 className="task-title">{task.title}</h3>
          <p className="task-description">{task.description}</p>
          <p className="task-status">Status: {completedTask[task.id]? "Task Completed":"Pending"}</p>
          <div className="task-buttons">

            <button
              className="update"
              onClick={() =>
               markTaskAsCompleted(task.id)
              }
            >
              Mark as Completed
            </button>
           
            <button className="delete" onClick={() => handleDeleteTask(task.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  )}
</div>


  )
}

export default ListTask