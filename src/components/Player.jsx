import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlaerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function hadleChange(event) {
    setPlaerName(event.target.value);
  }
  function addPlayer() {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  }
  let playerNameTitle = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";
  if (isEditing) {
    playerNameTitle = (
      <input type="text" required value={playerName} onChange={hadleChange} />
    );
    btnCaption = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameTitle}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={addPlayer}>{btnCaption}</button>
    </li>
  );
}
