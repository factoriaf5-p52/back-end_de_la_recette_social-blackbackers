import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';
import { CreateShoppingListDto } from './dto/create-shopping_list.dto';
import { UpdateShoppingListDto } from './dto/update-shopping_list.dto';
import { ShoppingList } from './schema/shopping_list.schema';
import { Request } from 'express';

@Injectable()
export class ShoppingListService {

  constructor( 
    @InjectModel(ShoppingList.name) private readonly shoppingListModel: Model<ShoppingList>
  ) {}

  async addIngredient(createShoppingListDto: CreateShoppingListDto) {
   
    const shoppingListFound = await this.findOne(createShoppingListDto._id.toString());
    
    const newShoppingList = new this.shoppingListModel(createShoppingListDto);
    return await newShoppingList.save();
  }

  async findAll(): Promise<ShoppingList[]> {
    const shoppingListData = await this.shoppingListModel.find();
    if (!shoppingListData || shoppingListData.length == 0) {
        console.log("Error: no data");
    }
    return shoppingListData;
  }


  async findOne(id: string) {

    if (mongoose.Types.ObjectId.isValid(id)) {
          const shoppingListData = await this.shoppingListModel.findById(id)
          .populate({ path: 'ingredients.ingredient' })
          .exec();
    if (!shoppingListData) {
        console.log("Error: no data");
    }
    return shoppingListData;
    }else {
      console.log("Error: the id is not in a valid format");
    }

  }

  update(id: number, updateShoppingListDto: UpdateShoppingListDto) {
    return `This action updates a #${id} shoppingList`;
  }

  remove(id: number) {
    return `This action removes a #${id} shoppingList`;
  }
}

