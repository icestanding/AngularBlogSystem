import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { MainpageComponent } from './mainpage/mainpage.component';
import { FrontComponent } from './front.component';
import { BlogComponent } from './blog/blog.component';
import { BlogcardComponent } from './mainpage/blogcard/blogcard.component';
import { AchieveComponent } from './achieve/achieve.component';



@NgModule({
  imports: [

    RouterModule.forChild([{path:'', component: FrontComponent,
    children:[
      {path:'',  component:MainpageComponent, data:{'state': 'main'}},
      {path:'blog',  component: BlogComponent,  data:{'state': 'blog'}},  
      {path:'achieve',  component: AchieveComponent,  data:{'state': 'achieve'}}    
          
      ]}]),
  ],
   exports:[RouterModule],
  declarations: []
})
export class FrontRoutingModule { }
