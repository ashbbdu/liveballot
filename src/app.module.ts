import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Sequelize } from 'sequelize-typescript';
import { AuthModule } from './auth/auth.module';
import { Auth } from './auth/auth.entity';
import { AuthController } from './auth/auth.controller';
import { AppService } from './app.service';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService
    ,{
    
     provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'ash@Compunnel09',
        database: 'liveballot-dev',
      });
      sequelize.addModels([Auth]);
      await sequelize.sync();
      return sequelize;
    }
  }],
})
export class AppModule {}
