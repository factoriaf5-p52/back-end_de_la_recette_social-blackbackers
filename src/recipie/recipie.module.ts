import { Module } from '@nestjs/common';
import { RecipieService } from './recipie.service';
import { RecipieController } from './recipie.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipieSchema, Recipie } from './schemas/recipie.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Recipie.name, schema: RecipieSchema }]),
  ],
  controllers: [RecipieController],
  providers: [RecipieService]
})
export class RecipieModule {}
