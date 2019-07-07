import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { RouterModule, CanActivate } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { LoginRouterGuard } from '../guard/loginguard'




@NgModule({
  imports: [
    RouterModule.forChild([{path:'admin', component: AdminComponent, canActivate:[LoginRouterGuard],
      children:[{path: '', pathMatch: 'full', redirectTo: 'blog'},
                {path:'blog',component:BlogComponent},
                ]}
    ])],
  exports:[RouterModule],
   providers: [LoginRouterGuard]
})
export class AdminRoutingModule { }

