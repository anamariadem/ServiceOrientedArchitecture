import { TennisPlayer } from "./entities/tennis-player.entity";
import { Repository } from "typeorm";
import { ClientKafka } from "@nestjs/microservices";
export declare class TennisPlayerService {
    private readonly tennisPlayerRepository;
    private readonly pointsClient;
    constructor(tennisPlayerRepository: Repository<TennisPlayer>, pointsClient: ClientKafka);
    getAll(): Promise<TennisPlayer[]>;
    updatePoints(updatePointsDto: {
        playerId: string;
        points: number;
    }): void;
}
