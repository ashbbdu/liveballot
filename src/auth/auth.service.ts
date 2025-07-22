import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    async register(dto: any) {
        return "hii"
    // business logic (hash password, validate, save user)

  }
  
  async login(dto: any) {
    return "hi"
    // business logic (verify, issue tokens)
  }
}
