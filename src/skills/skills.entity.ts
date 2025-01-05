import { JobSkill } from 'src/job-skills/entities/job-skill.entity';
import { User_Skill } from 'src/user_skills/entities/user_skills.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Skills {
  @PrimaryGeneratedColumn()
  skill_id: number;
  @Column()
  skill_name: string;
  @OneToMany(() => User_Skill, (user_skill) => user_skill.skills)
  user_skill: User_Skill[];
  @OneToMany(() => JobSkill, (jobSkill) => jobSkill.skills)
  jobSkill: JobSkill;
}
