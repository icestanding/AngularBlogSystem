import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MdInputModule,
  MdIconModule,
  MdSelectModule, 
  MdOptionModule,
  MdButtonModule,
  MdListModule} from '@angular/material';
import { QuillEditorComponent } from './quill-editor.component';
import { FormsModule } from '@angular/forms'
// import { QuillRoutingModule } from './quill-routing.module'
// import { MdInputModule } from '@angular/material';


@NgModule({
  imports: [
    MdInputModule,
    MdIconModule,
    MdSelectModule,
    MdOptionModule,
    MdButtonModule,
    MdListModule,
    CommonModule,
    FormsModule,
    // QuillRoutingModule
  ],
  declarations: [
    QuillEditorComponent
  ],
  exports: [QuillEditorComponent],
  providers: []
})
export class QuillModule { }
