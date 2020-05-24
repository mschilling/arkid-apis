import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn({ name: 'user_id' })
  id: number;

  // @Column({ name: 'Naam' })
  // name: string;

}
