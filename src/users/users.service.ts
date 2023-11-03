import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './type';
import { UserDto } from './dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async registerLocal(dto: UserDto): Promise<User> {
        try {
            const hash = await bcrypt.hash(dto.password, 10);
            const newUser = await this.prisma.user.create({
                data: {
                    username: dto.username,
                    password: hash,
                }
            })

            return newUser
        } catch (error) {
            throw new UnauthorizedException();
        }
    }

    async findOne(username: string): Promise<User> {
        return this.prisma.user.findUnique({
            where: {
                username,
            },
        });
    }
}
