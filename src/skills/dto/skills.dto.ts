import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';

export class CreateSkillDto {
  @IsString()
  skill_name: string;
}
export class UpdateSkillDto extends PartialType(CreateSkillDto) {}
