import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Aanbieding {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Titel: string;
}
