import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateJobSkillDto {
  @IsNumber()
  @IsNotEmpty()
  job_id: number;
  @IsNumber()
  @IsNotEmpty()
  skill_id: number;
}
