import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksServe: TasksService) {}

  @Get() // For example, http://localhost:3000/tasks
  getAllTasks() {
    return this.tasksServe.getAllTasks();
  }
}
