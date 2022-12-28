import { Injectable } from '@nestjs/common';
import { TodoDto } from 'src/dto/TodoDto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data) {
    return this.prisma.todo.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.todo.findMany();
  }

  async findOne(id: number) {
    return this.prisma.todo.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, data: TodoDto) {
    return this.prisma.todo.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.todo.delete({
      where: { id },
    });
  }

  async removeAll() {
    return this.prisma.todo.deleteMany();
  }
}
