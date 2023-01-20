import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RecipieDocument = Recipie & Document;

@Schema()
export class Recipie {
	@Prop()
	name: string;

	@Prop()
	description: string;

	@Prop()
	author: string;

	@Prop()
	avg_rating: number;

	@Prop()
	img: string;

	@Prop()
	is_public: boolean;

	@Prop([Object])
	ingredients: Array<any>;

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
	comments: Array<any>;

}

export const RecipieSchema = SchemaFactory.createForClass(Recipie);
