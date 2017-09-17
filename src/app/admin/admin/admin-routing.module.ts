import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router'



@NgModule({
  imports: [RouterModule.forRoot([{path: 'admin', component: AdminComponent}]),
  ],
  exports:[RouterModule]
})
export class AdminRoutingModule { }

