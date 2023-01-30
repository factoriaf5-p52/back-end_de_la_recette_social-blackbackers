import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShoppingListService } from './shopping_list.service';
import { CreateShoppingListDto } from './dto/create-shopping_list.dto';
import { UpdateShoppingListDto } from './dto/update-shopping_list.dto';
import { ParseObjectIdPipe } from 'src/utilities/parse-object-id-pipe.pipe';

@Controller('shopping-list')
export class ShoppingListController {
  constructor(private readonly shoppingListService: ShoppingListService) {}

  @Post()
  addIngredient(@Body() createShoppingListDto: CreateShoppingListDto) {
    return this.shoppingListService.addIngredient(createShoppingListDto);
  }

  @Get()
  findAll() {
    return this.shoppingListService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.shoppingListService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShoppingListDto: UpdateShoppingListDto) {
    return this.shoppingListService.update(Number(id), updateShoppingListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoppingListService.remove(Number(id));
  }
}
