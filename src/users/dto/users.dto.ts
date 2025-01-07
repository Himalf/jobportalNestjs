import {
  IsEnum,
  IsNumber,
  IsString,
  Max,
  max,
  Min,
  min,
} from 'class-validator';
import { Roles } from './roles';
import { PartialType } from '@nestjs/mapped-types';
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
export class UpdateUserDto extends PartialType(CreateUserDto) {}
