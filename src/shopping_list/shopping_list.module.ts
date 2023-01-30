import { Module } from '@nestjs/common';
import { ShoppingListService } from './shopping_list.service';
import { ShoppingListController } from './shopping_list.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ShoppingList, ShoppingListSchema } from './schema/shopping_list.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ShoppingList.name, schema: ShoppingListSchema }])
  ],
  controllers: [ShoppingListController],
  providers: [ShoppingListService]
})
export class ShoppingListModule {}
