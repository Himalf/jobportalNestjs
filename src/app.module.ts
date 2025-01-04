import { Module } from '@nestjs/common';
import { ResumeModule } from './resume/resume.module';
import { SkillsService } from './skills/skills.service';
import { SkillsController } from './skills/skills.controller';
import { SkillsModule } from './skills/skills.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
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
      entities: [],
      synchronize: true,
    }),
    ResumeModule,
    SkillsModule,
  ],
})
export class AppModule {}
