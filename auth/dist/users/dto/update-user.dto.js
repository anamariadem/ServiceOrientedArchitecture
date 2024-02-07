"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_user_request_dto_1 = require("./create-user-request.dto");
class UpdateUserDto extends (0, swagger_1.PartialType)(create_user_request_dto_1.CreateUserRequestDto) {
}
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=update-user.dto.js.map