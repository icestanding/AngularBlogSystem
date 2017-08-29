import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SubpageComponent } from './subpage.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'sub', component: SubpageComponent}])
  ],
  declarations: []
})
export class SubpageRoutingModule { }
