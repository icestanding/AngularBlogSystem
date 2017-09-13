import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MdInputModule,MdIconModule, MdSelectModule, MdOptionModule} from '@angular/material';
import { QuillEditorComponent } from './quill-editor.component';


@NgModule({
  imports: [
    MdInputModule,
    MdIconModule,
    MdSelectModule,
    MdOptionModule,
    CommonModule
  ],
  declarations: [
    QuillEditorComponent
  ],
  exports: [QuillEditorComponent],
  providers: []
})
export class QuillModule { }
