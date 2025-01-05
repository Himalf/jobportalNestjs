import { Skills } from 'src/skills/skills.entity';
import { Users } from 'src/users/entities/user.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User_Skill {
  @PrimaryGeneratedColumn()
  user_skill_id: number;

  @ManyToOne(() => Users, (user) => user.user_skill, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  users: Users; // Should reference a single user, not an array

  @ManyToOne(() => Skills, (skill) => skill.user_skill)
  skills: Skills; // Should reference a single skill, not an array
}
