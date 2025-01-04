import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Skills {
  @PrimaryGeneratedColumn()
  skill_id: number;
  @Column()
  skill_name: string;
}
