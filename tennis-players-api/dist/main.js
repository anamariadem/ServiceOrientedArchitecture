"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const express_1 = require("express");
const helmet_1 = __importDefault(require("helmet"));
const app_module_1 = require("./app.module");
const socket_adapter_1 = require("./websocket-events/adapters/socket.adapter");
async function bootstrap() {
    console.log("Starting application...");
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: {
            origin: "*",
            methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
            preflightContinue: false,
            optionsSuccessStatus: 204,
            maxAge: 600,
        },
    });
    console.log("Application created...");
    app.use((0, helmet_1.default)());
    app.use((0, express_1.json)({ limit: "30mb" }));
    app.use((0, express_1.urlencoded)({ extended: true, limit: "30mb" }));
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const configService = app.get(config_1.ConfigService);
    const port = configService.get("PORT");
    console.log("port ------------------->> ", port);
    app.useWebSocketAdapter(new socket_adapter_1.SocketAdapter(app));
    await app.listen(port, "127.0.0.1", async () => {
        console.log(`Your Application is running on: ${await app.getUrl()}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map