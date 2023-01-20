import { Injectable } from '@nestjs/common';
import { CreateRecipieDto } from './dto/create-recipie.dto';
import { UpdateRecipieDto } from './dto/update-recipie.dto';

@Injectable()
export class RecipieService {
  create(createRecipieDto: CreateRecipieDto) {
    return 'This action adds a new recipie';
  }

  findAll() {
    return `This action returns all recipie`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recipie`;
  }

  update(id: number, updateRecipieDto: UpdateRecipieDto) {
    return `This action updates a #${id} recipie`;
  }

  remove(id: number) {
    return `This action removes a #${id} recipie`;
  }
}
