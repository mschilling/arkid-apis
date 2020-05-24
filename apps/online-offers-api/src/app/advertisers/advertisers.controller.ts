import { Controller, Get } from '@nestjs/common';
import { AdvertisersService } from './advertisers.service';

@Controller('advertisers')
export class AdvertisersController {
  constructor(private readonly advertisersService: AdvertisersService) {}

  @Get()
  getAll() {
    return this.advertisersService.getAll();
  }
}
