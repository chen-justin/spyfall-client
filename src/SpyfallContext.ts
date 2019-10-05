import React, { createContext, useContext } from "react";
import { SocketService } from "./SocketService";

export const SpyfallContext: React.Context<SocketService> = createContext(
  new SocketService()
);

// functional component context hook
export const useSpyfallContext = () => useContext(SpyfallContext);
