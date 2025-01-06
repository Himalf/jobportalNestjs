import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

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
    return this.authService.login(phone_number, password);
  }
}
