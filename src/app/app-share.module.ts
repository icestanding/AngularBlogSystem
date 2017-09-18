import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeightfullDirective } from './directive/heightfull/heightfull.directive';
import { ScrollDirective } from './directive/scroll/scroll.directive';


// this file is for directive declarations
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeightfullDirective, ScrollDirective],
  exports: [HeightfullDirective, ScrollDirective]
})
export class ShareModule { }
