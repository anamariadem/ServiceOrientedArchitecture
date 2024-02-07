import { TennisPlayerService } from "./tennis-player.service";
import { Body, Controller, Get, Patch, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { TennisPlayer } from "./entities/tennis-player.entity";

@ApiTags("TennisPlayer")
@Controller("tennis-player")
export class TennisPlayerController {
  constructor(private readonly tennisPlayerService: TennisPlayerService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<TennisPlayer[]> {
    return this.tennisPlayerService.getAll();
  }

  // @Patch()
  // updatePoints(@Body() updatePointsDto: { playerId: string; points: number }) {
  //   this.tennisPlayerService.updatePoints(updatePointsDto);
  // }@Patch()
  // updatePoints(@Body() updatePointsDto: { playerId: string; points: number }) {
  //   this.tennisPlayerService.updatePoints(updatePointsDto);
  // }
}
