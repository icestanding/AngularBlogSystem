import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage.component';
// import { MainpageRoutingModule } from  './mainpage-routing.module';
import { MdCardModule,MdListModule,MdButtonModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    // MainpageRoutingModule,
    MdCardModule,
    MdListModule,
    MdButtonModule
  ],
  declarations: [MainpageComponent]
})
export class MainpageModule { }
