import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Users } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
  ) {
    console.log(jwtService, 'ol');
  }
  async login(user: Users) {
    const payload = { phone_number: user.phone_number, sub: user.user_id };
    return {
      msg: 'Login Successfull',
      access_token: this.jwtService.sign(payload),
    };
  }
  async validateUser(payload: any): Promise<Users> {
    return this.userService.findByPhone(payload.phone_number);
  }
}
