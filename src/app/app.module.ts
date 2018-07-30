import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponentComponent } from './viewComponents/user-list-component/user-list-component.component';
import { UserDetailComponentComponent } from './viewComponents/user-detail-component/user-detail-component.component';
import { TaskListComponentComponent } from './viewComponents/task-list-component/task-list-component.component';
import { TaskDetailComponentComponent } from './viewComponents/task-detail-component/task-detail-component.component';
import { UsersComponentComponent } from './viewComponents/users-component/users-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponentComponent,
    UserDetailComponentComponent,
    TaskListComponentComponent,
    TaskDetailComponentComponent,
    UsersComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
