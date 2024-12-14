import React, { useEffect, useState } from 'react'
import { getAllTask,createTask, updateTask, deleteTask } from './api/api';
import ListTask from './ListTask';
import './task.css';

 function Task() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({title: '', description: ''});
    


    // Fetch tasks on component mount
     useEffect(() => {
         const fetchTasks = async () => {
             const data = await getAllTask();
            console.log('Data fetched successfully:', data);
            setTasks(data);
             console.log("Updated task state:", tasks);
        };
         fetchTasks();
     }, []);

     // Add a task
     const handleAddTask = async (e) => {
         e.preventDefault();
         if (!newTask.title) return alert('Task title is required!');
        const task = await createTask(newTask);
         alert('task added successfully:', task);
         setTasks([...tasks, task]);
         setNewTask({ title: '', description: '' });
     };

     // Update a task
    
    //   const handleUpdateTask = async (id, status) => {
    //       const updatedTask = await updateTask(id, { status });
    //      console.log('Updated Task:', updatedTask);
    //      setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
        
    //  };

     // Delete a task
     const handleDeleteTask = async (id) => {
         await deleteTask(id);
         setTasks(tasks.filter((task) => task.id !== id));
     };


  return (
    <div className='task-container'>
            <div className='task-content'>
                    <h1>My Task Management System</h1>
                    <div className='task-input'>
                        <form>
                            <input 
                            value={newTask.title}
                            type='text'
                             placeholder='Title'
                             onChange={e => setNewTask({...newTask, title: e.target.value})}
                             />
                            <input
                            value={newTask.description}
                             type='text'
                              placeholder='Description'
                              onChange={e => setNewTask({...newTask, description: e.target.value})}
                              />
                            <button onClick={handleAddTask}>Add Task</button>
                        </form>

                    </div>
            </div>

            <ListTask
            tasks = {tasks}
            // handleUpdateTask = {handleUpdateTask}
              handleDeleteTask ={handleDeleteTask}
              />
    </div>
  )
}

export default Task;