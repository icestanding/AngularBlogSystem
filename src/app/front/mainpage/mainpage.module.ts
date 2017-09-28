import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage.component';
import { MdCardModule,MdListModule,MdButtonModule } from '@angular/material';
import { BlogcardComponent } from './blogcard/blogcard.component'

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdListModule,
    MdButtonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [MainpageComponent, BlogcardComponent]
})
export class MainpageModule { }
