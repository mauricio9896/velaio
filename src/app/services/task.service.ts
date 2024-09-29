import { Injectable } from '@angular/core';
import { TaskModel } from '../models/task.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class TaskService {
  private _tasks: TaskModel[] = [];
  private tasksSubject: BehaviorSubject<TaskModel[]> = new BehaviorSubject<TaskModel[]>(this._tasks);

  get tasks(): TaskModel[] {
    return this._tasks;
  }

  get tasks$(): Observable<TaskModel[]> {
    return this.tasksSubject.asObservable();
  }

  constructor() {
    this.loadTasksFromStorage();
  }

  public addTask(task: TaskModel): void {
    this._tasks = [...this._tasks, task];
    localStorage.setItem('tasks', JSON.stringify(this._tasks));
    this.tasksSubject.next(this._tasks);
  }

  public updateTasks(newTasks: TaskModel[]): void {
    this._tasks = newTasks;
    localStorage.setItem('tasks', JSON.stringify(this._tasks));
    this.tasksSubject.next(this._tasks);
  }

  public deleteTask(taskId: string): void {
    this._tasks = this._tasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(this._tasks));
    this.tasksSubject.next(this._tasks);
  }

  private loadTasksFromStorage(): void {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      try {
        this._tasks = JSON.parse(storedTasks);
        this.tasksSubject.next(this._tasks);
      } catch (error) {
        console.error('Error parsing tasks from localStorage', error);
        this._tasks = [];
      }
    }
  }
}
