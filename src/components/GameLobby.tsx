import React, { useState } from "react";
import { SpyfallPayload } from "../models/SpyfallPayload";
import "./GameLobby.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCheck, faBan } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

interface GameLobbyProps {
  userID: string;
  payload: SpyfallPayload;
  leaveLobby(): void;
  startGame(roomName: string): void;
  changeName(roomName: string, desiredName: string): void;
}
const GameLobby: React.FC<GameLobbyProps> = props => {
  const [showCopy, setShowCopy] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(
    props.payload.users[props.userID]
  );
  const users = props.payload.users;
  const accessCode = props.payload.roomName;

  const youRow = (
    <>
      <span className="player-list-player-name">{users[props.userID]}</span>
      <span className="player-list-player-you">(you)</span>
      <span className="player-list-you-edit-button">
        <button
          className="name-edit-button"
          onClick={() => {
            setEditedName(users[props.userID]); //Set value back to current name
            setIsEditing(true);
          }}
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </span>
    </>
  );

  const pRow = (key: string) => {
    return <span className="player-list-player-name">{users[key]}</span>;
  };

  const editRow = (
    <div className="player-list-edit-row">
      <input
        value={editedName}
        onChange={e => {
          const text = e.target.value;
          if (text.length <= 30) {
            setEditedName(text);
          }
        }}
      />
      <button
        className="name-edit-button"
        onClick={() => {
          props.changeName(props.payload.roomName, editedName);
          setIsEditing(false);
        }}
      >
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button
        className="name-edit-button"
        onClick={() => {
          setIsEditing(false);
        }}
      >
        <FontAwesomeIcon icon={faBan} />
      </button>
    </div>
  );

  return (
    <div className="game-lobby-container">
      <div className="title">Waiting for Players...</div>
      <div className="game-lobby-access-line">
        <span className="game-lobby-access-text">Access Code</span>
        <div className="game-lobby-access-container">
          <div
            className={
              showCopy ? "game-lobby-copy-text show" : "game-lobby-copy-text"
            }
            onAnimationEnd={() => setShowCopy(false)}
          >
            Copied!
          </div>
          <button
            className="game-lobby-access-copy"
            onClick={() => {
              const copy = document.getElementById("access-code");
              if (copy) {
                let temp = document.createElement("input");
                temp.value = copy.textContent as string;
                document.body.appendChild(temp);
                temp.select();
                document.execCommand("copy");
                temp.remove();
                setShowCopy(true);
              }
            }}
          >
            <span id="access-code" className="game-lobby-access-code">
              {accessCode}
            </span>
            <FontAwesomeIcon icon={faCopy} />
          </button>
        </div>
      </div>
      <div className="player-list-container">
        {Object.keys(users).map((key, index) => {
          return (
            <div className="player-list-cell" key={key}>
              <span className="player-list-cell-number">{index + 1}</span>
              {props.userID !== key && pRow(key)}
              {props.userID === key && !isEditing && youRow}
              {props.userID === key && isEditing && editRow}
            </div>
          );
        })}
      </div>
      <div className="button-container">
        <button onClick={() => props.startGame(accessCode)}>Start Game</button>
        <button onClick={() => props.leaveLobby()}>Leave Game</button>
      </div>
    </div>
  );
};

export default GameLobby;
