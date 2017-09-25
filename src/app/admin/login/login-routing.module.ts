
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router'
import { LoginRouterGuard } from '../../guard/loginguard'



@NgModule({
  imports: [RouterModule.forChild([
    
      // {path: 'login', component: LoginComponent, redirectTo:'admin', canActivate:[LoginRouterGuard]},
    {path: 'login', component: LoginComponent}
  ]),
  ],
  exports:[RouterModule]
})
export class HomeModule { }