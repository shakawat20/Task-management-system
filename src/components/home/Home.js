// components/Dashboard/Dashboard.js


import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/Firebase';
import Navbar from '../navbar/Navbar';
const Home = () => {
  // State to store task data
  const [tasks, setTasks] = useState([]);
  const [user, loading, error] = useAuthState(auth)



  // Simulated data for demonstration purposes
  const sampleTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  useEffect(() => {
    // In a real application, you would fetch task data from your backend or storage.
    // For this example, we're using simulated data.
    setTasks(sampleTasks);
  }, []);

  // Calculate task statistics
  const completedTasks = tasks.filter((task) => task.status === 'completed').length;
  const inProgressTasks = tasks.filter((task) => task.status === 'inProgress').length;
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
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                priority
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Due date
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td className="px-6 py-4 whitespace-nowrap text-lg">{task.title}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-${task.status === 'completed' ? 'green' : 'blue'}-500`}>
                  {task.status}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-${task.status === 'completed' ? 'green' : 'blue'}-500`}>
                  {task.priority}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-${task.status === 'completed' ? 'green' : 'blue'}-500`}>
                  {task.dueDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>

  );
};

export default Home;
