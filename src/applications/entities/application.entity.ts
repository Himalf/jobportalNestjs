import { Job } from 'src/jobs/entities/job.entity';
import { Users } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  Timestamp,
} from 'typeorm';
import { ApplicationStatus } from '../dto/application-status.enum';

@Entity()
export class Application {
  @ManyToOne(() => Users, (users) => users.application)
  users: Users;
  @ManyToOne(() => Job, (job) => job.application)
  job: Job;
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  application_date: Date;
  @Column({ type: 'enum', enum: ApplicationStatus })
  status: ApplicationStatus;
}
