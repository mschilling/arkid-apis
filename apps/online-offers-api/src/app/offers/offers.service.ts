import { Injectable } from '@nestjs/common';

@Injectable()
export class OffersService {
  async getAll(): Promise<any[]> {
    return <Array<any>>[
      { id: 1, title: 'Dagaanbieding 1' },
      { id: 2, title: 'Dagaanbieding 2' },
      { id: 3, title: 'Dagaanbieding 3' },
    ];
  }
}
