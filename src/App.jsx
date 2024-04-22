import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { WINNING_COMBINATIONS } from "./winning-combinationf";
import GameOver from "./components/GameOver";
const INITIAL_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const PLAYERS = {
  X: "Player 1 ",
  O: "Player 2 ",
};

function changeActivePlayer(gameTurns) {
  let activePlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    activePlayer = "O";
  }
  return activePlayer;
}
function gameBoardSetting(initialBoard, gameTurns) {
  let gameBoard = [...initialBoard.map((item) => [...item])];

  for (const item of gameTurns) {
    const { square, player } = item;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}
function getWinner(winnerCombinations, players, gameBoard) {
  let winner;

  for (const combination of winnerCombinations) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = changeActivePlayer(gameTurns);
  const gameBoard = gameBoardSetting(INITIAL_BOARD, gameTurns);
  function handleAddPlayers(symbol, player) {
    setPlayers((prevPlaers) => {
      return {
        ...prevPlaers,
        [symbol]: player,
      };
    });
  }
  const winner = getWinner(WINNING_COMBINATIONS, players, gameBoard);
  const draw = !winner && gameTurns.length === 9;
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

  function remach() {
    setGameTurns((prevTurns) => {
      prevTurns = [];
      return prevTurns;
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
            handlePlayerAdd={handleAddPlayers}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            handlePlayerAdd={handleAddPlayers}
          />
        </ol>
        {(winner || draw) && <GameOver winner={winner} replay={remach} />}

        <GameBoard changePlayer={changeGameData} gameBoadrData={gameBoard} />
      </div>
    </main>
  );
}

export default App;
