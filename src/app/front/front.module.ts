import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontComponent } from './front.component';
import { RouterModule } from '@angular/router';
import { FrontRoutingModule } from './front-routing.module'
import { MainpageModule } from './mainpage/mainpage.module'
import { MdSidenavModule, MdCardModule} from '@angular/material'

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FrontRoutingModule,
    MainpageModule,
    MdSidenavModule, 
    MdCardModule
  ],

  declarations: [FrontComponent]
})
export class FrontModule { }
