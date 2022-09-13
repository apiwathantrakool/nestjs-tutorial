import { CreateTaskDto } from './dto/create-task.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

// For example, http://localhost:3000/tasks
@Controller('tasks')
export class TasksController {
  constructor(private tasksServe: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksServe.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksServe.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksServe.createTask(createTaskDto);
  }
}
