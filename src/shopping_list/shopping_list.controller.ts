import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, UseGuards, Request  } from '@nestjs/common';
import { ShoppingListService } from './shopping_list.service';
import { UpsertShoppingListDto } from './dto/upsert-shopping_list.dto';
import { UpdateShoppingListDto } from './dto/update-shopping_list.dto';
import { ParseObjectIdPipe } from 'src/utilities/parse-object-id-pipe.pipe';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CompareIdGuard } from 'src/auth/guards/compare-id.guard';

@Controller('shopping-list')
export class ShoppingListController {
  constructor(private readonly shoppingListService: ShoppingListService) {}

  @UseGuards(JwtAuthGuard, CompareIdGuard)
  @Post()
  async upsertShoppingList(@Body() UpsertShoppingListDto: UpsertShoppingListDto) {
    return this.shoppingListService.upsertShoppingList(UpsertShoppingListDto);
  }

  @Get()
  async findAll() {
    return this.shoppingListService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.shoppingListService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateShoppingListDto: UpdateShoppingListDto) {
    return this.shoppingListService.update(Number(id), updateShoppingListDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.shoppingListService.remove(Number(id));
  }
}
