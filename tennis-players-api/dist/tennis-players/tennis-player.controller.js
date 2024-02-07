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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TennisPlayerController = void 0;
const tennis_player_service_1 = require("./tennis-player.service");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let TennisPlayerController = class TennisPlayerController {
    constructor(tennisPlayerService) {
        this.tennisPlayerService = tennisPlayerService;
    }
    findAll() {
        return this.tennisPlayerService.getAll();
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TennisPlayerController.prototype, "findAll", null);
TennisPlayerController = __decorate([
    (0, swagger_1.ApiTags)("TennisPlayer"),
    (0, common_1.Controller)("tennis-player"),
    __metadata("design:paramtypes", [tennis_player_service_1.TennisPlayerService])
], TennisPlayerController);
exports.TennisPlayerController = TennisPlayerController;
//# sourceMappingURL=tennis-player.controller.js.map