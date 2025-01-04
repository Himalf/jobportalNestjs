import { Users } from 'src/users/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Resume {
  @PrimaryGeneratedColumn()
  resume_id: number;
  @Column()
  file_url: string;
  @OneToOne(() => Users, (resume) => resume.user_id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user_id: Users;
}
