import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const Task = () => {
  const [tasks, setTasks] = useState( JSON.parse(localStorage.getItem('tasks')) || []);
  
  console.log(tasks)

  // Function to add tasks
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Load tasks from local storage when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);

  }, []);
 
  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);



  // Function to delete tasks
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    
  };

  // Function to toggle task status
const toggleTaskStatus = (taskId) => {
  const updatedTasks = tasks.map((task) => {
    if (task.id === taskId) {
      // Toggle the status among 'completed', 'inProgress', and 'pending'
      let newStatus = 'completed';

      if (task.status === 'completed') {
        newStatus = 'inProgress';
      } else if (task.status === 'inProgress') {
        newStatus = 'pending';
      }

      return {
        ...task,
        status: newStatus,
      };
    }
    return task;
  });
  setTasks(updatedTasks);
};



  return (
    <div className="App">
      <div className="flex">
        <div className="w-1/2 pr-4 ">
          <TaskForm addTask={addTask} />
        </div>
        <div className="w-1/2 pl-4">
          <TaskList tasks={tasks} deleteTask={deleteTask} toggleTaskStatus={toggleTaskStatus} />
        </div>
      </div>
    </div>
  );
};

export default Task;
