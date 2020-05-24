import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';
import { Offer } from '../offers/offer.entity';

@Entity('Aanbieder')
export class Advertiser {
  @PrimaryGeneratedColumn({ name: 'Id' })
  id: number;

  @Column({ name: 'Naam' })
  name: string;

  @Column({ name: 'Omschrijving' })
  description: string;

  @Column({ name: 'Quote' })
  quote: string;

  @Column({ name: 'WebsiteUrl' })
  websiteUrl: string;

  @Column({ name: 'AffiliateUrl' })
  affiliateUrl: string;

  @Column({ name: 'Rating' })
  rating: number;

  offers: Offer[]; // FK_rel
}
