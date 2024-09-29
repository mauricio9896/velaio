import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskService } from 'src/app/services/task.service';
import { AlertsService } from 'src/app/services/alerts.service';
import { PeopleModel } from 'src/app/models/task.model';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatTooltipModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CreateTaskComponent implements OnInit {
  @ViewChild('closebutton') closebutton : any;

  private taskService = inject(TaskService);
  private alertsService = inject(AlertsService);
  private fb = inject(FormBuilder);

  taskForm: FormGroup;

  constructor() {
    this.taskForm = this.fb.group({
      taskName: ['', Validators.required],
      taskDate: ['', Validators.required],
      people: this.fb.array([], Validators.required),
    });
  }

  ngOnInit(): void {
    this.addPerson();
  }

  get people(): FormArray {
    return this.taskForm.get('people') as FormArray;
  }

  getSkills(personIndex: number): FormArray {
    return this.people.at(personIndex).get('skills') as FormArray;
  }

  addPerson(): void {
    this.people.push(
      this.fb.group({
        name: [null, [Validators.required, Validators.minLength(6)]],
        age: [null, [Validators.required, Validators.min(19)]],
        skills: this.fb.array([], Validators.required),
      })
    );
    this.addSkill(this.people.length - 1);
  }

  removePerson(index: number): void {
    this.people.removeAt(index);
  }

  addSkill(personIndex: number): void {
    const skills = this.getSkills(personIndex);
    skills.push(
      this.fb.group({
        nameSkill: ['', Validators.required],
      })
    );
  }

  removeSkill(personIndex: number, skillIndex: number): void {
    const skills = this.getSkills(personIndex);
    console.log('skills :>> ', skills);
    console.log('skills.value :>> ', skills.value);
    if(skills.value.length === 1) return this.alertsService.alertInfo("La persona debe tener al menos una habilidad");
    skills.removeAt(skillIndex);
  }

  saveTask(): void {
    this.taskService.addTask(this.taskForm.value);
    this.people.value.forEach((people: PeopleModel, index: number) => this.removePerson(index) );
    this.taskForm.reset();
    this.closebutton.nativeElement.click();
    this.alertsService.alertSuccess('Tarea Creada!');
  }
}

export function uniqueNameValidator(formArray: FormArray): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const names = formArray.controls.map(control => control.get('name')?.value);
    const hasDuplicate = names.some((name, index) => names.indexOf(name) !== index);
    return hasDuplicate ? { duplicateName: true } : null;
  };
}

