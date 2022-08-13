import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CrawlingModule } from './crawling/crawling.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    CrawlingModule,
    DatabaseModule,
  ],
})
export class AppModule {}
