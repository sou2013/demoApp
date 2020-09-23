import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from './service/user.service';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageService } from './service/image.service';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
