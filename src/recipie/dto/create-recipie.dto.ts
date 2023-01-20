import { ApiProperty } from "@nestjs/swagger";

export class CreateRecipieDto {

	@ApiProperty( {example: 'Chocolate pie'})
	name: string;

	@ApiProperty( {example: 'Delicious chocolate pie'})
	description: string;

	@ApiProperty( {example: 'John'})
	author: string;

	@ApiProperty( {example: 8})
	avg_rating: number;

	@ApiProperty( {example: '/images/chocolate-pie.png'})
	img: string;

	@ApiProperty( {example: 'true'})
	is_public: boolean;

	@ApiProperty( {example: '[{ ObjectID: "2943823572034", qty: 200 }]'})
	ingredients: Array<any>; //Substituir por IngredientSchema cuando esté creado

	@ApiProperty( {example: 'Lunch'})
	meal_type: string;

	@ApiProperty( {example: 'France'})
	country: string;

	@ApiProperty( {example: 30})
	coocking_time: number;

	@ApiProperty( {example: 'Easy'})
	difficulty: string;

	@ApiProperty( {example: 9421})
	views: number;

	@ApiProperty( {example: 'Mediterranean'})
	food_type: string;

	@ApiProperty( {example: '[{ _id: ObjectId("2943823572034") }]'})
	comments: Array<any>; //Substituir por CommentSchema cuando esté creado

}

