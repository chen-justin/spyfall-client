import React, { useState } from "react";

interface JoinLobbyProps {
  onSubmit(accessCode: string, desiredName: string): void;
  requestBack(): void;
}

const JoinLobby: React.FC<JoinLobbyProps> = props => {
  const [accessCode, setAccessCode] = useState("");
  const [desiredName, setDesiredName] = useState("");
  return (
    <>
      <div className="title">Welcome to Spyfall</div>
      <div className="join-controls">
        <input
          className="textfield"
          type="text"
          value={accessCode}
          placeholder="Access code"
          onChange={e => setAccessCode(e.target.value)}
        />
        <input
          className="textfield"
          type="text"
          value={desiredName}
          placeholder="Your name"
          onChange={e => setDesiredName(e.target.value)}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem"
          }}
        >
          <div className="button-container">
            <button onClick={() => props.onSubmit(accessCode, desiredName)}>
              Join
            </button>
            <button onClick={() => props.requestBack()}>Back</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinLobby;
