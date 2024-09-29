import { Component, inject } from '@angular/core';
import { TaskModel } from 'src/app/models/task.model';
import { AlertsService } from 'src/app/services/alerts.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent {
  readonly taskService = inject(TaskService);
  readonly alertsService = inject(AlertsService);

  get tasks(): TaskModel[] {
    return this.taskService.tasks
  }

  onCheckboxChange(event: any, task: TaskModel) {
    task.completed = event.target.checked;
    this.taskService.updateTasks(this.tasks);
    this.alertsService.alertSuccess('Tarea actualizada correctamente');
  }
}
