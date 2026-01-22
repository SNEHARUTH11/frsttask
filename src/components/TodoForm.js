import React from 'react';

function TodoForm({ input, setInput, addTodo }) {
  return (
    <div className="flex mb-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
        className="flex-1 border-2 border-gray-300 rounded-l-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
      />
      <button
        onClick={addTodo}
        className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 text-white px-6 py-3 rounded-r-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
      >
        Add
      </button>
    </div>
  );
}

export default TodoForm;

