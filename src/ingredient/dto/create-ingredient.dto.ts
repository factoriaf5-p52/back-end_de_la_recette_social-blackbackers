import { ApiProperty } from "@nestjs/swagger";

export class CreateIngredientDto {

    @ApiProperty( {example: 'Flour'})
    name: string;

    @ApiProperty( {example: 'Grams'})
    measure_unit: string;
}

