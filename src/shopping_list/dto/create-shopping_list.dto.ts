import { ApiProperty } from "@nestjs/swagger";
import { ObjectId, Schema } from "mongoose";

export class CreateShoppingListDto {
    @ApiProperty( {example: '63cb0277ee58877e63e36fcc'})
	_id: ObjectId;

	@ApiProperty( {example: '63cb0277ee58877e63e36fcc'})
	ingredients_id: [{type: Schema.Types.ObjectId, ref: 'ingredient'}];

    @ApiProperty( {example: '63cb0277ee58877e63e36fcc'})
	user_id: [{type: Schema.Types.ObjectId, ref: 'user'}];
	
	@ApiProperty( {example: '2'})
	quantity: number;

}
