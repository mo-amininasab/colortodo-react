import React from "react";

function Background(props) {

  return (
    <div className="bg-gradient-to-b flex from-blue-900 to-blue-600 w-full h-full min-h-screen">
      {props.children}
    </div>
  );
}

export default Background;
