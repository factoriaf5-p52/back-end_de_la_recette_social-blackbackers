import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { ObjectId } from "mongoose";
import { Ingredient, IngredientSchema } from "src/ingredient/schemas/ingredient.schema";
import { UserSchema } from "src/user/schemas/user.schema";

@Schema()
export class ShoppingList {
    @Prop({type: Object})
	_id: ObjectId;

	@Prop({type: Date})
	indgredient_id: [{type: Schema.Types.ObjectId, ref: 'ingredient'}]; 

	@Prop()
	user_id: [{type: Schema.Types.ObjectId, ref: 'user'}];

	@Prop()
	quantity: number;
}


export const ShoppingListSchema = SchemaFactory.createForClass(ShoppingList);