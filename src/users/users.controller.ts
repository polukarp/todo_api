import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from 'src/dto/UserDto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('create')
  async create(@Body() data: UserDto) {
    return this.usersService.create(data);
  }

  //   @Post('login')
  //   async login(@Body() data: UserDto) {
  //     return this.usersService.login(data);
  //   }

  @Get('all')
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.usersService.findOne(Number(id));
  }

  @Post('update/:id')
  async update(@Param('id') id: number, @Body() data: UserDto) {
    return this.usersService.update(Number(id), data);
  }

  @Post('remove/:id')
  async remove(@Param('id') id: number) {
    return this.usersService.remove(Number(id));
  }

  @Post('remove-all')
  async removeAll() {
    return this.usersService.removeAll();
  }
}
