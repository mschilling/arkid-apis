import { Module } from '@nestjs/common';

import { OffersModule } from './offers/offers.module';

@Module({
  imports: [OffersModule],
  controllers: [],
  providers: [OffersModule],
})
export class AppModule {}
