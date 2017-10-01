import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontComponent } from './front.component';
import { RouterModule } from '@angular/router';
import { FrontRoutingModule } from './front-routing.module';
import { MainpageModule } from './mainpage/mainpage.module';
import { MdCardModule, MdSlideToggleModule } from '@angular/material';
import { NavComponent } from '../share/header/nav/nav.component';
import { HeaderComponent } from '../share/header/header.component';
import { FooterComponent } from '../share/footer/footer.component';
import { ThemeDirective } from '../directive/theme/theme.directive';
import { MdButtonModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdMenuModule } from '@angular/material'
import { MdToolbarModule }from '@angular/material';
import { BlogComponent } from './blog/blog.component'
import { MainpageComponent } from './mainpage/mainpage.component'


@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FrontRoutingModule,
    MainpageModule,
    MdSidenavModule, 
    MdCardModule,
    MdSlideToggleModule,
    MdMenuModule ,
    MdButtonModule,
    MdToolbarModule,
  
],

declarations: [ThemeDirective,
  FrontComponent, 
  HeaderComponent, 
  FooterComponent, 
  NavComponent, BlogComponent,
]
})
export class FrontModule { }
