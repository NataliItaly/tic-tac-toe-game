import React from "react";

export default function MovesHistory({ historyOfMoves }) {
  const historySteps = historyOfMoves.map((move, i) => {
    const moveNumber = i - 1;
    if (moveNumber > 0) {
      return (
        <li className="moves-item" key={i}>
          <button className="moves-btn">
            Go to {moveNumber === 1 ? "start" : `move ${moveNumber}`}
          </button>
        </li>
      );
    }
  });

  return (
    <div className="moves">
      <ul className="moves-list">{historySteps}</ul>
    </div>
  );
}
