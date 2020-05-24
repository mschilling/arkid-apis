import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from '../environments/environment';
import { OffersModule } from './offers/offers.module';
import { AdvertisersModule } from './advertisers/advertisers.module';
import { Advertiser } from './advertisers/advertiser.entity';
import { Offer } from './offers/offer.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: environment.dbHost,
      port: environment.dbPort,
      username: environment.dbUser,
      password: environment.dbPwd,
      database: environment.dbName,
      entities: [Offer, Advertiser],
      synchronize: false,
      options: {
        encrypt: false,
      },
    }),
    OffersModule,
    AdvertisersModule,
  ],
  controllers: [],
  providers: [OffersModule, AdvertisersModule],
})
export class AppModule {}
