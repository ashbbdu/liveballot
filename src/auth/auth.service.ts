import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { UserDTO } from './dtos/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private jwtService: JwtService,
  ) {}

  async register(data: UserDTO) {
    const { password } = data;
    try {
      const existingUser = await this.authRepository.findByEmail(data.email);
      if (existingUser) {
        throw new ConflictException('User already registered');
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const payload = { ...data, password: hashedPassword };
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

  async login(data: any) {
    const { email, password } = data;
    const existingUser = await this.authRepository.findByEmail(email);
    if (!existingUser) {
      throw new ConflictException('User is not registered , kindly signup');
    }
    const hashedPassword = existingUser.password;

    try {
      const isMatch = await bcrypt.compare(password, hashedPassword);
      if (!isMatch) {
        throw new UnauthorizedException('Incorrect password');
      }
      const token = await this.jwtService.signAsync({
        email: existingUser.email,
        userId: existingUser.id,
      });
      const user = {...existingUser.dataValues , token , password : ""}
      return {
        message : "User logged in Successfully !",
        user,
        token,
      };
    } catch (e) {
      if (
        e instanceof UnauthorizedException ||
        e instanceof ConflictException
      ) {
        throw e;
      }
      throw new InternalServerErrorException(
        'Something went wrong while validating the password',
      );
    }
  }
}
