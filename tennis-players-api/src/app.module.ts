import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { HealthModule } from "./health/health.module";
import { configuration, IConfig, validate } from "./public/configuration";
import { TennisPlayer } from "./tennis-players/entities/tennis-player.entity";
import { TennisPlayerModule } from "./tennis-players/tennis-player.module";
import { JwtModule } from "@nestjs/jwt";
import { AuthModule } from "./auth/auth.module";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { WebsocketEventsModule } from "./websocket-events/websocket-events.module";
import { EventEmitterModule } from "@nestjs/event-emitter";

// todo: add all entities here
const ENTITIES = [TennisPlayer];

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        // `config/${process.env.NODE_ENV || 'development'}.env`,
        "config/development.env",
      ],
      load: [configuration],
      isGlobal: true,
      cache: true,
      validate,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (config: ConfigService<IConfig>) => {
        return {
          type: "postgres",
          host: config.get("DB_HOST"),
          port: config.get("DB_PORT"),
          username: config.get("DB_USERNAME"),
          password: config.get("DB_PASSWORD"),
          database: config.get("DB_DATABASE"),
          entities: ENTITIES,
          synchronize: true,
          namingStrategy: new SnakeNamingStrategy(),
        };
      },
      inject: [ConfigService],
    }),
    AuthModule,
    HealthModule,
    TennisPlayerModule,
    WebsocketEventsModule,
    EventEmitterModule.forRoot({
      maxListeners: 100,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
