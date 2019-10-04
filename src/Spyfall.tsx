import React, {useState, useEffect, useContext} from 'react';
import './Spyfall.css';
import {SpyfallContext} from './SpyfallContext';

enum GameState {
  SPLASH,
  CREATE,
  JOIN,
  LOBBY,
  INGAME
}

const Spyfall: React.FC = () => {
  const [rooms, setRooms] = useState([]);
  const [gameState, setGameState] = useState(GameState.SPLASH);
  const [userName, setUserName] = useState("");
  const [roundTime, setRoundTime] = useState(0);
  const context = useContext(SpyfallContext)

  useEffect(() => {
    context.init();

    const observeRoom = context.onUserJoin();
    observeRoom.subscribe((rooms: any) => {
      setRooms(rooms);
    });

    return function cleanup() {
      context.disconnect();
    }
  }, [])

  const controls = (
    <div className="controls">
      <button onClick={() => {
        setGameState(GameState.CREATE)
      }}>
        New Game
      </button>
      <button onClick={() => {
        setGameState(GameState.JOIN)
      }}>
        Join Game
      </button>
    </div>
  )

  //TODO: REMOVE INLINE STYLES
  const createControls = (
    <div className="create-controls">
      <input style={{width:"80%"}}type="text" value={userName} placeholder="Your  Name" onChange={(e) => {
        setUserName(e.target.value);
      }}></input>
      <div className="locations-container">
        <p>Locations</p>
        <form>
          <div style={{display: "flex", alignItems: "center"}}>
            <input type="radio" name="loc" value="Spyfall 1 Locations"/> Spyfall 1 Locations
          </div>
          <div style={{display: "flex", alignItems: "center"}}>
            <input type="radio" name="loc" value="Spyfall 2 Locations"/> Spyfall 2 Locations
          </div>
          <div style={{display: "flex", alignItems: "center"}}>
            <input type="radio" name="loc" value="Custom"/> Custom
          </div>
        </form>
      </div>
      <div style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}>
        <p style={{fontWeight: "bold", marginBottom: "1rem"}}>Round Length (minutes):</p>
        <input type="number" name="duration" min="1" max="10"></input>
      </div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "1rem",
      }}>
        <button onClick={() => {
          setGameState(GameState.LOBBY)
        }}>
          Create
        </button>
        <button onClick={() => {
          setGameState(GameState.SPLASH)
        }}>
          Back
        </button>
      </div>
    </div>
  )

  const joinControls = (
    <div className="join-controls">
        <input type="text" value={userName} placeholder="Access code" ></input>
        <input type="text" value={userName} placeholder="Your name" ></input>
        <div style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
        }}>
        <button onClick={() => {
          setGameState(GameState.LOBBY)
        }}>
          Join
        </button>
        <button onClick={() => {
          setGameState(GameState.SPLASH)
        }}>
          Back
        </button>
      </div>
    </div>
  )


  return (
    <div className="spyfall-wrapper">
      <div className="spyfall">
        <div className="title">
          Welcome to Spyfall
        </div>
        {gameState === GameState.SPLASH && controls}
        {gameState === GameState.CREATE && createControls}
        {gameState === GameState.JOIN && joinControls}

        {/* <button onClick={() => {
          context.join("room1");
        }}>
          Join room 1
        </button>
        <button onClick={() => {
          context.leave("room1");
          setRooms([]);
        }}>
          Leave room 1
        </button> */}
        {/* <div className="Lobby">
          {rooms.map((room) => {
            return (
              <div>
                {room}
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
}

export default Spyfall;
