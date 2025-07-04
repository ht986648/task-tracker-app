// src/App.jsx

import React, { useEffect, useState } from "react";
import Login from "./components/Login.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import TaskFilter from "./components/TaskFilter.jsx";
import SearchBar from "./components/SearchBar.jsx";
import {
  loadTasks,
  saveTasks,
  getUsername,
  clearUsername,
} from "./utils/localStorage";

function App() {
  
  const [username, setUsername] = useState(getUsername());
  const [tasks, setTasks] = useState(loadTasks());
  const [filter, setFilter] = useState("All");
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = ({ title, description }) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks([newTask, ...tasks]);
  };

  const updateTask = ({ title, description }) => {
    setTasks(
      tasks.map((t) =>
        t.id === editTask.id ? { ...t, title, description } : t
      )
    );
    setEditTask(null);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id) => {
    if (window.confirm("Delete this task?")) {
      setTasks(tasks.filter((t) => t.id !== id));
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  });

  const counts = {
    all: tasks.length,
    completed: tasks.filter((t) => t.completed).length,
    pending: tasks.filter((t) => !t.completed).length,
  };

  const handleLogout = () => {
    clearUsername();
    setUsername(null);
  };

  if (!username) {
    return <Login onLogin={setUsername} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6">
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Welcome, {username}
          </h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition"
          >
            Logout
          </button>
        </header>

        <TaskForm
          onSubmit={editTask ? updateTask : addTask}
          editTask={editTask}
        />

        <TaskFilter filter={filter} setFilter={setFilter} counts={counts} />

        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onEdit={setEditTask}
        />
      </div>
    </div>
  );
}

export default App;
