import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { MainpageComponent } from './mainpage.component';

@NgModule({
  imports: [
    RouterModule.forChild([{path: '' , component: MainpageComponent}]),
    CommonModule
  ],
})
export class MainpageRoutingModule { }
