import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { HealthModule } from "./health/health.module";
import { configuration, IConfig, validate } from "./public/configuration";
import { AuthModule } from "./auth/auth.module";
import { HttpModule } from "@nestjs/axios";

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
    HealthModule,
    AuthModule,
    HttpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
