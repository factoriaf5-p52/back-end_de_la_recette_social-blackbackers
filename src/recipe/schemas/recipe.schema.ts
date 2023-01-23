import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RecipeDocument = Recipe & Document;

@Schema()
export class IngredientsContent {
	@Prop({required: true})
	_id: string;

	@Prop()
	qty: number;
}


@Schema()
export class CommentsContent {
	@Prop()
	title: string;

	@Prop()
	comment: string;

	@Prop()
	id_user: string;
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

	@Prop()
	ingredients: IngredientsContent[];

	@Prop()
	meal_type: string;

	@Prop()
	country: string;

	@Prop()
	coocking_time: number;

	@Prop()
	difficulty: string;

	@Prop()
	views: number;

	@Prop()
	food_type: string;

	@Prop([Object])
	comments: CommentsContent;

}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
