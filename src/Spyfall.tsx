import React, { useState, useEffect, useContext } from "react";
import "./Spyfall.css";
import { SpyfallContext } from "./SpyfallContext";
import { GameState, Locations } from "./constants";
import { SpyfallPayload, getEmptyPayload } from "./models/SpyfallPayload";
import { createRoomConfig } from "./models/SpyfallRoomConfig";
import CreateControls from "./components/CreateControls";
import GameLobby from "./components/GameLobby";
import JoinLobby from "./components/JoinLobby";
import SpyfallGame from "./components/SpyfallGame";

const Spyfall: React.FC = () => {
  const [gameState, setGameState] = useState(GameState.SPLASH);
  const context = useContext(SpyfallContext);
  const [gamePayload, setGamePayload] = useState<SpyfallPayload>(
    getEmptyPayload()
  );
  const [userID, setUserID] = useState("");

  useEffect(() => {
    context.init();

    const awaitPayload = context.receivePayload();
    awaitPayload.subscribe((payload: SpyfallPayload) => {
      setUserID(context.getID());
      setGamePayload(payload);
      if (payload.inSession) {
        setGameState(GameState.INGAME);
      } else {
        setGameState(GameState.LOBBY);
      }
    });

    return function cleanup() {
      context.disconnect();
    };
  }, []);

  const controls = (
    <>
      <div className="title">Welcome to Spyfall</div>
      <div className="controls">
        <div className="button-container">
          <button
            onClick={() => {
              setGameState(GameState.CREATE);
            }}
          >
            New Game
          </button>
          <button
            onClick={() => {
              setGameState(GameState.JOIN);
            }}
          >
            Join Game
          </button>
        </div>
      </div>
    </>
  );

  const handleCreateSubmit = (
    desiredName: string,
    lState: Locations,
    desiredDuration: number
  ) => {
    context.createRoom(createRoomConfig(desiredDuration, lState), desiredName);
  };

  const handleLeave = () => {
    context.leave(gamePayload.roomName);
    setGamePayload(getEmptyPayload());
    setGameState(GameState.SPLASH);
  };

  const handleStartGame = (roomName: string) => {
    context.startGame(roomName);
  };

  const handleEndGame = (roomName: string) => {
    context.endGame(roomName);
  };

  const handleChangeName = (roomName: string, desiredName: string) => {
    context.changeUsername(roomName, desiredName);
  };

  return (
    <div className="spyfall-wrapper">
      <div className="spyfall">
        {gameState === GameState.SPLASH && controls}
        {gameState === GameState.CREATE && (
          <CreateControls
            onGameStateChange={setGameState}
            onSubmit={handleCreateSubmit}
          />
        )}
        {gameState === GameState.JOIN && (
          <JoinLobby
            onSubmit={(accessCode: string, desiredName: string) => {
              context.join(accessCode, desiredName);
            }}
            requestBack={() => setGameState(GameState.SPLASH)}
          />
        )}
        {gameState === GameState.LOBBY && (
          <GameLobby
            userID={userID}
            payload={gamePayload}
            leaveLobby={handleLeave}
            startGame={handleStartGame}
            changeName={handleChangeName}
          />
        )}
        {gameState === GameState.INGAME && (
          <SpyfallGame
            userID={userID}
            payload={gamePayload}
            handleEndGame={handleEndGame}
            handleLeaveGame={handleLeave}
          />
        )}
      </div>
    </div>
  );
};

export default Spyfall;
