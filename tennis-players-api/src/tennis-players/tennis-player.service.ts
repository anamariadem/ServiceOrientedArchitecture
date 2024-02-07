import { TennisPlayer } from "./entities/tennis-player.entity";
import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ClientKafka } from "@nestjs/microservices";

@Injectable()
export class TennisPlayerService {
  constructor(
    @InjectRepository(TennisPlayer)
    private readonly tennisPlayerRepository: Repository<TennisPlayer>
  ) // @Inject("POINTS_SERVICE") private readonly pointsClient: ClientKafka
  {}

  getAll() {
    return this.tennisPlayerRepository.find();
  }

  // updatePoints(updatePointsDto: { playerId: string; points: number }) {
  //   this.pointsClient.emit("points_update", updatePointsDto);
  // }
}
