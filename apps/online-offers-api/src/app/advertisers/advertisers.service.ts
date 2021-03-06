import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Advertiser } from './advertiser.entity';

@Injectable()
export class AdvertisersService {
  constructor(
    @InjectRepository(Advertiser)
    private advertisersRepository: Repository<Advertiser>,
  ) {}

  async getAll(): Promise<Advertiser[]> {
    const MAX_RESULTS = 100;
    return this.advertisersRepository.find({ order: { id: 'DESC' }, take: MAX_RESULTS });
  }
}
