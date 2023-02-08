import React from "react";

const Todo = ({ todo, handleSetComplete, handleDelete }) => {
  const { id, title, completed } = todo;
  return (
    <div className="flex items-center p-2 text-LightTheme-DarkGrayishBlue3 dark:text-DarkTheme-LightGrayishBlue bg-LightTheme-LightGray dark:bg-DarkTheme-DarkDesaturatedBlue border-b border-solid border-gray-600 justify-between">
      <div className="flex items-center">
        {completed ? (
          <div onClick={() => handleSetComplete(id)} className="bg-gradient-to-tl  from-checkGradient-200 to-checkGradient-100 p-1 rounded-full cursor-pointer">
            <img className="h-4 w-4" src='/check-icon.svg' alt='Check Icon' />
          </div>
        ) : (
          <span onClick={() => handleSetComplete(id)} className={`border border-DarkTheme-DarkGrayishBlue2 border-solid p-3 rounded-full cursor-pointer hover:border-DarkTheme-LightGrayishBlue transition-all duration-300 ease-in-out`}>
          </span>
            )
        }
        <p className={"pl-3 " + (completed && "line-through text-LightTheme-LightGrayishBlue2 dark:text-DarkTheme-DarkGrayishBlue2")}>
          {title}
        </p>
      </div>
      

      <svg onClick={() => handleDelete(id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-DarkTheme-DarkGrayishBlue2 h-5 w-5 cursor-pointer transition-all duration-300 ease-in hover:text-DarkTheme-LightGrayishBlue transition-all duration-300 ease-in-out">
        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
      </svg>
    </div>
  );
};

export { Todo };
