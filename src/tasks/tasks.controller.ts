import { TaskInterface } from "./models/Task";

import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";



@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) {}
    @Get()
    getTasks():Promise<TaskInterface[]> {

        return this.taskService.getTasks();
       
    }

    @Get(':id')
    getTask(@Param('id') id: string) {

        return this.taskService.getTask(id);
       
    }


    
   


    @Post()
    createTask(@Body() task: CreateTaskDto): Promise<TaskInterface> {
       
        return this.taskService.createTask(task);
    }


   /// Recebendo parametros da url e do corpo:
     @Put(':id')
    update(@Body() task: CreateTaskDto, @Param('id') id) {
       
        return this.taskService.updateTask(id, task);
        
    }
    /// Recebendo parametros da url:
    @Delete(':id')
  
    delete(@Param('id') id) {
       
        return this.taskService.deleteTask(id)
    }
}
