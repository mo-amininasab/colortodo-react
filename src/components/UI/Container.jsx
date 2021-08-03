import React from "react";

function Container(props) {
  return (
    <div className="flex flex-col justify-start pt-3 sm:p-3 bg-gray-900 w-full min-h-screen sm:min-h-full sm:mt-6 sm:mb-6 sm:max-w-md sm:rounded-xl sm:mx-auto md:mt-12 md:mb-12 md:max-w-lg lg:max-w-xl">
      {props.children}
    </div>
  );
}

export default Container;
