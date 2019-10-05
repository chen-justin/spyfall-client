export enum GameState {
    SPLASH,
    CREATE,
    JOIN,
    LOBBY,
    INGAME
}

export enum Locations {
    SP1,
    SP2,
    BOTH,
    CUSTOM
}

export enum SpyfallEvent {
    CONNECT = 'connect',
    DISCONNECT = 'disconnect',
    JOIN = 'join',
    LEAVE = 'leave',
    CREATEROOM = 'createroom',
    CHANGENAME = 'changename',
    STARTGAME = 'startgame',
    ENDGAME = 'endgame',
    RECEIVEPAYLOAD = 'receivepayload'
}