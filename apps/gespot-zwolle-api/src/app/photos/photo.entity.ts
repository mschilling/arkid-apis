import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';
import { Expose } from 'class-transformer';

@Entity('Images')
export class Photo {
  @Expose()
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Expose()
  @Column({ name: 'url_thumb' })
  urlThumb: string;

  @Expose()
  @Column({ name: 'date_added' })
  creationDate: string;

  @Column({ name: 'securityLevel'})
  securityLevel: number;

  @Column('bit', { name: 'enabled' })
  enabled: boolean;
}
