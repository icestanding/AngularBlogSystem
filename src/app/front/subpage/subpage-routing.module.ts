import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, CanActivate } from '@angular/router';
import { SubpageComponent } from './subpage.component';
import { LoginRouterGuard } from '../../guard/loginguard'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'sub', component: SubpageComponent, canActivate:[LoginRouterGuard]}])
  ],
  declarations: [],
  providers: [LoginRouterGuard]
})
export class SubpageRoutingModule { }
