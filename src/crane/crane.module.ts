import { Module } from '@nestjs/common';
import { CraneController } from './crane.controller';
import { CraneService } from './crane.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CraneController],
  providers: [CraneService, PrismaService]
})
export class CraneModule { }
