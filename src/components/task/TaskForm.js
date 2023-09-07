// components/Task/TaskForm.js

import React, { useState } from 'react';

const TaskForm = () => {
  // State to manage task input
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Low',
  });

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    console.log('Task Data:', task);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-semibold mb-4">Create New Task</h2>
      <form onSubmit={handleTaskSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-lg font-medium text-gray-700">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter task title"
            value={task.title}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-lg font-medium text-gray-700">Description:</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter task description"
            value={task.description}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div>
          <label htmlFor="dueDate" className="block text-lg font-medium text-gray-700">Due Date:</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={task.dueDate}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div>
          <label htmlFor="priority" className="block text-lg font-medium text-gray-700">Priority:</label>
          <select
            id="priority"
            name="priority"
            value={task.priority}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            required
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
