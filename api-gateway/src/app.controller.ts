import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UnauthorizedException,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { HttpService } from "@nestjs/axios";
import { InternalServerErrorException } from "@nestjs/common/exceptions/internal-server-error.exception";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("/login")
  login(@Body() { email, password }: { email: string; password: string }) {
    return this.httpService.axiosRef
      .post("http://authentication-api:3001/auth/login", { email, password })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        if (err.response.status === 401) {
          throw new UnauthorizedException();
        }

        throw new InternalServerErrorException();
      });
  }

  @Get("/tennis-players")
  getAllTennisPlayers(@Req() request: Request) {
    const authorization = request.headers["authorization"];

    return this.httpService.axiosRef
      .get("http://tennis-player-api:3002/tennis-player", {
        headers: { Authorization: authorization },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        if (err.response.status === 401) {
          throw new UnauthorizedException();
        }

        throw new InternalServerErrorException();
      });
  }
}
