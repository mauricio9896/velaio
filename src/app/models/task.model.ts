export interface TaskModel {
  taskName : string,
  taskDate: string,
  people: PeopleModel[]
}

export interface PeopleModel {
  name: string,
  age: number,
  skills: SkillModel[]
}

export interface SkillModel {
  nameSkill: string,
}
