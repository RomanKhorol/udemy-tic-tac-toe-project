export default function GameBoard({ changePlayer, gameBoadrData }) {
  //   const [gameBoard, setGameBoard] = useState(initialBoard);
  //   function hadleClick(rowIndex, colomIndex) {
  //     setGameBoard((prevBoard) => {
  //       const updatedBoard = [...prevBoard.map((innerArray) => [...innerArray])];
  //       updatedBoard[rowIndex][colomIndex] = playerSymbol;
  //       changePlayer();
  //       return updatedBoard;
  //     });
  //   }
  return (
    <ol id="game-board">
      {gameBoadrData.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, columnIndex) => (
              <li key={columnIndex}>
                <button
                  onClick={() => changePlayer(rowIndex, columnIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
