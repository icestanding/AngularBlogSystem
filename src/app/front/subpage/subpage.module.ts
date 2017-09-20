import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubpageComponent } from './subpage.component';
// import { SubpageRoutingModule } from './subpage-routing.module'
import { ShareModule } from '../../app-share.module';
import { MdCardModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    // SubpageRoutingModule,
    ShareModule,
    MdCardModule
  ], declarations: [SubpageComponent]
})
export class SubpageModule { }
