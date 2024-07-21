import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskDTO } from './task.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TaskService {
    private tasks: any[] = [];
    private taskId: number = 0;

    constructor(private readonly prismaService: PrismaService) { }


    async getById(id: string) {
        const task = await this.prismaService.task.findUnique({
            where: {
                id: Number(id)
            }
        })

        if (!task) throw new NotFoundException('Task not found')
        return task
    }

    getAll() {
        return this.prismaService.task.findMany()
    }

    create(data: TaskDTO) {
        return this.prismaService.task.create({
            data
        })
    }

    async toggleTask(id: string) {
        const task = await this.getById(id);

        return this.prismaService.task.update({
            data: {
                isDone: !task.isDone,
            },
            where: {
                id: task.id
            }
        })
    }
}
