import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipiesService } from './recipies/recipies.service';
import { RecipiesController } from './recipies/recipies.controller';
import * as dotenv from 'dotenv';
dotenv.config()

@Module({
  imports: [],
  controllers: [AppController, RecipiesController],
  providers: [AppService, RecipiesService],
})
export class AppModule {}
