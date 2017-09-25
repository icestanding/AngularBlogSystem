import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { MainpageComponent } from './mainpage/mainpage.component';
import { FrontComponent } from './front.component';


@NgModule({
  imports: [
 
    RouterModule.forChild([{path:'', component: FrontComponent,
    children:[{path:'', pathMatch: 'full', component:MainpageComponent}]}]),
  ],
   exports:[RouterModule],
  declarations: []
})
export class FrontRoutingModule { }
