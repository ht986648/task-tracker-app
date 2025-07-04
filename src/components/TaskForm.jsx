import React, { useState, useEffect } from "react";

const TaskForm = ({ onSubmit, editTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setDescription(editTask.description);
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form
      className="bg-white p-4 rounded-xl shadow-md flex flex-col gap-3 mb-6"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Task title"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition font-medium"
      >
        {editTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
