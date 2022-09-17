import { AuthGuard } from '@nestjs/passport';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-tasks-filter.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { Task } from './task.entity';
import { GetUser } from 'src/auth/get-user.decorator';

// For example, http://localhost:3000/tasks
@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
  constructor(private tasksServe: TasksService) {}

  @Get()
  getTasks(
    @Query() filterDto: GetTaskFilterDto,
    @GetUser() user,
  ): Promise<Task[]> {
    return this.tasksServe.getTasks(filterDto, user);
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string, @GetUser() user): Promise<Task> {
    return this.tasksServe.getTaskById(id, user);
  }

  @Post()
  createTask(
    @Body() createTaskDto: CreateTaskDto,
    @GetUser() user,
  ): Promise<Task> {
    return this.tasksServe.createTask(createTaskDto, user);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string, @GetUser() user): Promise<void> {
    return this.tasksServe.deleteTask(id, user);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body() updateTaskStatusDto: UpdateTaskStatusDto,
    @GetUser() user,
  ): Promise<Task> {
    const { status } = updateTaskStatusDto;
    return this.tasksServe.updateTaskStatus(id, status, user);
  }
}
