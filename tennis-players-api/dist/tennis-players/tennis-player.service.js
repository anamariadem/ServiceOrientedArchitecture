"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TennisPlayerService = void 0;
const tennis_player_entity_1 = require("./entities/tennis-player.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const microservices_1 = require("@nestjs/microservices");
let TennisPlayerService = class TennisPlayerService {
    constructor(tennisPlayerRepository, pointsClient) {
        this.tennisPlayerRepository = tennisPlayerRepository;
        this.pointsClient = pointsClient;
    }
    getAll() {
        return this.tennisPlayerRepository.find();
    }
    updatePoints(updatePointsDto) {
        this.pointsClient.emit("points_update", updatePointsDto);
    }
};
TennisPlayerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tennis_player_entity_1.TennisPlayer)),
    __param(1, (0, common_1.Inject)("POINTS_SERVICE")),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        microservices_1.ClientKafka])
], TennisPlayerService);
exports.TennisPlayerService = TennisPlayerService;
//# sourceMappingURL=tennis-player.service.js.map