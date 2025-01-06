import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Users } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {
    console.log(jwtService, 'ol');
  }
  async login(user: Users) {
    const payload = { phone_number: user.phone_number, sub: user.user_id };
    return {
      msg: 'Login Successfull',
      access_token: this.jwtService.sign(payload),
    };
  }
}
