import { TennisPlayer } from "./entities/tennis-player.entity";
import { Repository } from "typeorm";
export declare class TennisPlayerService {
    private readonly tennisPlayerRepository;
    constructor(tennisPlayerRepository: Repository<TennisPlayer>);
    getAll(): Promise<TennisPlayer[]>;
}
