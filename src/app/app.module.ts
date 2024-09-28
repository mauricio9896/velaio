import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { CreateTaskComponent } from "./components/create-task/create-task.component";
import { PageTaskComponent } from './components/page-task/page-task.component';
import { ListTaskComponent } from './components/list-task/list-task.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageTaskComponent,
    ListTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatNativeDateModule,
    CreateTaskComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
