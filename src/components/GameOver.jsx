import React from "react";

export default function GameOver({ isGameOver }) {
  return (
    <div className="game-over">
      {isGameOver && (
        <h2 className="game-over-title">
          <span>G</span>
          <span>a</span>
          <span>m</span>
          <span>e</span>
          <span> </span>
          <span>O</span>
          <span>v</span>
          <span>e</span>
          <span>r</span>
          <span>!</span>
        </h2>
      )}
    </div>
  );
}
