import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty( {example: 'Sergi'})
    fisrt_name: string;

    @ApiProperty({example: 'Alsina'})
    last_name: string;

    @ApiProperty({example: 'SergiAl'})
    user_name: string;

    @ApiProperty({example: 'alolocosevivemejor@gmail.com'})
    email: string;

    @ApiProperty({example: 'qwerty1234'})
    password: string;

    @ApiProperty({example: 'registered'})
    role: string;

    @ApiProperty({example: '[{ObjectID: "2943823572034",}]'})
    favorites: Array<string>;

    @ApiProperty({example: 'c/Bla, Barcelona'})
    adress: string;

    @ApiProperty({example: '[{badges: 3}]'})
    badges: Array<string>;

    @ApiProperty({example: ''})
    subsciptions_list: Array<any>;

    @ApiProperty({example: '[{ _id: ObjectId("2943823572034") }]'})
    notifications_list: Array<any>;

    @ApiProperty({example: '[{ _id: ObjectId("2943823572034") }]'})
    groups: Array<any>;
}
