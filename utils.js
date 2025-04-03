export default function calcWinner(squares) {
  const winOptions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winOptions.length; i++) {
    const [x, y, z] = winOptions[i];
    //console.log([x, y, z]);

    if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
      return winOptions[i];
    }
  }
  return null;
}
