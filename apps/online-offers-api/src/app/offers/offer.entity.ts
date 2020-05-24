import { Entity, Column, PrimaryGeneratedColumn, Timestamp, ManyToOne, JoinColumn } from 'typeorm';
import { Advertiser } from '../advertisers/advertiser.entity';

@Entity('Aanbieding')
export class Offer {
  @PrimaryGeneratedColumn({ name: 'Id' })
  id: number;

  @Column({ name: 'Titel' })
  title: string;

  @Column({ name: 'Omschrijving' })
  description: string;

  @Column({ name: 'ProductPrijsVoor' })
  price: number;

  @Column({ name: 'ProductPrijsVan' })
  fromPrice: number;

  @Column({ name: 'ProductURLExtern' })
  deepLink: string;

  @Column({ name: 'AfbeeldingUrlExtern' })
  imageUrl: string;

  @Column({ name: 'AanbiedingVan', type: 'datetime', nullable: true })
  validFrom?: Timestamp;

  @Column({ name: 'AanbiedingTot', type: 'datetime', nullable: true })
  validTo?: Timestamp;

  @Column({ name: 'DateToegevoegd', type: 'datetime' })
  creationdate: Timestamp;

  @ManyToOne((type) => Advertiser, (advertiser) => advertiser.offers)
  @JoinColumn({ name: 'AanbiederId' })
  advertiser: Advertiser;
}
