import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todos/todo/todo.component';
import { TodoItemComponent } from './components/todo-item/todo-item/todo-item.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/layouts/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo/add-todo.component';
import { from } from 'rxjs';
import { AboutComponent } from './components/pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
