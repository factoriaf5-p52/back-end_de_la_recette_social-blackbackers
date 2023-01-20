import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipieModule } from './recipie/recipie.module';
import { IngredientModule } from './ingredient/ingredient.module';
dotenv.config()

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    RecipieModule,
    IngredientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
