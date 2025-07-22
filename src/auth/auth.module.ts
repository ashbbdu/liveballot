import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthRepository } from './auth.repository';
import { SequelizeModule } from '@nestjs/sequelize';
import { Auth } from './auth.entity';

@Module({
imports: [SequelizeModule.forFeature([Auth])],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository],         
})
export class AuthModule {}
