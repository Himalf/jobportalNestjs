import { Job } from 'src/jobs/entities/job.entity';
import { Skills } from 'src/skills/skills.entity';
import { Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class JobSkill {
  @PrimaryGeneratedColumn()
  job_skill_id: number;
  @ManyToOne(() => Job, (job) => job.jobSkill)
  job: Job;
  @ManyToOne(() => Skills, (skills) => skills.jobSkill)
  skills: Skills;
}
