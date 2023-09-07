// components/Task/TaskList.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TaskList = () => {
  // State to store task data
  const [tasks, setTasks] = useState([]);

  // Simulated data for demonstration purposes
  const sampleTasks = [
    { id: 1, title: 'Task 1', description: 'Complete project report', dueDate: '2023-09-30', priority: 'High', status: 'in progress' },
    { id: 2, title: 'Task 2', description: 'Prepare presentation slides', dueDate: '2023-10-15', priority: 'Medium', status: 'pending' },
    { id: 3, title: 'Task 3', description: 'Review client feedback', dueDate: '2023-09-20', priority: 'Low', status: 'completed' },
    // Add more task data as needed
  ];

  useEffect(() => {
    // In a real application, you would fetch task data from your backend or storage.
    // For this example, we're using simulated data.
    setTasks(sampleTasks);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-semibold mb-4">Task List</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Due Date</th>
            <th className="px-4 py-2">Priority</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="border px-4 py-2">{task.title}</td>
              <td className="border px-4 py-2">{task.description}</td>
              <td className="border px-4 py-2">{task.dueDate}</td>
              <td className="border px-4 py-2">{task.priority}</td>
              <td className={`border px-4 py-2 text-${task.status === 'completed' ? 'green' : 'blue'}-500`}>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to='/tasks/create'>Add Task</Link>
    </div>
  );
};

export default TaskList;
