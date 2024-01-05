import React, { useState } from 'react';

function TeamDetail() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', dueDate: '', priority: '', assignee: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleTaskSubmit = () => {
    setTasks([...tasks, newTask]);
    setNewTask({ title: '', description: '', dueDate: '', priority: '', assignee: '' });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Management</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Create a New Task</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newTask.title}
          onChange={handleInputChange}
          className="border rounded-md p-2 mb-2"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newTask.description}
          onChange={handleInputChange}
          className="border rounded-md p-2 mb-2"
        />
        <input
          type="date"
          name="dueDate"
          value={newTask.dueDate}
          onChange={handleInputChange}
          className="border rounded-md p-2 mb-2"
        />
        <select
          name="priority"
          value={newTask.priority}
          onChange={handleInputChange}
          className="border rounded-md p-2 mb-2"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input
          type="text"
          name="assignee"
          placeholder="Assignee"
          value={newTask.assignee}
          onChange={handleInputChange}
          className="border rounded-md p-2 mb-2"
        />
        <button onClick={handleTaskSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Create Task
        </button>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Task List</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="border rounded-md p-4 mb-2">
              <strong className="text-lg">{task.title}</strong>
              <p className="mb-2">{task.description}</p>
              <p className="mb-1">Due Date: {task.dueDate}</p>
              <p className="mb-1">Priority: {task.priority}</p>
              <p className="mb-1">Assignee: {task.assignee}</p>
              {/* Add buttons for marking tasks as completed or in progress */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TeamDetail;
