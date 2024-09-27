import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'velaio';

  readonly dialog = inject(MatDialog);

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(CreateTaskComponent, {
      width: '50%',
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: true,
    });
  }
}
