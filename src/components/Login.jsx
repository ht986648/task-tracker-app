// src/components/Login.js

import React, { useState } from "react";
import { saveUsername } from "../utils/localStorage";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      saveUsername(username);
      onLogin(username);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 transition-colors duration-300">
      <div className="w-full max-w-sm bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl flex flex-col items-center hover:shadow-blue-200 dark:hover:shadow-blue-900 transition-shadow duration-300">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
          Task Tracker
        </h1>
        <p className="text-gray-500 dark:text-gray-300 text-center mb-6">
          Organize your day, beautifully.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5 w-full">
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 text-lg transition duration-200 hover:border-blue-400"
            autoFocus
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white py-3 px-4 rounded-xl font-bold text-lg shadow-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
