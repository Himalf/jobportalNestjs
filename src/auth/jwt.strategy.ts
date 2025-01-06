import { UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: '1522',
    });
  }

  async validate(payload: any) {
    const user = await this.userService.findByPhone(payload.phone_number);
    if (!user) {
      throw new UnauthorizedException('Not authorized User');
    }
    return user;
  }
}
