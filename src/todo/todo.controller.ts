import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';

@Controller('api/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll(): Todo[] {
    return this.todoService.findAll();
  }

  @Post()
  create(@Body('task') task: string): Todo {
    return this.todoService.create(task);
  }

  @Put(':id/toggle')
  toggle(@Param('id') id: string): Todo {
    return this.todoService.toggle(Number(id));
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    return this.todoService.delete(Number(id));
  }
} 