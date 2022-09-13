import { TaskStatus } from '../task.model';
import { IsEnum } from 'class-validator';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus, {
    message: `Should be one of [${TaskStatus.DONE}, ${TaskStatus.IN_PROGRESS}, ${TaskStatus.OPEN}]`,
  })
  status: TaskStatus;
}
