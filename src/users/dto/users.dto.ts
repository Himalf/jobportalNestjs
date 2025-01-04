import { IsEnum, IsNumber, IsString } from 'class-validator';
import { Roles } from './roles';
export class CreateUserDto {
  @IsString()
  name: string;
  @IsString()
  email: string;
  @IsString()
  password: string;
  @IsNumber()
  phone_number: number;
  @IsEnum(Roles)
  role: Roles;
}
