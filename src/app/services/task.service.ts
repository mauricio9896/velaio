import { Injectable } from '@angular/core';
import { TaskModel } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private _tasks: TaskModel[] = [];

  get tasks(): TaskModel[] {
    return this._tasks;
  }

  addTask(task: TaskModel): void {
    this._tasks = [...this._tasks, task];
  }
}
