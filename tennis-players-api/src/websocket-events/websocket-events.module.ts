import { Module } from "@nestjs/common";
import { WebsocketEventsGateway } from "./websocket-events.gateway";
import { EventEmitterModule } from "@nestjs/event-emitter";

@Module({
  providers: [WebsocketEventsGateway],
  exports: [WebsocketEventsGateway],
  imports: [],
})
export class WebsocketEventsModule {}
