import React from "react";
import Square from "./Square";
import GameOver from "./GameOver";
import NewGame from "./NewGame";

export default function Board({
  value,
  squares,
  isGameOver,
  clickHandler,
  winner,
}) {
  const squaresElems = squares.map((sq, i) => (
    <Square
      key={i}
      id={i}
      clickHandler={clickHandler}
      isGameOver={isGameOver}
      winner={winner}
    >
      {sq}
    </Square>
  ));

  const message = !isGameOver ? (
    <p>
      Next is <span className="next-player">{value}</span>
    </p>
  ) : winner ? (
    <p>
      Winner is <span>{value === "X" ? "O" : "X"}</span>
    </p>
  ) : (
    <p>Drawn game</p>
  );

  return (
    <>
      <NewGame isGameOver={isGameOver} />
      <GameOver isGameOver={isGameOver} />
      <div className="board">{squaresElems}</div>
      <div className="next">{message}</div>
    </>
  );
}
