import { IsString } from "class-validator";

export class TaskDTO {
    @IsString()
    name: string
}