import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeightfullDirective } from './heightfull.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeightfullDirective],
  exports: [HeightfullDirective]
})
export class ShareModule { }
