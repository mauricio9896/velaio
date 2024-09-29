import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { AlertsService } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-page-task',
  templateUrl: './page-task.component.html',
  styleUrls: ['./page-task.component.css']
})
export class PageTaskComponent {
  readonly dialog = inject(MatDialog);
  readonly alerts = inject(AlertsService);

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(CreateTaskComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: true,
    });
  }

  test(){
    this.alerts.alertSuccess('Success!');
  }
}
