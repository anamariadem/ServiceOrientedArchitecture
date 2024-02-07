import { UsersService } from './users.service';
import { CreateUserRequestDto } from './dto/create-user-request.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserRequestDto): Promise<{
        password: string;
        firstName: string;
        lastName: string;
        email: string;
    } & User>;
    findAll(): Promise<User[]>;
    getByEmail(email: string): Promise<User>;
    findOne(id: string): Promise<User>;
    update(id: string, project: UpdateUserDto): Promise<User>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
