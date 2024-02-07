"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TennisPlayerModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tennis_player_entity_1 = require("./entities/tennis-player.entity");
const tennis_player_service_1 = require("./tennis-player.service");
const tennis_player_controller_1 = require("./tennis-player.controller");
let TennisPlayerModule = class TennisPlayerModule {
};
TennisPlayerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([tennis_player_entity_1.TennisPlayer]),
        ],
        controllers: [tennis_player_controller_1.TennisPlayerController],
        providers: [tennis_player_service_1.TennisPlayerService],
        exports: [tennis_player_service_1.TennisPlayerService],
    })
], TennisPlayerModule);
exports.TennisPlayerModule = TennisPlayerModule;
//# sourceMappingURL=tennis-player.module.js.map