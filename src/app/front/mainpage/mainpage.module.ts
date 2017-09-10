import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage.component';
import { MainpageRoutingModule } from  './mainpage-routing.module';
import { MdCardModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MainpageRoutingModule,
    MdCardModule
  ],
  declarations: [MainpageComponent]
})
export class MainpageModule { }
