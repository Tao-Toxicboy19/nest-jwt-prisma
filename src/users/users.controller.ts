import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto';
import { User } from './type';
import { Public } from 'src/common/decorators/pubilc.decorator';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Public()
    @Post('local/register')
    @HttpCode(HttpStatus.CREATED)
    registerLocal(@Body() dto: UserDto): Promise<User> {
        return this.usersService.registerLocal(dto);
    }
}
