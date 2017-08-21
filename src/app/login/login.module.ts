import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { HomeModule } from './login-routing.module'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdToolbarModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
// import { MdButton } from '@angular/material';
// for form control
import {FormsModule,  ReactiveFormsModule} from '@angular/forms';
import { MdButtonModule } from '@angular/material';
import { MdCardModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdInputModule,
    FormsModule,
    MdButtonModule,
    // MdButton,
    ReactiveFormsModule,
    MdCardModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
