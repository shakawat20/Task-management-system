// components/Dashboard/Dashboard.js


import React, { useState, useEffect } from 'react';
 import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/Firebase';
import Navbar from '../navbar/Navbar';
const Home = () => {
  // State to store task data
  const [tasks, setTasks] = useState([]);
  const [user,loading,error]=useAuthState(auth)
 
  

  // Simulated data for demonstration purposes
  const sampleTasks = [
    { id: 1, title: 'Task 1', status: 'completed' },
    { id: 2, title: 'Task 2', status: 'in progress' },
    { id: 3, title: 'Task 3', status: 'pending' },
    // Add more task data as needed
  ];

  useEffect(() => {
    // In a real application, you would fetch task data from your backend or storage.
    // For this example, we're using simulated data.
    setTasks(sampleTasks);
  }, []);

  // Calculate task statistics
  const completedTasks = tasks.filter((task) => task.status === 'completed').length;
  const inProgressTasks = tasks.filter((task) => task.status === 'in progress').length;
  const pendingTasks = tasks.filter((task) => task.status === 'pending').length;

  return (
    <div>
     
       <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-xl font-semibold mb-2">Completed Tasks</h3>
          <p className="text-3xl font-bold">{completedTasks}</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-xl font-semibold mb-2">In Progress Tasks</h3>
          <p className="text-3xl font-bold">{inProgressTasks}</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-xl font-semibold mb-2">Pending Tasks</h3>
          <p className="text-3xl font-bold">{pendingTasks}</p>
        </div>
      </div>
      <h3 className="text-xl font-semibold mt-8">Upcoming Tasks</h3>
      <ul className="list-disc list-inside">
        {/* Display a list of upcoming tasks here */}
        {tasks.map((task) => (
          <li key={task.id} className="mt-2">
            <span className="text-lg">{task.title}</span>
            <span className={`ml-2 text-${task.status === 'completed' ? 'green' : 'blue'}-500`}>
              Status: {task.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
    </div>
   
  );
};

export default Home;
