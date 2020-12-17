import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageFormComponent } from './image-form/image-form.component';
import { TestformComponent } from './testform/testform.component';
import { SuccessComponent } from './success/success.component';


const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'images', component: ImageListComponent },
    { path: 'addImage', component: ImageFormComponent },
    { path: 'testform', component: TestformComponent },
    { path: 'success', component: SuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
