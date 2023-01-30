import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateShoppingListDto } from './dto/create-shopping_list.dto';
import { UpdateShoppingListDto } from './dto/update-shopping_list.dto';
import { ShoppingList } from './schema/shopping_list.schema';

@Injectable()
export class ShoppingListService {

  constructor( 
    @InjectModel(ShoppingList.name) private readonly shoppingListModel: Model<ShoppingList>, 
  ) {}

  async create(createShoppingListDto: CreateShoppingListDto) {
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


  findOne(id: number) {
    const newShoppingList = new this.shoppingListModel(CreateShoppingListDto);

    return ();
  }

  update(id: number, updateShoppingListDto: UpdateShoppingListDto) {
    return `This action updates a #${id} shoppingList`;
  }

  remove(id: number) {
    return `This action removes a #${id} shoppingList`;
  }
}

