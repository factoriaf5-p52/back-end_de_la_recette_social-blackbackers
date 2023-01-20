import { Test, TestingModule } from '@nestjs/testing';
import { RecipiesController } from './recipies.controller';

describe('RecipiesController', () => {
  let controller: RecipiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecipiesController],
    }).compile();

    controller = module.get<RecipiesController>(RecipiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
