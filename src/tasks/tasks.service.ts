
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { TaskInterface } from "./models/Task";
import { CreateTaskDto } from './dto/create-task.dto';
// import { TaskSchema } from "./schemas/task.schema";


@Injectable()
export class TasksService {
     constructor(@InjectModel('Task') private taskModel: Model<TaskInterface>) {}

   async getTasks() {
       return await this.taskModel.find();
    }

    async getTask(id: string) {
        return await this.taskModel.findById(id);
    }

    async createTask(task: CreateTaskDto): Promise<TaskInterface> {
        const newTask = new this.taskModel(task);

       return await newTask.save()
    }
  async updateTask(  id: string, task: CreateTaskDto) {

   return await (await this.taskModel.findById(id)).updateOne(task) 
      
  }
 async deleteTask(id: string) {
     return await this.taskModel.findByIdAndDelete(id)
 }
}
