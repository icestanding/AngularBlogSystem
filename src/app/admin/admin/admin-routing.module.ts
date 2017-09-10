import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router'



@NgModule({
  imports: [RouterModule.forChild([{path: 'admin', component: AdminComponent}]),
  ],
  exports:[RouterModule]
})
export class AdminRoutingModule { }

