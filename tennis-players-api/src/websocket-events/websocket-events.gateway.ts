import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { from, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Server, Socket } from "socket.io";
import { EventEmitter2 } from "@nestjs/event-emitter";

@WebSocketGateway(3002, { cors: true })
export class WebsocketEventsGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
  @WebSocketServer() private server: Server;
  wsClients = [];

  constructor(private eventEmitter: EventEmitter2) {
    console.log("<< ----- WebsocketEventsGateway constructor ----- >>");
  }

  afterInit() {
    console.log("WebsocketEventsGateway Init");
  }

  handleConnection(client: Socket) {
    console.log("<< ----- handleConnection ----- >>");
    // client.emit("serverDeployed", { event: "serverDeployed", data: {} });
    this.wsClients.push(client);
    this.broadcast("welcome", "Welcome to the app!", client);
  }

  handleDisconnect(client) {
    this.wsClients.splice(this.wsClients.indexOf(client), 1);
    this.broadcast("disconnect", {}, client);
  }

  private broadcast(event, message: any, currentClient = null) {
    for (const c of this.wsClients) {
      if (!currentClient || (currentClient && c !== currentClient)) {
        c.send(event, message);
      }
    }
  }

  @SubscribeMessage("events")
  public findAll(): Observable<any> {
    return from([1, 2, 3]).pipe(
      map((item) => {
        return { event: "events", data: item };
      })
    );
  }

  @SubscribeMessage("joinRoom")
  joinRoom(client: Socket, room: string): void {
    client.join(room);
  }

  @SubscribeMessage("leaveRoom")
  leaveRoom(client: Socket, room: string): void {
    client.leave(room);
  }

  @SubscribeMessage("publish")
  handlePublishEvent(client: Socket, data: any): void {
    const { event, eventData } = data;

    client.broadcast.emit(event, eventData);
  }

  @SubscribeMessage("cancelStreaming")
  cancelStreaming(client: Socket, data: any): void {
    this.eventEmitter.emit(data.event, data);
  }

  emit(room: string, event: string, data?: any) {
    this.server.to(room).emit(event, data);
  }
}
