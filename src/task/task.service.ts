import { Injectable } from '@nestjs/common';
import { TaskDTO } from './task.dto';

@Injectable()
export class TaskService {
    private tasks: any[] = [];
    private taskId: number = 0;

    getAll() {
        return this.tasks
    }

    create(dto: TaskDTO) {
        this.taskId += 1;
        const newTask = {
            id: this.taskId,
            name: dto.name,
            isDone: false
        }
        this.tasks.push(newTask)

        return newTask
    }

    toggleTask(id: string) {
        try {
            const task = this.tasks.find((task) => task.id === Number(id))
            task.isDone = !task.isDone;
            return task;
        } catch (err) {
            return 'No such task'
        }
    }
}
