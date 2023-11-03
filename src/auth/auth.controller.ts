import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from 'src/common/decorators/pubilc.decorator';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('local/login')
    loginLocal(@Body() dto: AuthDto) {
        return this.authService.loginLocal(dto);
    }
}