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
import { Moon, Sun } from "lucide-react";

function getInitialDarkMode() {
  const stored = localStorage.getItem("darkMode");
  if (stored !== null) return stored === "true";
  // Optionally, use system preference as fallback
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function App() {
  
  const [username, setUsername] = useState(getUsername());
  const [tasks, setTasks] = useState(loadTasks());
  const [filter, setFilter] = useState("All");
  const [editTask, setEditTask] = useState(null);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const addTask = ({ title, description, priority, dueDate, tags }) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      dueDate,
      tags,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks([newTask, ...tasks]);
  };

  const updateTask = ({ title, description, priority, dueDate, tags }) => {
    setTasks(
      tasks.map((t) =>
        t.id === editTask.id
          ? { ...t, title, description, priority, dueDate, tags }
          : t
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

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "Completed") return task.completed;
      if (filter === "Pending") return !task.completed;
      return true;
    })
    .filter((task) => {
      if (!search.trim()) return true;
      const q = search.toLowerCase();
      return (
        task.title.toLowerCase().includes(q) ||
        (task.description && task.description.toLowerCase().includes(q)) ||
        (task.tags && task.tags.some((tag) => tag.toLowerCase().includes(q)))
      );
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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 transition-colors">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 transition-colors">
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Welcome, {username}
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode((d) => !d)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              title="Toggle dark mode"
            >
              {darkMode ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-gray-700" />
              )}
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition"
            >
              Logout
            </button>
          </div>
        </header>

        <TaskForm
          onSubmit={editTask ? updateTask : addTask}
          editTask={editTask}
        />

        <TaskFilter filter={filter} setFilter={setFilter} counts={counts} />

        <SearchBar value={search} onChange={setSearch} />

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
