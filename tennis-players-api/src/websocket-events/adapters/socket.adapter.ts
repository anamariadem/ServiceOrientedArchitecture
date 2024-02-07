import { IoAdapter } from "@nestjs/platform-socket.io";
import { ServerOptions } from "socket.io";
import { INestApplicationContext } from "@nestjs/common";

export class SocketAdapter extends IoAdapter {
  public constructor(private readonly app: INestApplicationContext) {
    super(app);
  }

  createIOServer(
    port: number,
    options?: ServerOptions & {
      namespace?: string;
      server?: any;
    }
  ) {
    console.log("port createIOServer------------------->> ", port);
    return super.createIOServer(port, {
      ...options,
      cors: {
        origin: ["http://127.0.0.1:3000", "http://localhost:3000/"],
        methods: ["GET", "POST"],
        // credentials: true,
      },
    });
  }
}
