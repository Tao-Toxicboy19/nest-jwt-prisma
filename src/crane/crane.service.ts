import { Body, Injectable, Post } from '@nestjs/common';
import { Role } from 'src/common/enum/role.enum';
import { PrismaService } from 'src/prisma/prisma.service';
import { CraneDto } from './dto';
import { Crane } from './type';
import { Roles } from 'src/common/decorators/role.decorators';

@Injectable()
export class CraneService {
    constructor(private prisma: PrismaService) { }

    @Post()
    @Roles(Role.Admin)
    createCrane(@Body() dto: CraneDto): Promise<Crane> {
        return 
    }
}
