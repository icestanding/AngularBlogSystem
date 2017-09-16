import { NgModule } from '@angular/core';
import { BlogComponent } from './blog.component';
import { RouterModule } from '@angular/router'



@NgModule({
  imports: [RouterModule.forChild([{path: 'admin/blog', component: BlogComponent}]),
  ],
  exports:[RouterModule]
})
export class BlogRoutingModule { }
