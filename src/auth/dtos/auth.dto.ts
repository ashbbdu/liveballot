import { IsEmail, IsNotEmpty, IsOptional, IsString, IsNumber, MinLength, MaxLength } from 'class-validator';

export class UserDTO {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()           
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8, { message: 'password must be at least 8 characters' })
  @MaxLength(12, { message: 'password must be at most 12 characters' })
  password: string;

  @IsOptional()
  @IsNumber()
  profilePicture?: number;  
}
