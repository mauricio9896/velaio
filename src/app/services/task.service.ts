import { Injectable } from '@angular/core';
import { TaskModel } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _tasks: TaskModel[] = [
    {
      taskName: 'tarea 1 ',
      taskDate: '2024-09-29',
      people: [
        {
          name: 'Mauricio Buitrago',
          age: 25,
          skills: [
            {
              nameSkill: 'TypeScript',
            },
            {
              nameSkill: 'Java ',
            },
            {
              nameSkill: 'NodeJs',
            },
          ],
        },
        {
          name: 'Juan David Gonzaléz ',
          age: 25,
          skills: [
            {
              nameSkill: 'Java ',
            },
            {
              nameSkill: 'Angular',
            },
            {
              nameSkill: 'React',
            },
          ],
        },
        {
          name: 'Carrasco',
          age: 27,
          skills: [
            {
              nameSkill: 'Java',
            },
          ],
        },
      ],
    },
    {
      taskName: 'tarea 2 ',
      taskDate: '2024-10-10',
      people: [
        {
          name: 'Alejandra Buitrago',
          age: 19,
          skills: [
            {
              nameSkill: 'Cantar',
            },
            {
              nameSkill: 'Bailar',
            },
          ],
        },
        {
          name: 'Justine Egreth Rios',
          age: 20,
          skills: [
            {
              nameSkill: 'Bailar',
            },
          ],
        },
      ],
    },
    {
      taskName: 'tarea 3 ',
      taskDate: '2024-09-30',
      people: [
        {
          name: 'Justine Egreth Rios ',
          age: 20,
          skills: [
            {
              nameSkill: 'Bailar',
            },
          ],
        },
        {
          name: 'Jimme Buitrago ',
          age: 35,
          skills: [
            {
              nameSkill: 'Vender',
            },
            {
              nameSkill: 'Lider',
            },
          ],
        },
      ],
    },
  ];

  get tasks(): TaskModel[] {
    return this._tasks;
  }

  addTask(task: TaskModel): void {
    this._tasks = [...this._tasks, task];
  }
}
