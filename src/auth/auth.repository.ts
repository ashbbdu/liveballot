import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/sequelize';
import { Auth } from './auth.entity';
import { Poll } from 'src/poll/poll.entitiy';
import { Option } from 'src/options/options.entity';
@Injectable()
export class AuthRepository {
  constructor(
    @InjectModel(Auth)
    private readonly authModel: typeof Auth,
  ) {}

  async findByEmail(email: string): Promise<Auth | null> {
    return this.authModel.findOne({ where: { email } });
  }

  async createUser(data: any): Promise<any> {
    const user = this.authModel.create(data);
    return user;
  }

  async getAllUsers() {
    return (await this.authModel.findAll({include : [{ model : Poll , include : [Option] }]}));
  }

  //   async createUser(payload: Partial<Auth>): Promise<Auth> {
  //     return this.authModel.create(payload);
  //   }

  //   async findById(id: number): Promise<Auth | null> {
  //     return this.authModel.findByPk(id);
  //   }

  //   async updateUser(id: number, updates: Partial<Auth>): Promise<[number, Auth[]]> {
  //     return this.authModel.update(updates, { where: { id }, returning: true });
  //   }

  //   async deleteUser(id: number): Promise<number> {
  //     return this.authModel.destroy({ where: { id } });
  //   }
}
