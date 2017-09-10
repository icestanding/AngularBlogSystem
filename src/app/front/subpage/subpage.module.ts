import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubpageComponent } from './subpage.component';
import { SubpageRoutingModule } from './subpage-routing.module'
import { ShareModule } from '../../share.module';


@NgModule({
  imports: [
    CommonModule,
    SubpageRoutingModule,
    ShareModule
  ], declarations: [SubpageComponent]
})
export class SubpageModule { }
