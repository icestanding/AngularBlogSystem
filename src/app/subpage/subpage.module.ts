import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubpageComponent } from './subpage.component';
import { SubpageRoutingModule } from './subpage-routing.module'


@NgModule({
  imports: [
    CommonModule,
    SubpageRoutingModule
  ], declarations: [SubpageComponent]
})
export class SubpageModule { }
