import { Skills } from 'src/skills/skills.entity';
import { Users } from 'src/users/entities/user.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

Entity();
export class User_Skill {
  @PrimaryGeneratedColumn()
  user_skill_id: number;
  @ManyToOne(() => Users, (users) => users.user_skill, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  users: Users;
  @ManyToOne(() => Skills, (skills) => skills.user_skill)
  skills: Skills;
}
