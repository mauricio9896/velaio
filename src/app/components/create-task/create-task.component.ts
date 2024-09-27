import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTaskComponent {
  taskForm: FormGroup;

  get people(): FormArray {
    return this.taskForm.get('people') as FormArray;
  }

  getSkills(personIndex: number): FormArray {
    return this.people.at(personIndex).get('skills') as FormArray;
  }

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      taskName: ['', Validators.required],
      taskDate: ['', Validators.required],
      people: this.fb.array([], Validators.required),
    });
  }

  addPerson(): void {
    this.people.push(
      this.fb.group({
        name: ['', Validators.required],
        age: [null, [Validators.required]],
        skills: this.fb.array([], Validators.required),
      })
    );
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
    skills.removeAt(skillIndex);
  }

  saveTask(): void {
    console.log(this.taskForm.value);
    if (this.taskForm.valid) {
    }
  }
}
