import { Body, Controller, Get, Post, Put, Req } from '@nestjs/common';
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
  async update(@Req() id: number, @Req() data: TodoDto) {
    return this.todosService.update(id, data);
  }

  @Post('remove/:id')
  async remove(@Req() id: number) {
    return this.todosService.remove(id);
  }

  @Post('remove-all')
  async removeAll() {
    return this.todosService.removeAll();
  }
}
