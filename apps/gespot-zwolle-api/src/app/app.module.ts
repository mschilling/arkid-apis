import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PhotosModule } from './photos/photos.module';
import { UsersModule } from './users/users.module';
import { environment } from '../environments/environment';
import { User } from './users/user.entity';
import { Photo } from './photos/photo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: environment.dbHost,
      port: environment.dbPort,
      username: environment.dbUser,
      password: environment.dbPwd,
      database: environment.dbName,
      entities: [User, Photo],
      synchronize: false,
      options: {
        encrypt: false,
      },

      logging: true,
    }),
    PhotosModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
