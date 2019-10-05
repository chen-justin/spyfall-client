import React, { useState, useEffect } from "react";
import { SpyfallPayload } from "../models/SpyfallPayload";
import "./SpyfallGame.css";

interface SpyfallGameProps {
  userID: string;
  payload: SpyfallPayload;
  handleEndGame(roomName: string): void;
  handleLeaveGame(): void;
}

const SpyfallGame: React.FC<SpyfallGameProps> = props => {
  const payload = props.payload;
  const users = props.payload.users;
  const locations = payload.locations;
  const location = payload.location;
  const isSpy = props.userID === payload.spy;
  const notSpy = props.userID !== payload.spy;
  const timeBetween = Math.floor((payload.endTime - payload.startTime) / 1000);
  const [time, setTime] = useState(timeBetween);
  const [endGame, setEndGame] = useState(false);

  //Timer
  useEffect(() => {
    let interval: any = null;
    if (time <= 0) {
      setEndGame(true);
    } else if (!endGame && payload.inSession) {
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payload.inSession, time]);

  const minutesRem = Math.floor(time / 60);
  const secondsRem = time % 60;
  const formattedSeconds = secondsRem.toString().padStart(2, "0");

  return (
    <div className="spyfall-game-container">
      <div className="spyfallgame-timer">
        {minutesRem + ":" + formattedSeconds}
      </div>
      <div className="spyfallgame-role-banner">
        {isSpy && <span>You are the spy!</span>}
        {notSpy && (
          <div className="agent-banner">
            <div>
              You are <strong>not</strong> the spy!
            </div>
            <div className="agent-info">
              <div>The location: {location}</div>
              <div>Your role: {payload.agents[props.userID]} </div>
            </div>
          </div>
        )}
      </div>
      <div className="spyfallgame-info-container">
        <p>Players</p>
        <div className="grid-container">
          {Object.keys(users).map((key, index) => {
            const displayName = users[key];
            return (
              <div key={key} className="grid-item">
                <p>{displayName}</p>
              </div>
            );
          })}
        </div>
        <p>Locations</p>
        <div className="grid-container">
          {locations.map(location => {
            const title = location["title"];
            return (
              <div key={title} className="grid-item">
                <p>{title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="spyfallgame-controls">
        <div className="button-container">
          <button onClick={() => props.handleEndGame(payload.roomName)}>
            End Game
          </button>
          <button onClick={props.handleLeaveGame}>Leave Game</button>
        </div>
      </div>
    </div>
  );
};

export default SpyfallGame;
