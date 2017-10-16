import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from "./admin.component";
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from "./admin-routing.module";
import { MatButtonModule } from '@angular/material';

// import { QuillModule } from './editor/quill.module'
import { ShareModule } from '../share/app-share.module';
import { BlogModule } from './blog/blog.module';

@NgModule({
  imports: [
   CommonModule,
   AdminRoutingModule,
   BrowserModule,
   HttpClientModule,
   MatButtonModule,
   ShareModule,
  //  QuillModule,
   BlogModule
  ],
  declarations: [
    AdminComponent,

  ],
  exports: [AdminComponent]
})
export class AdminModule {}