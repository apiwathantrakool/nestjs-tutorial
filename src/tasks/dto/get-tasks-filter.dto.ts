import { TaskStatus } from '../task.constants';
import { IsOptional, IsEnum, IsString } from 'class-validator';

export class GetTaskFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
