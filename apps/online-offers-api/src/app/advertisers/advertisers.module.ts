import { Module } from '@nestjs/common';
import { AdvertisersController } from './advertisers.controller';
import { AdvertisersService } from './advertisers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Advertiser } from './advertiser.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Advertiser])],
  controllers: [AdvertisersController],
  providers: [AdvertisersService]
})
export class AdvertisersModule {}
