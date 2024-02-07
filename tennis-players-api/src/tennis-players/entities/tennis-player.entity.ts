import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class TennisPlayer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  dob: Date

  @Column({ nullable: true})
  points: number;
}
