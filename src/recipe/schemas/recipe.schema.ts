import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsObject } from 'class-validator';
import mongoose, { Document } from 'mongoose';
import { Ingredient } from '../../ingredient/schemas/ingredient.schema';

export type RecipeDocument = Recipe & Document;

@Schema()
export class IngredientsContent {
	@Prop({required: true, type: IsObject})
	_id: {
		type: mongoose.Types.ObjectId;
	}

	@Prop()
	qty: number;
}


@Schema()
export class CommentsContent {
	@Prop()
	title: string;

	@Prop()
	comment: string;

}

@Schema()
export class Recipe {
	@Prop({required: true})
	name: string;

	@Prop({required: true})
	description: string;

	@Prop({required: true, default: "Unknown"})
	author: string;

	@Prop()
	avg_rating: number;

	@Prop()
	img: string;

	@Prop({required: true, default: true})
	is_public: boolean;

	@Prop({type: mongoose.Types.ObjectId, ref:'Ingredient'})
	ingredients: [Ingredient];

	@Prop()
	meal_type: string;

	@Prop()
	country: string;

	@Prop()
	cooking_time: number;

	@Prop()
	difficulty: string;

	@Prop()
	views: number;

	@Prop()
	food_type: string;

	@Prop([Object])
	comments: [CommentsContent];

}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
