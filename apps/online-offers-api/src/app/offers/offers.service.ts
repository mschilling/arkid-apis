import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Offer } from './offer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OffersService {
  constructor(
    @InjectRepository(Offer)
    private offersRepository: Repository<Offer>,
  ) {}

  async getAll(): Promise<Offer[]> {
    const relations = ['advertiser'];
    return this.offersRepository.find({ order: { id: 'DESC' }, take: 25, relations });
  }
}
