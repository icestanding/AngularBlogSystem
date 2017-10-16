import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { HomeModule } from './login-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material';
import { LoginformComponent } from './loginform/loginform.component';
import { MatSidenavModule } from '@angular/material';
import { ShareModule } from '../share/app-share.module';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HomeModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatProgressBarModule,
    MatSidenavModule,
    ShareModule
  ],
  declarations: [
    LoginComponent, 
    LoginformComponent
  
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
