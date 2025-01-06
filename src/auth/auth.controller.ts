import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}
  @Post('login')
  async login(
    @Body('phone_number') phone_number: number,
    @Body('password') password: string,
  ) {
    const user = await this.userService.validateUser(phone_number, password);
    return this.authService.login(user);
  }
}
