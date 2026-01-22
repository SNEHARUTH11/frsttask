import React from "react";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className="group flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-500/30">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="w-5 h-5 cursor-pointer text-purple-600 focus:ring-purple-500 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 transition-all"
        />

        <span
          className={`text-base font-medium ${
            todo.completed
              ? "line-through text-gray-400 dark:text-gray-500 decoration-purple-500/50"
              : "text-gray-700 dark:text-gray-200"
          } transition-colors duration-200`}
        >
          {todo.text}
        </span>
      </div>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-50 text-red-500 hover:bg-red-500 hover:text-white px-3 py-1 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md font-medium text-sm opacity-0 group-hover:opacity-100 focus:opacity-100"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
