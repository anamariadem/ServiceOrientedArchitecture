import { TennisPlayerService } from "./tennis-player.service";
import { TennisPlayer } from "./entities/tennis-player.entity";
export declare class TennisPlayerController {
    private readonly tennisPlayerService;
    constructor(tennisPlayerService: TennisPlayerService);
    findAll(): Promise<TennisPlayer[]>;
}
