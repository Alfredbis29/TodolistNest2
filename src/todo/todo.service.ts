import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];
  private idCounter = 1;

  findAll(): Todo[] {
    return this.todos;
  }

  create(task: string): Todo {
    const todo: Todo = {
      id: this.idCounter++,
      task,
      completed: false,
    };
    this.todos.push(todo);
    return todo;
  }

  toggle(id: number): Todo {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
    return todo;
  }

  delete(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
} 