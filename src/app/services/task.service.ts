import { Injectable } from '@angular/core';
import { TaskModel } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _tasks: TaskModel[] = [];

  get tasks(): TaskModel[] {
    return this._tasks;
  }

  constructor() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) this._tasks = JSON.parse(storedTasks);
  }


  addTask(task: TaskModel): void {
    this._tasks = [...this._tasks, task];
    localStorage.setItem('tasks', JSON.stringify(this._tasks));
  }

  updateTasks(newTasks: TaskModel[]) {
    this._tasks = newTasks;
    localStorage.setItem('tasks', JSON.stringify(this._tasks));
  }
}
