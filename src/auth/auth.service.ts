import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { Token } from './type';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async loginLocal(dto: AuthDto): Promise<Token> {
        const user = await this.usersService.findOne(dto.username)
        const isPasswordValid = await bcrypt.compare(dto.password, user.password);

        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const payload = { sub: user.id, username: user.username };
        const tokens = { access_token: await this.jwtService.signAsync(payload) }

        return tokens
    }
}
