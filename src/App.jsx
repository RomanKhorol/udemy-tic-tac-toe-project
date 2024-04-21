import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { WINNING_COMBINATIONS } from "./winning-combinationf";
const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function changeActivePlayer(gameTurns) {
  let activePlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    activePlayer = "O";
  }
  return activePlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = changeActivePlayer(gameTurns);
  let gameBoard = initialBoard;

  for (const item of gameTurns) {
    const { square, player } = item;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  function changeGameData(rowIndex, colIndex) {
    setGameTurns((prevGameTurns) => {
      let currentPlayer = changeActivePlayer(prevGameTurns);
      const updatedGameTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevGameTurns,
      ];

      return updatedGameTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard changePlayer={changeGameData} gameBoadrData={gameBoard} />
      </div>
    </main>
  );
}

export default App;
