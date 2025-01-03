import { Module } from '@nestjs/common';
import { ResumeController } from './resume.controller';
import { ResumeService } from './resume.service';

@Module({
  imports: [],
  controllers: [ResumeController],
  providers: [ResumeService],
})
export class ResumeModule {}
