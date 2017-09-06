import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeightfullDirective } from './directive/heightfull.directive';
import { ScrollDirective } from './directive/scroll.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeightfullDirective, ScrollDirective],
  exports: [HeightfullDirective, ScrollDirective]
})
export class ShareModule { }
