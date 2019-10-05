import io from 'socket.io-client';
import { fromEvent, Observable } from 'rxjs';
import { SpyfallRoomConfig } from './models/SpyfallRoomConfig';
import { SpyfallPayload } from './models/SpyfallPayload';
import {SpyfallEvent} from './constants'

export class SocketService {
  private socket: SocketIOClient.Socket = {} as SocketIOClient.Socket;

  public init (): SocketService {
    //Edit this when deployed.
    this.socket = io('localhost:8080');
    return this;
  }

  public getID(): string {
    return this.socket.id;
  }

  public join(room: string, desiredName: string) {
    this.socket.emit(SpyfallEvent.JOIN, room, desiredName);
  }

  public createRoom(config: SpyfallRoomConfig, desiredName: string) {
    this.socket.emit(SpyfallEvent.CREATEROOM, config, desiredName);
  }

  public startGame(roomName: string) {
    this.socket.emit(SpyfallEvent.STARTGAME, roomName);
  }

  public endGame(roomName: string) {
    this.socket.emit(SpyfallEvent.ENDGAME, roomName);
  }

  public leave(room: string) {
      this.socket.emit(SpyfallEvent.LEAVE, room);
  }

  public changeUsername(name: string) {
      this.socket.emit(SpyfallEvent.CHANGENAME, name);
  }

  public receivePayload(): Observable<SpyfallPayload> {
    return fromEvent(this.socket, SpyfallEvent.RECEIVEPAYLOAD)
  }
  
  // disconnect - used when unmounting
  public disconnect (): void {
    this.socket.disconnect();
  }
}