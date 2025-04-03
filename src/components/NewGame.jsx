import React from "react";

export default function NewGame({ isGameOver }) {
  return (
    <div className="new-game">
      {!isGameOver && (
        <h2 className="new-game-title">
          <span>N</span>
          <span>e</span>
          <span>w</span>
          <span> </span>
          <span>g</span>
          <span>a</span>
          <span>m</span>
          <span>e</span>
          <span>!</span>
        </h2>
      )}
    </div>
  );
}
