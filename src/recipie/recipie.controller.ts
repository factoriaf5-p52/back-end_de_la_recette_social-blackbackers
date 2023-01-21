import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Query } from '@nestjs/common';
import { RecipieService } from './recipie.service';
import { CreateRecipieDto } from './dto/create-recipie.dto';
import { UpdateRecipieDto } from './dto/update-recipie.dto';
import { Response } from 'express';

@Controller('recipie')
export class RecipieController {
  constructor(private readonly recipieService: RecipieService) {}

  @Post('/create')
  async create(@Res() res: Response, @Body() createRecipieDto: CreateRecipieDto) {
    const recipie = await this.recipieService.create(createRecipieDto);
    return res.status(HttpStatus.OK).json({
      message: 'Recipie successfully created',
      recipie
    });

  }

  @Get('/list')
  async findAll() {
    return await this.recipieService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.recipieService.findOne(id);
  }

  @Patch('modify/:id')
  async update(@Param('id') id: string, @Body() updateRecipieDto: UpdateRecipieDto, @Res() res: Response) {
    const updatedRecipie = await this.recipieService.update(id, updateRecipieDto);
    return res.status(HttpStatus.OK).json({
      message: 'Recipie successfully updated',
      updatedRecipie
    });
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    const deletededRecipie = await this.recipieService.remove(id);
    return res.status(HttpStatus.OK).json({
      message: 'Recipie successfully deleted',
      deletededRecipie
    });    
  }

  @Get()
  async findByFilter(
    @Query('name') name: string,
    @Query('description') description: string,
    @Query('author') author: string,
    @Query('avg_rating') _avg_rating: number,
    @Query('img') img: string,
    @Query('is_public') is_public: boolean,
    @Query('meal_type') meal_type: string,
    @Query('country') country: string,
    @Query('coocking_time') coocking_time: string,
    @Query('difficulty') difficulty: string,
    @Query('views') _views: number,
    @Query('food_type') food_type: string,
    @Query('ingredients') ingredients: Array<string>

  ){
    let avg_rating = undefined;
    let views = undefined;

    if (_avg_rating) {
      avg_rating = Number(_avg_rating);
    }
    if (_views) {
      views = Number(_views); 
    }

    const queries = {name, description, author, avg_rating, img, is_public, meal_type, country, coocking_time, difficulty, views, food_type, ingredients};

    return {
      message: 'Data from queries',
      queries
    }



  }



}
