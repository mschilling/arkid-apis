import { Module } from '@nestjs/common';
import { OffersController } from './offers.controller';
import { OffersService } from './offers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aanbieding } from './aanbieding.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Aanbieding])],
  controllers: [OffersController],
  providers: [OffersService]
})
export class OffersModule {}
