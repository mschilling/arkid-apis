import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from './photo.entity';
import { Repository, MoreThan, Equal } from 'typeorm';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo)
    private photosRepository: Repository<Photo>,
  ) {}

  async getAll(): Promise<Photo[]> {
    const relations = [];
    return this.photosRepository.find({
      where: {
        securityLevel: Equal(0),
        enabled: true
      },
      order: { id: 'DESC' },
      take: 100,
      relations,
    });
  }
}
