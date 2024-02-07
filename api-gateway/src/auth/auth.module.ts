import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { IConfig } from "../public/configuration";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy";

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService<IConfig>) => {
        return {
          secret: config.get("JWT_SECRET"),
          signOptions: { expiresIn: "6000s" },
        };
      },
    }),
    PassportModule,
  ],
  controllers: [],
  providers: [JwtStrategy],
  exports: [],
})
export class AuthModule {}
