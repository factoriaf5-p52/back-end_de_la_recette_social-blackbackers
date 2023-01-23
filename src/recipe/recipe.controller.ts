import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Query, ParseArrayPipe } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Response } from 'express';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Post('/create')
  async create(@Res() res: Response, @Body() createRecipeDto: CreateRecipeDto) {
    const recipe = await this.recipeService.create(createRecipeDto);
    return res.status(HttpStatus.OK).json({
      message: 'Recipe successfully created',
      recipe
    });

  }

  @Get('/list')
  async findAll() {
    return await this.recipeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.recipeService.findOne(id);
  }

  @Patch('modify/:id')
  async update(@Param('id') id: string, @Body() updateRecipeDto: UpdateRecipeDto, @Res() res: Response) {
    const updatedRecipe = await this.recipeService.update(id, updateRecipeDto);
    return res.status(HttpStatus.OK).json({
      message: 'Recipe successfully updated',
      updatedRecipe
    });
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    const deletededRecipe = await this.recipeService.remove(id);
    return res.status(HttpStatus.OK).json({
      message: 'Recipe successfully deleted',
      deletededRecipe
    });    
  }

  @Get()
  async findByFilter(
    @Query('name') name: string,
    @Query('author') author: string,
    @Query('avg_rating') _avg_rating: number,
    @Query('is_public') is_public: boolean,
    @Query('meal_type') meal_type: string,
    @Query('country') country: string,
    @Query('coocking_time') _coocking_time: number,
    @Query('difficulty') difficulty: string,
    @Query('views') _views: number,
    @Query('food_type') food_type: string,
    @Query('ingredients') ingredients: string

  ){
    let avg_rating = undefined;
    let views = undefined;
    let coocking_time = undefined;

    if (_avg_rating) {
      avg_rating = Number(_avg_rating);
    }
    if (_views) {
      views = Number(_views); 
    }
    if (_coocking_time) {
      coocking_time = Number(_coocking_time); 
    }    

    let queries = {name, author, avg_rating, is_public, meal_type, country, coocking_time, difficulty, views, food_type, ingredients};

    return await this.recipeService.findByFilter(queries);

  }



}
