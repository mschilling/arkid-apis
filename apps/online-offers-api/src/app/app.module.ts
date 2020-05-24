import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OffersModule } from './offers/offers.module';
import { Offer } from './offers/offer.entity';
import { environment } from '../environments/environment';
import { AdvertisersModule } from './advertisers/advertisers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: environment.dbHost,
      port: environment.dbPort,
      username: environment.dbUser,
      password: environment.dbPwd,
      database: environment.dbName,
      entities: [Offer],
      synchronize: false,
      options: {
        encrypt: false
      }
    }),
    OffersModule,
    AdvertisersModule,
  ],
  controllers: [],
  providers: [OffersModule],
})
export class AppModule {}
