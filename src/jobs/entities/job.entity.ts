import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';
import { employeeType } from '../dto/employee_type.enum';
import { Status } from '../dto/status.enum';
import { Users } from 'src/users/entities/user.entity';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  job_id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  location: string;
  @Column({ type: 'enum', enum: employeeType })
  employment_type: employeeType;
  @Column()
  salary_range: string;
  @Column()
  application_deadline: string;
  @Column({ type: 'enum', enum: Status })
  status: Status;
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @ManyToOne(() => Users, (user) => user.job)
  @JoinColumn({ name: 'user_id' }) // Ensures the column is named 'user_id'
  users: Users;
}
