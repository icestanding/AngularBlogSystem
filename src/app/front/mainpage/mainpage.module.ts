import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage.component';
import { MdCardModule,MdListModule,MdButtonModule } from '@angular/material';
import { BlogcardComponent } from './blogcard/blogcard.component'

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdListModule,
    MdButtonModule
  ],
  declarations: [MainpageComponent, BlogcardComponent]
})
export class MainpageModule { }
