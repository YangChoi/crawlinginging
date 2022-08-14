import { Test, TestingModule } from '@nestjs/testing';
import { CrawlingService } from './crawling.service';

describe('Crawling Unit Test', () => {
  let service: CrawlingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrawlingService],
    }).compile();
    service = module.get<CrawlingService>(CrawlingService);
  });

  describe('Request for Crawling', () => {
    it('request success', async () => {
      const result = await service.fetchData();
    });
  });
});
