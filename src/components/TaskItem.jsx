// src/components/TaskItem.jsx

import React from "react";
import { Pencil, Trash2 } from "lucide-react";

const TaskItem = ({ task, onToggle, onDelete, onEdit }) => {
  return (
    <div
      className={`flex justify-between items-start bg-white p-4 rounded-xl shadow mb-4 transition ${
        task.completed ? "opacity-60 line-through bg-green-50" : ""
      }`}
    >
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          {task.title}
          {task.priority && (
            <span
              className={`text-xs px-2 py-1 rounded-full font-bold bg-opacity-20 ${
                task.priority === "High"
                  ? "bg-red-500 text-red-700"
                  : task.priority === "Medium"
                  ? "bg-yellow-400 text-yellow-700"
                  : "bg-green-400 text-green-700"
              }`}
            >
              {task.priority}
            </span>
          )}
        </h3>
        {task.description && (
          <p className="text-gray-600 mt-1">{task.description}</p>
        )}
        {task.dueDate && (
          <div className="text-sm text-blue-600 mt-1">
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </div>
        )}
        {task.tags && task.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1">
            {task.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
        <small className="text-gray-400 text-sm mt-2 block">
          {task.createdAt ? new Date(task.createdAt).toLocaleString() : ""}
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
          <Pencil size={18} className="text-yellow-700" />
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="p-2 bg-red-100 hover:bg-red-200 rounded-full transition"
        >
          <Trash2 size={18} className="text-red-700" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
