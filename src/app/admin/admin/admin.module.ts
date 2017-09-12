import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from "./admin.component";
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from "./admin-routing.module";
import { MdButtonModule } from '@angular/material'


@NgModule({
  imports: [
   CommonModule,
   AdminRoutingModule,
   BrowserModule,
   HttpClientModule,
   MdButtonModule
  ],
  declarations: [
    AdminComponent
  ],
  exports: [AdminComponent]
})
export class AdminModule {}