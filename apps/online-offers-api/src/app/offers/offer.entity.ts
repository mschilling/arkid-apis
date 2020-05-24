import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

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

  // @ManyToOne(type => User, user => user.photos)
}

// @Expose() readonly productId: string;
// @Expose() readonly displayPrice: string;
// @Expose() readonly rppPrice: number;
// @Expose() readonly deliveryCost: number;
// @Expose() readonly deliveryTime: string;
// @Expose() readonly currency: string;
// @Expose() readonly datafeedId: string;
// @Expose() readonly merchantId: string;
// @Expose() readonly merchantName: string;
// @Expose() readonly merchantCategory: string;
// @Expose() readonly imageUrlLarge: string;
// @Expose() readonly validFrom: string;
// @Expose() readonly validTo: string;
// @Expose() readonly affiliateNetwork: string;
