import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { CraneModule } from './crane/crane.module';

@Module({
  imports: [AuthModule, UsersModule, CraneModule],
  controllers: [],
  providers: [{
    provide: APP_GUARD,
    useClass: AuthGuard
  }],
})

export class AppModule { }