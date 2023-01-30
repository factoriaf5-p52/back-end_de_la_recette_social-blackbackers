import { Module } from '@nestjs/common';
import { ShoppingListService } from './shopping_list.service';
import { ShoppingListController } from './shopping_list.controller';

@Module({
  controllers: [ShoppingListController],
  providers: [ShoppingListService]
})
export class ShoppingListModule {}
