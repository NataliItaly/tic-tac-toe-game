import React from "react";
import calcWinner from "../../utils";
import Board from "./Board";

export default function Game() {
  const [value, setValue] = React.useState("X");
  const [squares, setSquares] = React.useState(Array(9).fill(""));
  const [isGameOver, setIsGameOver] = React.useState(false);
  const winner = calcWinner(squares);
  console.log("winner", winner);
  console.log("isGameOver  ", isGameOver);

  React.useEffect(() => {
    if (winner) {
      setIsGameOver(true);
      let timeout = setTimeout(() => {
        setIsGameOver(false);
        setValue("X");
        const newSquares = squares.map((sq) => "");
        setSquares(newSquares);
      }, 3000);

      //return clearTimeout(timeout);
    }
  }, [winner]);

  function clickHandler(e) {
    if (winner) {
      //console.log(winner);
      setIsGameOver(true);
    } else {
      const newSquares = squares.map((sq, i) =>
        e.target.id == i ? value : sq
      );
      setSquares(newSquares);
      setValue((prev) => (prev === "X" ? "0" : "X"));

      setIsGameOver(newSquares.every((sq) => sq !== ""));
    }
  }

  return (
    <Board
      value={value}
      squares={squares}
      clickHandler={clickHandler}
      isGameOver={isGameOver}
      winner={winner}
    />
  );
}
