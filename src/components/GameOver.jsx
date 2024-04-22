export default function GameOver({ winner, replay }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} is Won!!!</p>}
      {!winner && <p>Ok, It's draw!!!</p>}
      <p>
        <button onClick={replay}>Remach!!!</button>
      </p>
    </div>
  );
}
