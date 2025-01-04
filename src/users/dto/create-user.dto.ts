import { IsEmail, IsEnum, IsNumber, IsString } from 'class-validator';

enum UserRole {
  ADMIN = 'admin',
  EMPLOYER = 'employer',
  JOB_SEEKER = 'job seeker',
}

export class CreateUserDto {
  @IsString()
  name: string;
  @IsString()
  password: string;
  @IsNumber()
  phone_number: number;
  @IsEnum(UserRole)
  role: UserRole;
}
