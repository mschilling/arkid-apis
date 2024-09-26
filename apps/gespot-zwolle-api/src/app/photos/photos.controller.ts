import { Controller, Get } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { plainToClass } from 'class-transformer';
import { Photo } from './photo.entity';

@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @Get()
  async getAll() {
    const data = await this.photosService.getAll();
    return data.map((p) => plainToClass(Photo, p, { excludeExtraneousValues: true }));
  }
}
