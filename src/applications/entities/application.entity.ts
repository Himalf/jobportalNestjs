import { Job } from 'src/jobs/entities/job.entity';
import { Users } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';
import { ApplicationStatus } from '../dto/application-status.enum';

@Entity()
export class Application {
  @PrimaryGeneratedColumn()
  application_id: number;
  @ManyToOne(() => Users, (users) => users.application, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  users: Users;
  @ManyToOne(() => Job, (job) => job.application, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  job: Job;
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  application_date: Date;
  @Column({ type: 'enum', enum: ApplicationStatus })
  status: ApplicationStatus;
}
