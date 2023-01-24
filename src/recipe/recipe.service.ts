import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { GetRecipiesFilterDto } from './dto/filter-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Recipe, RecipeDocument } from "./schemas/recipe.schema";
const mongoose = require('mongoose');
@Injectable()
export class RecipeService {

    constructor( 
    @InjectModel(Recipe.name) private readonly recipeModel: Model<RecipeDocument>, 
  ) {}

  async create(createRecipeDto: CreateRecipeDto) {
    const newRecipe = new this.recipeModel(createRecipeDto);
    return await newRecipe.save();
  }

  async findAll(): Promise<Recipe[]> {
    const recipiesData = await this.recipeModel.find();
    if (!recipiesData || recipiesData.length == 0) {
        console.log("Error: no data");
    }
    return recipiesData;
  }

  async findOne(id: string): Promise<Recipe> {
    if (mongoose.Types.ObjectId.isValid(id)) {
          const recipeData = await this.recipeModel.findById(id);
    if (!recipeData) {
        console.log("Error: no data");
    }
    return recipeData;
    }else {
      console.log("Error: the id is not in a valid format");
    }


  }

  async update(id: string, updateRecipeDto: UpdateRecipeDto) {
    const updatedRecipe = await this.recipeModel.findByIdAndUpdate(id,updateRecipeDto);
    return updatedRecipe;
  }

  async remove(id: string) {
    const removedRecipe = await this.recipeModel.findByIdAndDelete(id);
    return removedRecipe;
  }

  async findByFilter(queries: GetRecipiesFilterDto) {

    let recipies = await this.findAll();

    let {name, author, avg_rating, is_public, meal_type, country, coocking_time, difficulty, views, food_type, ingredients} = queries;

    if (name) {
      recipies = recipies.filter( recipe => recipe.name === name);
    }

    if (author) {
      recipies = recipies.filter( recipe => recipe.author === author);
    }

    if (avg_rating) {
      recipies = recipies.filter( recipe => recipe.avg_rating == avg_rating);
    }    

    if (is_public != undefined) {
      let is_publicBoolean = (is_public.toLowerCase() === "true");
      recipies = recipies.filter( recipe => recipe.is_public == is_publicBoolean);
    }   
    
    if (meal_type) {
      recipies = recipies.filter( recipe => recipe.meal_type === meal_type);
    }     

    if (country) {
      recipies = recipies.filter( recipe => recipe.country === country);
    }  
    if (coocking_time) {
      recipies = recipies.filter( recipe => recipe.coocking_time == coocking_time);
    }    
    if (difficulty) {
      recipies = recipies.filter( recipe => recipe.difficulty === difficulty);
    }   
    if (views) {
      recipies = recipies.filter( recipe => recipe.views == views);
    }   
    if (food_type) {
      recipies = recipies.filter( recipe => recipe.food_type === food_type);
    }   

    if (ingredients) {
      let ingredientsArray = ingredients.split(',');
      recipies = recipies.filter(({ ingredients }) =>
      ingredients.some(({ _id }) => ingredientsArray.includes(_id))
      );
    }

    return recipies;

  }

  async findMostViewed(): Promise<Recipe[]>{
    const recipiesData = await this.recipeModel.find().sort({"views":-1}).limit(10);
    if (!recipiesData || recipiesData.length == 0) {
        console.log("Error: no data");
    }
    return recipiesData;
  }


  
}
