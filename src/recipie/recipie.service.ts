import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRecipieDto } from './dto/create-recipie.dto';
import { UpdateRecipieDto } from './dto/update-recipie.dto';
import { Recipie, RecipieDocument } from "./schemas/recipie.schema";

@Injectable()
export class RecipieService {

    constructor( 
    @InjectModel(Recipie.name) private readonly recipieModel: Model<RecipieDocument>, 
  ) {}

  async create(createRecipieDto: CreateRecipieDto) {
    const newRecipie = new this.recipieModel(createRecipieDto);
    return await newRecipie.save();
  }

  async findAll(): Promise<Recipie[]> {
    const recipiesData = await this.recipieModel.find().exec();
    if (!recipiesData || recipiesData.length == 0) {
        console.log("Error: no data");
    }
    return recipiesData;
  }

  async findOne(id: string): Promise<Recipie> {
    const recipeData = await this.recipieModel.findById(id);
    if (!recipeData) {
        console.log("Error: no data");
    }
    return recipeData;
  }

  async update(id: string, updateRecipieDto: UpdateRecipieDto) {
    const updatedRecipie = await this.recipieModel.findByIdAndUpdate(id,updateRecipieDto);
    return updatedRecipie;
  }

  async remove(id: string) {
    const removedRecipie = await this.recipieModel.findByIdAndDelete(id);
    return removedRecipie;
  }
}
