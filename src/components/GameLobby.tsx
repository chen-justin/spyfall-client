import React from 'react';
import { SpyfallPayload } from '../models/SpyfallPayload';
import './GameLobby.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faShareSquare } from '@fortawesome/free-solid-svg-icons';

interface GameLobbyProps {
    userID: string;
    payload: SpyfallPayload;
    leaveLobby(): void;
    startGame(roomName: string): void;
}
const GameLobby: React.FC<GameLobbyProps> = (props) => {
    const users = props.payload.users;
    const accessCode = props.payload.roomName;

    return (
        <div className="game-lobby-container">
            <div className="title">
                Waiting for Players...
            </div>
            <div className="game-lobby-access-line">
                Access Code: 
                <span id="access-code" className="game-lobby-access-code">
                    {accessCode}
                </span>
                <button>
                    <FontAwesomeIcon icon={faShareSquare} />
                </button>
            </div>
            <div className = "player-list-container">
                {Object.keys(users).map((key, index) => {
                    return (
                        <div className="player-list-cell" key={key}>
                            <span className="player-list-cell-number">{index + 1}</span>
                            <span className="player-list-player-name">{users[key]}</span>
                            {key === props.userID && <span className="player-list-player-you">(you)</span>}
                            {key === props.userID && <span className="player-list-you-edit-button">
                                <button className="name-edit-button" onClick={() => {
                                    console.log("Clicked edit!");
                                }}>
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                            </span>}
                        </div>
                    )
                })}
            </div>
            <div className="button-container">
                <button onClick={() => props.startGame(accessCode)}> 
                    Start Game
                </button>
                <button onClick={() => props.leaveLobby()}> 
                    Leave Game
                </button>
            </div>
        </div>
    )
}

export default GameLobby;