import React from "react";
import calcWinner from "../../utils";
import Board from "./Board";
import MovesHistory from "./MovesHistory";

export default function Game() {
  const [value, setValue] = React.useState("X");
  const [historyOfMoves, setHistoryOfMoves] = React.useState([
    [...Array(9).fill("")],
  ]);

  //console.log("history", historyOfMoves);
  const [step, setStep] = React.useState(0);
  //const [squares, setSquares] = React.useState(Array(9).fill(""));
  const [isGameOver, setIsGameOver] = React.useState(false);
  const winner = calcWinner(historyOfMoves[step]);
  //console.log("winner", winner);
  //console.log("step", step);
  //console.log("history current", historyOfMoves[step]);
  //console.log("isGameOver  ", isGameOver);
  //console.log([[Array(9).fill("")]]);
  React.useEffect(() => {
    if (winner) {
      setIsGameOver(true);

      /*let timeout = setTimeout(() => {
        setIsGameOver(false);
        setValue("X");
        setStep(0);
        setHistoryOfMoves([Array(9).fill("")]);
      }, 3000);

      return () => clearTimeout(timeout);*/
    }
  }, [winner]);

  function clickHandler(e) {
    if (isGameOver) {
      return;
    }
    const currentSquares = [...historyOfMoves[step]];

    currentSquares[e.target.id] = value;
    setHistoryOfMoves((prev) => {
      return [...prev, currentSquares];
    });

    setStep((prev) => prev + 1);
    setValue((prev) => (prev === "X" ? "O" : "X"));
  }

  function handleHistory(e) {
    const currentStep = e.target.dataset.history;
    const currentMove = historyOfMoves[currentStep];
    console.log(currentStep);
    setStep(currentStep);
    console.log(currentMove);
    return currentMove;
  }

  return (
    <div className="game">
      <Board
        value={value}
        squares={historyOfMoves[step]}
        clickHandler={clickHandler}
        isGameOver={isGameOver}
        winner={winner}
      />
      <MovesHistory
        historyOfMoves={historyOfMoves}
        handleHistory={handleHistory}
        winner={winner}
        step={step}
      />
    </div>
  );
}
