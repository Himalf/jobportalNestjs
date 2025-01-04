import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resume } from './entities/resume.entities';
import { ResumeController } from './resume.controller';
import { ResumeService } from './resume.service';
import { Users } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Resume, Users])],
  controllers: [ResumeController],
  providers: [ResumeService],
})
export class ResumeModule {}
