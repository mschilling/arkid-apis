import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity('Images')
export class Photo {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  // @Column({ name: 'Naam' })
  // name: string;

}
