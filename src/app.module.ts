import { Module } from '@nestjs/common';
import { SkillsModule } from './skills/skills.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Skills } from './skills/skills.entity';
import { UsersModule } from './users/users.module';
import { Users } from './users/entities/user.entity';
import { ResumeController } from './resume/resume.controller';
import { ResumeService } from './resume/resume.service';
import { Resume } from './resume/entities/resume.entities';
import { ResumeModule } from './resume/resume.module';
import { UserSkillsController } from './user_skills/user_skills.controller';
import { UserSkillsService } from './user_skills/user_skills.service';
import { UserSkillsModule } from './user_skills/user_skills.module';
import { User_Skill } from './user_skills/entities/user_skills.entity';
import { JobsModule } from './jobs/jobs.module';
import { Job } from './jobs/entities/job.entity';
import { JobSkillsModule } from './job-skills/job-skills.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_HOST,
      port: parseInt(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      entities: [Skills, Users, Resume, User_Skill, Job],
      synchronize: true,
    }),
    SkillsModule,
    UsersModule,
    ResumeModule,
    UserSkillsModule,
    JobsModule,
    JobSkillsModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
