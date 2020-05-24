import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Aanbieding')
export class Offer {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({ name: 'Titel' })
  Title: string;

  @Column({ name: 'Omschrijving' })
  Description: string;

  @Column({ name: 'ProductPrijsVoor' })
  readonly price: number;

  @Column({ name: 'ProductPrijsVan' })
  readonly fromPrice: number;

  @Column({ name: 'ProductURLExtern' })
  readonly deepLink: string;

  @Column({ name: 'AfbeeldingUrlExtern' })
  readonly imageUrl: string;

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
