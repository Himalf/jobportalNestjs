import { Application } from 'src/applications/entities/application.entity';
import { Job } from 'src/jobs/entities/job.entity';
import { Resume } from 'src/resume/entities/resume.entities';
import { User_Skill } from 'src/user_skills/entities/user_skills.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  user_id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column({ unique: true })
  phone_number: number;
  @Column()
  role: string;
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;

  @OneToOne(() => Resume, (resume) => resume.user, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  resume: Resume[];
  @OneToMany(() => User_Skill, (user_skill) => user_skill.users, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user_skill: User_Skill[];
  @OneToMany(() => Job, (job) => job.users, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  job: Job[];

  @OneToMany(() => Application, (application) => application.users)
  application: Application;
}
