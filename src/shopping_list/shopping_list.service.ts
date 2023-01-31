import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { UpsertShoppingListDto } from './dto/upsert-shopping_list.dto';
import { UpdateShoppingListDto } from './dto/update-shopping_list.dto';
import { ShoppingList } from './schema/shopping_list.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ShoppingListService {

  constructor( 
    @InjectModel(ShoppingList.name) private readonly shoppingListModel: Model<ShoppingList>,
    private jwtAuthService:JwtService
  ) {}

  async upsertShoppingList(upsertShoppingListDto: UpsertShoppingListDto) {

    const shoppingListFound = await this.shoppingListModel.find({'ingredients.ingredient':'63d0f9903dccc038d38d416c'});
    return shoppingListFound;
    // const shoppingListUpdated = await this.shoppingListModel.findOneAndUpdate();

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

