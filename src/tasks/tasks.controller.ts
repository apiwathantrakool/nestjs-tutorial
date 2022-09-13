import { CreateTaskDto } from './dto/create-task.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private tasksServe: TasksService) {}

  @Get() // For example, http://localhost:3000/tasks
  getAllTasks(): Task[] {
    return this.tasksServe.getAllTasks();
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksServe.createTask(createTaskDto);
  }
}
