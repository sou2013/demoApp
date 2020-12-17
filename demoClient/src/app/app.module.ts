import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './service/user.service';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageService } from './service/image.service';
import { ImageFormComponent } from './image-form/image-form.component';
import { TestformComponent } from './testform/testform.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],

  declarations: [
    AppComponent,
    UserListComponent,
    ImageListComponent,
    ImageFormComponent,
    TestformComponent,
    SuccessComponent
  ],

  providers: [UserService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
