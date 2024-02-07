import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from Kafka microservice!';
  }

  handleUpdatePoints(data: any) {
    console.log('data ------------------->> ', data);
  }
}
