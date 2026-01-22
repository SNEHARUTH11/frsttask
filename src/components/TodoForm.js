import React from 'react';

function TodoForm({ input, setInput, addTodo }) {
  return (
    <div className="flex mb-6 shadow-lg rounded-lg overflow-hidden ring-1 ring-black/5 dark:ring-white/10">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-1 px-4 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 transition-colors placeholder-gray-400 dark:placeholder-gray-500"
      />
      <button
        onClick={addTodo}
        className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-3 font-semibold transition-all duration-200 shadow-md"
      >
        Add
      </button>
    </div>
  );
}

export default TodoForm;
