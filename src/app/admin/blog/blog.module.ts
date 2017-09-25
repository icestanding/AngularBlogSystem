import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillModule} from '../editor/quill.module'
// import { BlogRoutingModule }from './blog-routing.module'
import { BlogComponent } from './blog.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    // BlogRoutingModule,
    FormsModule,
    QuillModule
  ],
  declarations: [BlogComponent],
  exports: [BlogComponent],
})
export class BlogModule { }
