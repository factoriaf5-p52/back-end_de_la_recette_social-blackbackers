import { Controller, Get, Query } from '@nestjs/common';
import { RecipiesService } from './recipies.service';

@Controller('recipies')
export class RecipiesController {
    constructor(private readonly recipiesService: RecipiesService) {}

    @Get()
    findAll() {
        return this.recipiesService.findAllRecipies();
    }
  }

