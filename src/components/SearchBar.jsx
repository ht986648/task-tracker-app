// src/components/SearchBar.jsx

import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ value, onChange }) => {
  const inputRef = React.useRef(null);
  return (
    <div className="mb-6 relative">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search tasks..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="button"
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 focus:outline-none"
        onClick={() => inputRef.current && inputRef.current.focus()}
        tabIndex={-1}
      >
        <Search size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
