import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TaskModel } from 'src/app/models/task.model';
import { AlertsService } from 'src/app/services/alerts.service';
import { TaskService } from 'src/app/services/task.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit  {

  readonly taskService = inject(TaskService);
  readonly alertsService = inject(AlertsService);
  public tasks : TaskModel[] = [];
  public filter : string = 'all';

  constructor() { }

  ngOnInit(): void {
    this.taskService.tasks$.subscribe(() => {
      this.filterTasks();
    });
  }

  completedTask(task: TaskModel) {
    task.completed = true;
    this.taskService.updateTasks(this.tasks);
    this.alertsService.alertSuccess('Tarea actualizada correctamente');
  }

  filterTasks(){
    this.tasks = this.taskService.tasks;
    this.tasks =  this.tasks.filter(task => {
      if (this.filter === 'completed') return task.completed;
      else if (this.filter === 'pending') return !task.completed;
      else return task;
    });
  }

  deleteTask(task: TaskModel){
    if(!task.id) return this.alertsService.alertError('Task not found');
    this.taskService.deleteTask(task.id);
    this.alertsService.alertSuccess('Tarea eliminada correctamente');
  }
}
