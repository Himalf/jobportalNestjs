import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserSkillsDto {
  @IsNumber()
  @IsNotEmpty()
  user_id: number;
  @IsNumber()
  @IsNotEmpty()
  skill_id: number;
}

export class updateUserSkillsDto extends PartialType(CreateUserSkillsDto) {}
