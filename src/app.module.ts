import { Module } from '@nestjs/common';
import { ResumeService } from './resume/resume.service';
import { ResumeController } from './resume/resume.controller';
import { ResumeModule } from './resume/resume.module';
import { SkillsService } from './skills/skills.service';
import { SkillsController } from './skills/skills.controller';
import { SkillsModule } from './skills/skills.module';

@Module({
  imports: [ResumeModule, SkillsModule],
  controllers: [SkillsController],
  providers: [SkillsService],
})
export class AppModule {}
