import { Test, TestingModule } from '@nestjs/testing';
import { RecipieService } from './recipie.service';

describe('RecipieService', () => {
  let service: RecipieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecipieService],
    }).compile();

    service = module.get<RecipieService>(RecipieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
