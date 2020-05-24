import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Aanbieding } from './aanbieding.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OffersService {
  constructor(
    @InjectRepository(Aanbieding)
    private offersRepository: Repository<Aanbieding>,
  ) {}

  async getAll(): Promise<Aanbieding[]> {
    return this.offersRepository.find({ take: 5 });
  }
}
