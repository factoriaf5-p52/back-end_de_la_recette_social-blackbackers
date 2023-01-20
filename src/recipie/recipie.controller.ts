import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecipieService } from './recipie.service';
import { CreateRecipieDto } from './dto/create-recipie.dto';
import { UpdateRecipieDto } from './dto/update-recipie.dto';

@Controller('recipie')
export class RecipieController {
  constructor(private readonly recipieService: RecipieService) {}

  @Post()
  create(@Body() createRecipieDto: CreateRecipieDto) {
    return this.recipieService.create(createRecipieDto);
  }

  @Get()
  findAll() {
    return this.recipieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipieService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecipieDto: UpdateRecipieDto) {
    return this.recipieService.update(+id, updateRecipieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipieService.remove(+id);
  }
}
