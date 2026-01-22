import React from "react";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className="flex items-center justify-between bg-gradient-to-r from-white to-gray-50 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="w-5 h-5 cursor-pointer text-purple-600 focus:ring-purple-500 rounded"
        />

        <span
          className={`text-base font-medium ${
            todo.completed
              ? "line-through text-gray-500"
              : "text-gray-800"
          } transition-colors duration-200`}
        >
          {todo.text}
        </span>
      </div>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition-all duration-200 transform hover:scale-110 shadow-md"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
