import { IsNotEmpty, IsNumber } from 'class-validator';

export class createUserSkillsDto {
  @IsNumber()
  @IsNotEmpty()
  user_id: number;
  @IsNumber()
  @IsNotEmpty()
  skill_id: number;
}
