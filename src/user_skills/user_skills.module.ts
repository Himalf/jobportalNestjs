import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User_Skill } from './entities/user_skills.entity';
import { UserSkillsController } from './user_skills.controller';
import { UserSkillsService } from './user_skills.service';
import { Users } from 'src/users/entities/user.entity';
import { Skills } from 'src/skills/skills.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User_Skill, Users, Skills])],
  controllers: [UserSkillsController],
  providers: [UserSkillsService],
})
export class UserSkillsModule {}
