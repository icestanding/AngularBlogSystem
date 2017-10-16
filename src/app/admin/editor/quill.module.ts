import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatInputModule,
  MatIconModule,
  MatSelectModule, 
  MatOptionModule,
  MatButtonModule,
  MatListModule} from '@angular/material';
import { QuillEditorComponent } from './quill-editor.component';
import { FormsModule } from '@angular/forms'
// import { QuillRoutingModule } from './quill-routing.module'
// import { MatInputModule } from '@angular/material';


@NgModule({
  imports: [
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatListModule,
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
