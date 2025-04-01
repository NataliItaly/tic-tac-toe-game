import React from "react";

export default function Square({ children, clickHandler, id }) {
  return (
    <button
      className="square"
      id={id}
      onClick={clickHandler}
      disabled={children.length > 0}
    >
      {children}
    </button>
  );
}
