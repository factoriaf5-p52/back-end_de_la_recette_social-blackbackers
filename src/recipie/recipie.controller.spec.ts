import { Test, TestingModule } from '@nestjs/testing';
import { RecipieController } from './recipie.controller';
import { RecipieService } from './recipie.service';

describe('RecipieController', () => {
  let controller: RecipieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecipieController],
      providers: [RecipieService],
    }).compile();

    controller = module.get<RecipieController>(RecipieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
