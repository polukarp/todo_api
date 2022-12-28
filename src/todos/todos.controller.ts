import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { TodoDto } from 'src/dto/TodoDto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post('create')
  async create(@Body() data: TodoDto) {
    return this.todosService.create(data);
  }

  @Get('all')
  async findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  async findOne(@Req() id: number) {
    return this.todosService.findOne(id);
  }

  @Put('update/:id')
  async update(@Param('id') id: number, @Body() data: TodoDto) {
    return this.todosService.update(Number(id), data);
  }

  @Delete('remove/:id')
  async remove(@Param('id') id: number) {
    return this.todosService.remove(Number(id));
  }

  @Delete('remove-all')
  async removeAll() {
    return this.todosService.removeAll();
  }
}
