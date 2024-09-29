import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CreateTaskComponent } from "./components/create-task/create-task.component";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageTaskComponent } from './components/page-task/page-task.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageTaskComponent,
    ListTaskComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CreateTaskComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
