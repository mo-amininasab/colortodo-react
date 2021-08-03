import React from "react";

function Todo() {
  return (
    <div className="flex justify-between px-3 py-3 mx-4 mb-4 items-center bg-gradient-to-r from-blue-500 to-blue-700 rounded-md border-2 border-blue-600">
      <h1 className="text-white">Like and subscribe!!!</h1>
      <div className="flex">
        <svg
          className="w-6 h-6 text-gray-200 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <svg
          className="w-6 h-6 text-gray-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>{" "}
      </div>
    </div>
  );
}

export default Todo;
