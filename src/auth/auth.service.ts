import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { UserDTO } from './dtos/auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  async register(data: UserDTO) {    
    const { password } = data;
    try {
      const existingUser = await this.authRepository.findByEmail(data.email);
      if (existingUser) {
        throw new ConflictException('User already registered');
      }

   
    const hashedPassword = await bcrypt.hash(password, 10);

    const payload = {...data , password : hashedPassword};
      const createdUser = await this.authRepository.createUser(payload);
      
      if (!createdUser) {
        throw new InternalServerErrorException('Failed to create user');
      }

      return {
        message: 'User created successfully',
        userId: createdUser.userId,
      };
    } catch (error) {
      if (
        error instanceof ConflictException ||
        error instanceof InternalServerErrorException
      ) {
        throw error;
      }

      throw new InternalServerErrorException('An unexpected error occurred');
    }
  }

//   async login ()
}
