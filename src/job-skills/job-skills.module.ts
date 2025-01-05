import { Module } from '@nestjs/common';
import { JobSkillsService } from './job-skills.service';
import { JobSkillsController } from './job-skills.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobSkill } from './entities/job-skill.entity';
import { Job } from 'src/jobs/entities/job.entity';
import { Skills } from 'src/skills/skills.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobSkill, Job, Skills])],
  controllers: [JobSkillsController],
  providers: [JobSkillsService],
})
export class JobSkillsModule {}
