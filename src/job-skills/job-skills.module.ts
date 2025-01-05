import { Module } from '@nestjs/common';
import { JobSkillsService } from './job-skills.service';
import { JobSkillsController } from './job-skills.controller';

@Module({
  controllers: [JobSkillsController],
  providers: [JobSkillsService],
})
export class JobSkillsModule {}
