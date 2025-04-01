import React from "react";
import Square from "./Square";
import GameOver from "./GameOver";
import NewGame from "./NewGame";

export default function Board() {
  const [value, setValue] = React.useState("X");
  const [squares, setSquares] = React.useState(Array(9).fill(""));
  const [isGameOver, setIsGameOver] = React.useState(false);
  //console.log("squares: ", squares);
  //console.log(value);

  React.useEffect(() => {
    let timeout = setTimeout(() => {
      setIsGameOver(false);
      setValue("X");
      const newSquares = squares.map((sq) => "");
      setSquares(newSquares);
    }, 5000);

    //return clearTimeout(timeout);
  }, [isGameOver]);

  function clickHandler(e) {
    const newSquares = squares.map((sq, i) => (e.target.id == i ? value : sq));
    setSquares(newSquares);
    setValue((prev) => (prev === "X" ? "0" : "X"));

    setIsGameOver(newSquares.every((sq) => sq !== ""));
  }

  const squaresElems = squares.map((sq, i) => (
    <Square key={i} id={i} clickHandler={clickHandler}>
      {sq}
    </Square>
  ));

  return (
    <>
      {!isGameOver && <NewGame />}
      <GameOver isGameOver={isGameOver} />
      <div className="board">{squaresElems}</div>;
    </>
  );
}
