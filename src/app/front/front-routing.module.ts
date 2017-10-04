import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { MainpageComponent } from './mainpage/mainpage.component';
import { FrontComponent } from './front.component';
import { BlogComponent } from './blog/blog.component';
import { BlogcardComponent } from './mainpage/blogcard/blogcard.component';
import { AchieveComponent } from './achieve/achieve.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  imports: [

    RouterModule.forChild([{path:'', component: FrontComponent,
    children:[
      {path:'',  component:MainpageComponent },
      {path:'blog',  component: BlogComponent,  data:{'state': 'blog'}},  
      {path:'achieve',  component: AchieveComponent,  data:{'state': 'achieve'}},
      {path:'about',  component: AboutComponent,  data:{'state': 'about'}}    
          
      ]}]),
  ],
   exports:[RouterModule],
  declarations: []
})
export class FrontRoutingModule { }
