import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { UserDTO } from './dtos/auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  async register(data: UserDTO) {    
    try {
      const existingUser = await this.authRepository.findByEmail(data.email);
      console.log(existingUser , "eis");
      if (existingUser) {
        throw new ConflictException('User already registered');
      }

      const { firstName, lastName, email, password } = data;
      const createdUser = await this.authRepository.createUser(data);
      
      if (!createdUser) {
        throw new InternalServerErrorException('Failed to create user');
      }

      return {
        message: 'User created successfully',
        userId: createdUser.id,
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
}
