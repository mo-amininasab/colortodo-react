import React from "react";

function TitleForm() {
  return (
    <form className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Add a todo"
        className="appearance-none bg-gray-900 text-white text-sm px-3 py-2 w-1/2 rounded-l-md border-2 border-purple-900 focus:outline-none focus:border focus:border-purple-500"
      />
      <button className="bg-gradient-to-r from-blue-700 to-purple-700 text-sm px-3 py-2 text-white rounded-r-md border-2 border-l-0 border-purple-800">
        Add Todo
      </button>
    </form>
  );
}

export default TitleForm;
