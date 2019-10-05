export interface SpyfallPayload {
  roomName: string;
  roundDuration: number;
  locations: any[];
  users: Record<string, string>;
  inSession: boolean;
  location: string;
  startTime: number;
  endTime: number;
  spy: string;
  agents: Record<string, string>;
}

export const getEmptyPayload = (): SpyfallPayload => {
  return {
    roomName: "",
    roundDuration: 0,
    locations: [],
    users: {},
    inSession: false,
    location: "",
    startTime: 0,
    endTime: 0,
    spy: "",
    agents: {}
  };
};
