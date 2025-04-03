import React from "react";
import calcWinner from "../../utils";
import Board from "./Board";
import MovesHistory from "./MovesHistory";

export default function Game() {
  const [value, setValue] = React.useState("X");
  const [historyOfMoves, setHistoryOfMoves] = React.useState([
    [...Array(9).fill("")],
  ]);
  console.log(historyOfMoves);
  const [step, setStep] = React.useState(0);
  //const [squares, setSquares] = React.useState(Array(9).fill(""));
  const [isGameOver, setIsGameOver] = React.useState(false);
  const winner = calcWinner(historyOfMoves[step]);
  console.log("winner", winner);
  //console.log("step", step);
  //console.log("history current", historyOfMoves[step]);
  //console.log("isGameOver  ", isGameOver);
  //console.log([[Array(9).fill("")]]);
  React.useEffect(() => {
    if (winner) {
      setIsGameOver(true);

      let timeout = setTimeout(() => {
        setIsGameOver(false);
        setValue("X");
        //const newSquares = historyOfMoves[step].map((sq) => "");
        setStep(0);
        setHistoryOfMoves([Array(9).fill("")]);
        //setHistoryOfMoves([newSquares]);
      }, 2500);

      return () => clearTimeout(timeout);
    }
  }, [winner]);

  function clickHandler(e) {
    console.log("e target id ", e.target.id);
    console.log("e target id ", historyOfMoves[step][e.target.id] != "");

    if (isGameOver) {
      return;
    }
    //console.log(historyOfMoves[step]);
    const currentSquares = [...historyOfMoves[step]];
    //console.log("current squares1 ", currentSquares);

    currentSquares[e.target.id] = value;
    /* const newSquares = currentSquares.map((sq, i) =>
      e.target.id == i ? value : sq
    ); */
    //console.log("current squares2 ", currentSquares);
    //console.log(step);
    /* const newSquares = squares.map((sq, i) =>
      e.target.id == i ? value : sq
    ); */
    //setSquares(newSquares);
    setHistoryOfMoves((prev) => {
      console.log("prev", prev);
      return [...prev, currentSquares];
    });

    console.log(historyOfMoves);

    setStep((prev) => prev + 1);
    setValue((prev) => (prev === "X" ? "O" : "X"));
    console.log(historyOfMoves);
    //setIsGameOver(newSquares.every((sq) => sq !== ""));
  }

  return (
    <>
      <Board
        value={value}
        squares={historyOfMoves[historyOfMoves.length - 1]}
        clickHandler={clickHandler}
        isGameOver={isGameOver}
        winner={winner}
      />
      {!isGameOver && <MovesHistory historyOfMoves={historyOfMoves} />}
    </>
  );
}
