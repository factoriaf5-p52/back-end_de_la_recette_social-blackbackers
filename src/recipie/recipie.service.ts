import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRecipieDto } from './dto/create-recipie.dto';
import { UpdateRecipieDto } from './dto/update-recipie.dto';
import { Recipie } from "./schemas/recipie.schema";

@Injectable()
export class RecipieService {

    constructor( 
    @InjectModel(Recipie.name) private readonly recipieModel: Model<Recipie>, 
  ) {}

  create(createRecipieDto: CreateRecipieDto) {
    return 'This action adds a new recipie';
  }

  findAll() {
    return this.recipieModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} recipie`;
  }

  update(id: number, updateRecipieDto: UpdateRecipieDto) {
    return `This action updates a #${id} recipie`;
  }

  remove(id: number) {
    return `This action removes a #${id} recipie`;
  }
}
