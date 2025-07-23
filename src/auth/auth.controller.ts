import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO } from './dtos/auth.dto';

@Controller('auth')
export class AuthController {
    constructor (private readonly authService : AuthService) {};
    @Post('/register')
    register(@Body ()data : UserDTO)  {
        return this.authService.register(data);
    }

    @Post('/login')
    login(@Body ()data : any)  {
        return this.authService.login(data);
    }

    @Get("/test")
    test () {
        return "hii"
    }
  }



