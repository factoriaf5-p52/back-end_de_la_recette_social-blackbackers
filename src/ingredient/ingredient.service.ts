import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { Ingredient } from "./schemas/ingredient.schema";

@Injectable()
export class IngredientService { 

  constructor( 
    @InjectModel(Ingredient.name) 
    private readonly ingredientModel: Model<Ingredient>, 
  ) {} 
  

  async create(createIngredientDto: CreateIngredientDto) {
    const newIngredient = new this.ingredientModel(createIngredientDto);
    return await newIngredient.save();
  }

  findAll() {
    return this.ingredientModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} ingredient`;
  }

  update(id: number, updateIngredientDto: UpdateIngredientDto) {
    return `This action updates a #${id} ingredient`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingredient`;
  }
}
