import React from "react";

export default function Square({
  children,
  clickHandler,
  id,
  isGameOver,
  winner,
}) {
  const classes = `square ${
    isGameOver && winner && winner.includes(Number(id)) ? "square-filled" : ""
  }`;

  return (
    <button
      className={classes}
      id={id}
      onClick={(e) => clickHandler(e)}
      disabled={children.length > 0}
    >
      {children}
    </button>
  );
}
