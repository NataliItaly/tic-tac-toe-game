import React from "react";

export default function MovesHistory({
  historyOfMoves,
  handleHistory,
  winner,
}) {
  const historySteps = historyOfMoves.map((move, i, arr) => {
    //if (moveNumber >= 0) {
    //{moveNumber === 1 ? "start" : `step ${i + 1}`}
    const currentStep = arr.length - 1;
    return (
      <li className={"moves-item"} key={i}>
        <button
          className={`moves-btn ${i == currentStep && "moves-current"}`}
          onClick={(e) => handleHistory(e)}
          data-history={i}
        >
          {i === 0
            ? "start"
            : winner && i === arr.length - 1
            ? "end"
            : `step ${i}`}
        </button>
      </li>
    );
    //}
  });

  return (
    <div className="moves">
      <ul className="moves-list">{historySteps}</ul>
    </div>
  );
}
