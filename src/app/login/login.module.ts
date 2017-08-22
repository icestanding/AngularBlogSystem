import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { HomeModule } from './login-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
// for form control
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdProgressBarModule } from '@angular/material';
import { LoginformComponent } from './loginform/loginform.component';
import { LoginheaderComponent } from './loginheader/loginheader.component';
import { FooterComponent } from './footer/footer.component';
import { MdSidenavModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HomeModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdInputModule,
    FormsModule,
    MdButtonModule,
    ReactiveFormsModule,
    MdCardModule,
    MdProgressBarModule,
    MdSidenavModule
  ],
  declarations: [LoginComponent, LoginformComponent, LoginheaderComponent, FooterComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
