import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { QuillEditorComponent } from './editor/quill-editor.component';



@NgModule({
  imports: [RouterModule.forChild(
    [{path: 'admin', component: AdminComponent, 
    children:[
                     {
            path: '',
            pathMatch: 'full',
            redirectTo: 'blog'
              },
                {path:'blog',component:BlogComponent},
                {path:'editor/:id',component:QuillEditorComponent},
                {path:'editor',component:QuillEditorComponent}
             ]},
  ]),
  ],
  exports:[RouterModule]
})
export class AdminRoutingModule { }

