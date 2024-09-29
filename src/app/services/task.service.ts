import { Injectable } from '@angular/core';
import { TaskModel } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private _tasks: TaskModel[] = [
    {
      taskName: "Subir la base de datos ",
      taskDate: "2024-10-26",
      people: [
          {
              name: "Mauricio Buitrago P ",
              age: 25,
              skills: [
                  {
                      nameSkill: "Pyhton "
                  }
              ]
          },
          {
              name: "Justine Rios Bautista",
              age: 20,
              skills: [
                  {
                      nameSkill: "Excel"
                  },
                  {
                      nameSkill: "Paint"
                  }
              ]
          }
      ]
    }
  ];

  get tasks(): TaskModel[] {
    return this._tasks;
  }

  addTask(task: TaskModel): void {
    this._tasks = [...this._tasks, task];
  }
}
