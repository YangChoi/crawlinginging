import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'mysql',
          host: 'localhost',
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: 'CrawlingDB',
          port: configService.get('DB_PORT'),
          synchronize: true,
          entities: [__dirname + '../**/**.entity{.ts}'],
        } as TypeOrmModuleAsyncOptions;
      },
    }),
  ],
})
export class DatabaseModule {}
