// src/components/TaskList.jsx

import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onToggle, onDelete, onEdit }) => {
  if (!tasks.length) {
    return (
      <div className="text-center text-gray-500 py-10">
        No tasks to show.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;
