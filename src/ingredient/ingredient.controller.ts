import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Query, ParseArrayPipe} from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { Response } from 'express';

@Controller('ingredient')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

  @Post('/create')
  async create(@Res() res: Response, @Body() createIngredientDto: CreateIngredientDto) {
    const ingredient = await this.ingredientService.create(createIngredientDto);
    return res.status(HttpStatus.OK).json({
      message: 'Ingredient successfully created',
      ingredient
    });
  }

  @Get('/list')
  async findAll() {
    return await this.ingredientService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.ingredientService.findOne(id);
  }

  @Patch('modify/:id')
  async update(@Param('id') id: string, @Body() updateIngredientDto: UpdateIngredientDto, @Res() res: Response) {
    const updatedIngredient = await this.ingredientService.update(id, updateIngredientDto);
    return res.status(HttpStatus.OK).json({
      message: 'Ingredient successfully updated',
      updatedIngredient
    });
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    const deletededIngredient = await this.ingredientService.remove(id);
    return res.status(HttpStatus.OK).json({
      message: 'Ingredient successfully deleted',
      deletededIngredient
    });    
  }

  @Get('/filter/by')
  async findByFilter(
    @Query('name') name: string,
    @Query('measure_unit') measure_unit: string
  ){
    let queries = {name, measure_unit};

    return await this.ingredientService.findByFilter(queries);
  }

  @Get('filter/name/:tag')
  async findByName (@Param('tag') tag: string) {
    return await this.ingredientService.findByName(tag);
  }
  @Get('filter/measure_unit/:tag')
  async findByMeasure_unit (@Param('tag') tag: string) {
    return await this.ingredientService.findByMeasure_unit(tag);
  }
}
