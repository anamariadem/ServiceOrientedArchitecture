"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const health_module_1 = require("./health/health.module");
const configuration_1 = require("./public/configuration");
const tennis_player_entity_1 = require("./tennis-players/entities/tennis-player.entity");
const tennis_player_module_1 = require("./tennis-players/tennis-player.module");
const auth_module_1 = require("./auth/auth.module");
const websocket_events_module_1 = require("./websocket-events/websocket-events.module");
const event_emitter_1 = require("@nestjs/event-emitter");
const ENTITIES = [tennis_player_entity_1.TennisPlayer];
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: [
                    "config/development.env",
                ],
                load: [configuration_1.configuration],
                isGlobal: true,
                cache: true,
                validate: configuration_1.validate,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: async (config) => {
                    return {
                        type: "postgres",
                        host: config.get("DB_HOST"),
                        port: config.get("DB_PORT"),
                        username: config.get("DB_USERNAME"),
                        password: config.get("DB_PASSWORD"),
                        database: config.get("DB_DATABASE"),
                        entities: ENTITIES,
                        synchronize: true,
                        namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
                    };
                },
                inject: [config_1.ConfigService],
            }),
            auth_module_1.AuthModule,
            health_module_1.HealthModule,
            tennis_player_module_1.TennisPlayerModule,
            websocket_events_module_1.WebsocketEventsModule,
            event_emitter_1.EventEmitterModule.forRoot({
                maxListeners: 100,
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map