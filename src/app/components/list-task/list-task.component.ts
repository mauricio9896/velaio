import { Component, inject } from '@angular/core';
import { TaskModel } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent {

  constructor(private taskService: TaskService){

  }

  get tasks(): TaskModel[] {
    return this.taskService.tasks
  }

}
