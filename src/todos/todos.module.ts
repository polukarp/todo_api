import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [TodosService, PrismaService],
  controllers: [TodosController],
})
export class TodosModule {}
