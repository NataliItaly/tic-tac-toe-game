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
  //console.log("squares: ", squares);
  //console.log(value);

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

  return (
    <>
      <NewGame isGameOver={isGameOver} />
      <GameOver isGameOver={isGameOver} />
      <div className="board">{squaresElems}</div>
      {!isGameOver && (
        <div className="next">
          Next player is <span className="next-player">{value}</span>
        </div>
      )}
    </>
  );
}
