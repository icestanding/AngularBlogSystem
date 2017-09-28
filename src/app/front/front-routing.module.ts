import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { MainpageComponent } from './mainpage/mainpage.component';
import { FrontComponent } from './front.component';
import { BlogComponent } from './blog/blog.component';



@NgModule({
  imports: [
 
    RouterModule.forChild([{path:'', component: FrontComponent,
    children:[
      {path:'', pathMatch: 'full', component:MainpageComponent},
      {path:'blog', pathMatch: 'full', component:BlogComponent}
  ]}]),
  ],
   exports:[RouterModule],
  declarations: []
})
export class FrontRoutingModule { }
