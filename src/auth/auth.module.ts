import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthRepository } from './auth.repository';
import { SequelizeModule } from '@nestjs/sequelize';
import { Auth } from './auth.entity';
import { JwtModule } from '@nestjs/jwt';
@Module({
  
imports: [SequelizeModule.forFeature([Auth]) , JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],

  controllers: [AuthController],
  providers: [AuthService, AuthRepository],         
})
export class AuthModule {}
