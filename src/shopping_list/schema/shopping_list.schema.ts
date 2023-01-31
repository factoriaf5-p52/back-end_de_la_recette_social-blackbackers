import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { ObjectId } from "mongoose";

@Schema()
export class ShoppingList {

	@Prop({type: mongoose.Types.ObjectId, ref: 'User'})
	_id: ObjectId;

	@Prop(Array<any>)
	ingredients: [{
		ingredient: {type: mongoose.Types.ObjectId, ref:'Ingredient'},
		quantity: number
	}] 
}


export const ShoppingListSchema = SchemaFactory.createForClass(ShoppingList);