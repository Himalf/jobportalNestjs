import { IsString } from 'class-validator';

export class createSkillDto {
  @IsString()
  skill_name: string;
}
