// src/components/TaskItem.jsx

import React from "react";

const TaskItem = ({ task, onToggle, onDelete, onEdit }) => {
  return (
    <div
      className={`flex justify-between items-start bg-white p-4 rounded-xl shadow mb-4 transition ${
        task.completed ? "opacity-60 line-through bg-green-50" : ""
      }`}
    >
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
        {task.description && (
          <p className="text-gray-600 mt-1">{task.description}</p>
        )}
        <small className="text-gray-400 text-sm mt-2 block">
          {new Date(task.createdAt).toLocaleString()}
        </small>
      </div>
      <div className="flex flex-col items-center ml-4 space-y-2">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
        </label>
        <button
          onClick={() => onEdit(task)}
          className="p-2 bg-yellow-100 hover:bg-yellow-200 rounded-full transition"
        >
          ✏️
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="p-2 bg-red-100 hover:bg-red-200 rounded-full transition"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
