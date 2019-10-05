import { Locations } from "../constants";

export interface SpyfallRoomConfig {
  roundDuration: number;
  locationType: Locations;
}

export const createRoomConfig = (
  roundDuration: number,
  locationType: Locations
): SpyfallRoomConfig => {
  return {
    roundDuration: roundDuration,
    locationType: locationType
  };
};
