export interface TaskModel {
  id: string,
  taskName : string,
  taskDate: string,
  people: PeopleModel[],
  completed: boolean
}

export interface PeopleModel {
  name: string,
  age: number,
  skills: SkillModel[]
}

export interface SkillModel {
  nameSkill: string,
}
