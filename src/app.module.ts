import { Module } from '@nestjs/common';
import { ResumeService } from './resume/resume.service';
import { ResumeController } from './resume/resume.controller';
import { ResumeModule } from './resume/resume.module';

@Module({
  imports: [ResumeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
