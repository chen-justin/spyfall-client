import React, { useState } from "react";
import "./CreateControls.css";
import { GameState, Locations } from "../constants";

interface CreateControlsProps {
  onGameStateChange(gameState: GameState): any;
  onSubmit(
    desiredName: string,
    locationType: Locations,
    roundLength: number,
    locations: string[]
  ): any;
}

const CreateControls: React.FC<CreateControlsProps> = props => {
  const [displayName, setDisplayName] = useState("");
  const [locationState, setLocationState] = useState(Locations.SP1);
  const [desiredDuration, setDesiredDuration] = useState(8);
  const [locations, setLocations] = useState("");

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    setLocationState(parseInt(target.value));
  };

  const handleSubmit = () => {
    if (displayName === "" || desiredDuration < 1 || desiredDuration > 20) {
      //Handle errors somehow
      return;
    }
    if (locationState === Locations.CUSTOM && locations !== "") {
      const locs = locations.split(",");
      if (locs.length > 0) {
        props.onSubmit(displayName, locationState, desiredDuration, locs);
      }
    } else {
      props.onSubmit(displayName, locationState, desiredDuration, []);
    }
  };

  return (
    <>
      <div className="title">Welcome to Spyfall</div>
      <div className="create-controls">
        <input
          className="create-controls-name-input textfield"
          type="text"
          placeholder="Your Name"
          value={displayName}
          onChange={e => {
            const text = e.target.value;
            if (text.length <= 30) {
              setDisplayName(text);
            }
          }}
        ></input>
        <div className="create-controls-locations-container">
          <p>Locations</p>
          <form style={{ display: "flex", flexDirection: "column" }}>
            <div className="create-controls-radio">
              <input
                type="radio"
                name="loc"
                value={Locations.SP1}
                onChange={handleFormChange}
                defaultChecked
              />
              Spyfall 1 Locations
            </div>
            <div className="create-controls-radio">
              <input
                type="radio"
                name="loc"
                value={Locations.SP2}
                onChange={handleFormChange}
              />
              Spyfall 2 Locations
            </div>
            <div className="create-controls-radio">
              <input
                type="radio"
                name="loc"
                value={Locations.BOTH}
                onChange={handleFormChange}
              />
              Spyfall 1 and Spyfall 2 Locations
            </div>
            <div className="create-controls-radio">
              <input
                type="radio"
                name="loc"
                value={Locations.CUSTOM}
                onChange={handleFormChange}
              />
              Custom
            </div>
            <input
              className="create-controls-locations-input textfield"
              type="text"
              placeholder="Custom Locations"
              value={locations}
              onChange={e => {
                const text = e.target.value;
                setLocations(text);
              }}
            ></input>
          </form>
        </div>
        <div className="create-controls-container">
          <p>Round Length (minutes):</p>
          <input
            type="number"
            name="duration"
            value={desiredDuration}
            min="1"
            max="10"
            onChange={e => setDesiredDuration(parseInt(e.target.value))}
          ></input>
        </div>
        <div className="button-container">
          <button onClick={handleSubmit}>Create</button>
          <button
            onClick={() => {
              props.onGameStateChange(GameState.SPLASH);
            }}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateControls;
