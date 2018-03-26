import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillModule} from '../editor/quill.module'
// import { BlogRoutingModule }from './blog-routing.module'
import { BlogComponent, DialogOverviewExampleDialog } from './blog.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule } from '@angular/material'
@NgModule({
  imports: [
    CommonModule,
    // BlogRoutingModule,
    FormsModule,
    QuillModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [BlogComponent, DialogOverviewExampleDialog],
  exports: [BlogComponent, MatDialogModule],
  entryComponents: [DialogOverviewExampleDialog]
})
export class BlogModule { }
