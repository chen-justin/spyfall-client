import io from 'socket.io-client';
import { fromEvent, Observable } from 'rxjs';

export class SocketService {
  private socket: SocketIOClient.Socket = {} as SocketIOClient.Socket;

  public init (): SocketService {
    //Edit this when deployed.
    this.socket = io('localhost:8080');
    return this;
  }

  public join(room: string) {
      this.socket.emit('join', room);
  }

  public leave(room: string) {
      this.socket.emit('leave', room);
  }

  public changeUsername(name: string) {
      this.socket.emit('changename', name);
  }

  public onUserJoin(): Observable<string> {
      return fromEvent(this.socket, 'userPayload')
  }

  // disconnect - used when unmounting
  public disconnect (): void {
    this.socket.disconnect();
  }
}