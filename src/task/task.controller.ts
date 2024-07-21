import { Body, Controller, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDTO } from './task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Get()
  async getTasks() {
    return this.taskService.getAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async createTask(@Body() dto: TaskDTO) {
    return this.taskService.create(dto)
  }

  @Patch(':id')
  async toggleTask(@Param('id') id: string) {
    return this.taskService.toggleTask(id)
  }
}
