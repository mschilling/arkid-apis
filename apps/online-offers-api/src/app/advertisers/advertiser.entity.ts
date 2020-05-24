import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity('Aanbieder')
export class Advertiser {
  @PrimaryGeneratedColumn({ name: 'Id' })
  id: number;
}
