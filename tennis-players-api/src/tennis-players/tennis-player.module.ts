import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TennisPlayer } from "./entities/tennis-player.entity";
import { TennisPlayerService } from "./tennis-player.service";
import { TennisPlayerController } from "./tennis-player.controller";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [
    TypeOrmModule.forFeature([TennisPlayer]),
    // ClientsModule.register([
    //   {
    //     name: "POINTS_SERVICE",
    //     transport: Transport.KAFKA,
    //     options: {
    //       client: {
    //         clientId: "points",
    //         brokers: ["0.0.0.0:9092"],
    //       },
    //       consumer: {
    //         groupId: "points-consumer",
    //       },
    //     },
    //   },
    // ]),
  ],
  controllers: [TennisPlayerController],
  providers: [TennisPlayerService],
  exports: [TennisPlayerService],
})
export class TennisPlayerModule {}
