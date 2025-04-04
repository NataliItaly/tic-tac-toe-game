import React from "react";

export default function MovesHistory({
  historyOfMoves,
  handleHistory,
  winner,
  step,
}) {
  const historySteps = historyOfMoves.map((move, i, arr) => {
    return (
      <li className={"moves-item"} key={i}>
        <button
          className={`moves-btn ${i == step && "moves-current"}`}
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
