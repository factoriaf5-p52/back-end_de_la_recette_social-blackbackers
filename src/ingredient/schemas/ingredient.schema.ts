import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RecipieDocument = Ingredient & Document;

@Schema()
export class Ingredient {
    @Prop()
	name: string;

	@Prop()
	measure_unit: string;
}

export const IngredientSchema = SchemaFactory.createForClass(Ingredient);