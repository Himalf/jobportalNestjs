import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Users } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';
import { access } from 'fs';
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
  ) {}
  async login(phone_number: number, password: string) {
    const user = await this.userService.findByPhone(phone_number);
    if (!user) {
      throw new UnauthorizedException('Given phone number is not valid');
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new UnauthorizedException('Phone number or password is Incorrect');
    }
    const payload = { phone_number: user.phone_number, sub: user.user_id };
    return {
      msg: 'login successfully',
      access_token: this.jwtService.sign(payload),
    };
  }
}
