import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { RecipieService } from './recipie.service';
import { CreateRecipieDto } from './dto/create-recipie.dto';
import { UpdateRecipieDto } from './dto/update-recipie.dto';

@Controller('recipie')
export class RecipieController {
  constructor(private readonly recipieService: RecipieService) {}

  @Post('/create')
  async create(@Res() res, @Body() createRecipieDto: CreateRecipieDto) {
    const recipie = await this.recipieService.create(createRecipieDto);
    return res.status(HttpStatus.OK).json({
      message: 'Recipie successfully created',
      recipie
    });

  }

  @Get('/list')
  async findAll() {
    return await this.recipieService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.recipieService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecipieDto: UpdateRecipieDto) {
    return this.recipieService.update(+id, updateRecipieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipieService.remove(+id);
  }
}
