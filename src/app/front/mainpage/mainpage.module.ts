import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage.component';
// import { MainpageRoutingModule } from  './mainpage-routing.module';
import { MdCardModule,MdListModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    // MainpageRoutingModule,
    MdCardModule,
    MdListModule
  ],
  declarations: [MainpageComponent]
})
export class MainpageModule { }
