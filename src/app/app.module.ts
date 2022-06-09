import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { TodoListComponent } from './pages/todo/todo-list/todo-list.component';
import { TodoItemComponent } from './pages/todo/todo-item/todo-item.component';
import { ButtonComponent } from './components/button/button.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipesExampleComponent } from './pages/pipes-example/pipes-example.component';
import { UpperCasePipe } from '@angular/common';
import { PrintListPipe } from './print-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersListComponent,
    UserFormComponent,
    DataBindingComponent,
    TodoListComponent,
    TodoItemComponent,
    ButtonComponent,
    LifeCycleComponent,
    PipesExampleComponent,
    PrintListPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [UpperCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
