import { ApiProperty } from "@nestjs/swagger";
import mongoose, { ObjectId } from "mongoose";

export class UpsertShoppingListDto {

	@ApiProperty( {example: '63cb0277ee58877e63e36fcc'})
	_id: ObjectId;

    @ApiProperty( {example:''})
	ingredients: [{
		ingredient: {type: mongoose.Types.ObjectId, ref:'Ingredient'},
		quantity: number
	}] 

}
