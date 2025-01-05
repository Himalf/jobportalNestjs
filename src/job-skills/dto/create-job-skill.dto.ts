import { IsNotEmpty, IsNumber } from 'class-validator';
import { Job } from 'src/jobs/entities/job.entity';
import { ManyToOne } from 'typeorm';

export class CreateJobSkillDto {
  @IsNumber()
  @IsNotEmpty()
  job_id: number;
  @IsNumber()
  @IsNotEmpty()
  skill_id: number;
}
