import React, { useState } from 'react';

const TaskList = ({ tasks, deleteTask, toggleTaskStatus }) => {
  const [statusFilter, setStatusFilter] = useState('all');
  const [dueDateFilter, setDueDateFilter] = useState('all');

  // Function to check if a date is today
  const isToday = (date) => {
    const today = new Date();
    
    console.log(today)
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  // Function to check if a date is tomorrow
  const isTomorrow = (date) => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Check if date is a string and parse it to a Date object if needed
    if (typeof date === 'string') {
      date = new Date(date);
    }

    return (
      date.getDate() === tomorrow.getDate() &&
      date.getMonth() === tomorrow.getMonth() &&
      date.getFullYear() === tomorrow.getFullYear()
    );
  };

  // Function to check if a date is in the future
  const isFuture = (date) => {
    const today = new Date();
    return date > today;
  };

  // Filter tasks based on status and due date filters
  const filteredTasks = tasks.filter((task) => {
    const isStatusMatch =
      statusFilter === 'all' || task.status === statusFilter;
    const isDueDateMatch =
      dueDateFilter === 'all' ||
      (dueDateFilter === 'today' && isToday(task.dueDate)) ||
      (dueDateFilter === 'tomorrow' && isTomorrow(task.dueDate)) ||
      (dueDateFilter === 'future' && isFuture(task.dueDate));
    return isStatusMatch && isDueDateMatch;
  });

  return (
    <div className="bg-gray-100 p-4 rounded shadow">
      <h2 className="text-xl mb-4">Task List</h2>
      <div className="mb-4">
        <label htmlFor="statusFilter">Filter by Status:</label>
        <select
          id="statusFilter"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="ml-2 p-2 border rounded"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="inProgress">In Progress</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="dueDateFilter">Filter by Due Date:</label>
        <select
          id="dueDateFilter"
          value={dueDateFilter}
          onChange={(e) => setDueDateFilter(e.target.value)}
          className="ml-2 p-2 border rounded"
        >
          <option value="all">All</option>
          <option value="today">Today</option>
          <option value="tomorrow">Tomorrow</option>
          <option value="future">Future</option>
        </select>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id} className="mb-4 p-4 border rounded">
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p className="text-gray-700">{task.description}</p>
            <p className="text-gray-700">Due Date: {task.dueDate}</p>
            <p className="text-gray-700">Priority: {task.priority}</p>
            <p className="text-gray-700">
              Status: {task.status === 'completed'
                ? 'Completed'
                : task.status === 'inProgress'
                ? 'In Progress'
                : 'Pending'}
            </p>
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Delete
            </button>
            <button
              onClick={() => toggleTaskStatus(task.id)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2 ml-2"
            >
              {task.status === 'completed'
                ? 'Set In Progress'
                : task.status === 'inProgress'
                ? 'Mark Pending'
                : 'Mark Completed'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
