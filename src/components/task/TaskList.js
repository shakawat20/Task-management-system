import React from 'react';

const TaskList=({ tasks, deleteTask, toggleTaskStatus }) =>{
  return (
    <div className="bg-gray-100 p-4 rounded shadow">
      <h2 className="text-xl mb-4">Task List</h2>
      <ul>
        {tasks.map((task) => (
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
}

export default TaskList;
