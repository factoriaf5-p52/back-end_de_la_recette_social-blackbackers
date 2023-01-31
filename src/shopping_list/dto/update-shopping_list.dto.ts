import { PartialType } from '@nestjs/swagger';
import { UpsertShoppingListDto } from './upsert-shopping_list.dto';

export class UpdateShoppingListDto extends PartialType(UpsertShoppingListDto) {}
