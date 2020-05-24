import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotosModule } from './photos/photos.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PhotosModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
