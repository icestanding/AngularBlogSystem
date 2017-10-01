import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { MainpageComponent } from './mainpage/mainpage.component';
import { FrontComponent } from './front.component';
import { BlogComponent } from './blog/blog.component';
import { BlogcardComponent } from './mainpage/blogcard/blogcard.component';



@NgModule({
  imports: [

    RouterModule.forChild([{path:'', component: FrontComponent,
    children:[
      {path:'', pathMatch: 'full', component:MainpageComponent,data: { state: 'home'} },
      // {path:'', pathMatch: 'full', component:BlogcardComponent}  ,
      {path:'blog', pathMatch: 'full', component: BlogComponent, data: { state: 'about'} }      
          
      ]}]),
  ],
   exports:[RouterModule],
  declarations: []
})
export class FrontRoutingModule { }
