import React from "react";
import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleAddTodo = (e) => {
    if (e.key.toLowerCase() === "enter") {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <div className="mt-5 relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className="border border-gray-500 border-solid p-3 rounded-full"></span>
      </div>
      <input
        className="focus:shadow-lg font-inter  pl-12 w-full py-2 bg-LightTheme-LightGray dark:bg-DarkTheme-DarkDesaturatedBlue text-LightTheme-DarkGrayishBlue3 dark:text-DarkTheme-LightGrayishBlue rounded outline-none focus:shadow-checkGradient-200"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => handleAddTodo(e)}
        placeholder="Create a new todo..."
      />
    </div>
  );
};

export { TodoInput };
