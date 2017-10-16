import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage.component';
import { MatCardModule,MatListModule,MatButtonModule } from '@angular/material';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from '../../share/app-share.module';
@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ShareModule
  ],
  declarations: [MainpageComponent]
})
export class MainpageModule { }
