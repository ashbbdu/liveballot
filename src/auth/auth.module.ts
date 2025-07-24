import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthRepository } from './auth.repository';
import { SequelizeModule } from '@nestjs/sequelize';
import { Auth } from './auth.entity';
import { JwtModule } from '@nestjs/jwt';
import { Poll } from 'src/poll/poll.entitiy';
@Module({
  
imports: [SequelizeModule.forFeature([Auth , Poll]) , JwtModule.register({
      global: true,
      secret: `${process.env.JWT_SECRET_KEY}`,
      signOptions: { expiresIn: '3600s' },
    }),
  ],

  controllers: [AuthController],
  providers: [AuthService, AuthRepository],         
})
export class AuthModule {}
