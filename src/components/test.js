import React from "react";
import calcWinner from "../../utils";
export default function Game() {
  const [value, setValue] = React.useState("X");
  const [historyOfMoves, setHistoryOfMoves] = React.useState([
    [...Array(9).fill("")],
  ]);
  const [step, setStep] = React.useState(0);
  const [isGameOver, setIsGameOver] = React.useState(false);
  const winner = calcWinner(historyOfMoves[step]);
  React.useEffect(() => {
    if (winner) {
      setIsGameOver(true);
      setHistoryOfMoves([[Array(9).fill("")]]);

      let timeout = setTimeout(() => {
        setIsGameOver(false);
        setValue("X");
        const newSquares = historyOfMoves[step].map((sq) => "");
        setHistoryOfMoves([newSquares]);
      }, 2500);
    }
  }, [winner]);

  function clickHandler(e) {
    if (winner) {
      setIsGameOver(true);
    } else {
      const currentSquares = [...historyOfMoves[step]];
      const newSquares = currentSquares.map((sq, i) =>
        e.target.id == i ? value : sq
      );
      console.log("new squares ", newSquares);
      setStep(historyOfMoves.length);
      setHistoryOfMoves((prev) => [...prev, newSquares]);
      setValue((prev) => (prev === "X" ? "O" : "X"));
      console.log(historyOfMoves);
      setIsGameOver(newSquares.every((sq) => sq !== ""));
    }
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
    </>
  );
}
