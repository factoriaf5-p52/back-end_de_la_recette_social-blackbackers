import { PartialType } from '@nestjs/swagger';
import { CreateRecipieDto } from './create-recipie.dto';

export class UpdateRecipieDto extends PartialType(CreateRecipieDto) {}
