// src/components/TaskFilter.jsx

import React from "react";

const TaskFilter = ({ filter, setFilter, counts }) => {
  const types = [
    { key: "All", label: `All (${counts.all})` },
    { key: "Completed", label: `Completed (${counts.completed})` },
    { key: "Pending", label: `Pending (${counts.pending})` },
  ];

  return (
    <div className="flex justify-center space-x-4 bg-white p-4 rounded-xl shadow-md mb-6">
      {types.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => setFilter(key)}
          className={`px-4 py-2 rounded-lg font-medium transition 
            ${
              filter === key
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;
