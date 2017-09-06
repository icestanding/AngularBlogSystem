import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { LoginServiceService } from './login-service.service';
import { LoginModule } from './login/login.module';
import { MainpageModule } from './mainpage/mainpage.module';
import { HeaderComponent } from './share/header/header.component';
import { FooterComponent } from './share/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule } from '@angular/material';
import { ThemeDirective } from './theme/theme.directive';
import { MdButtonModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';

import { MdMenuModule } from '@angular/material'
import { MdToolbarModule }from '@angular/material'
import { SubpageModule } from './subpage/subpage.module';
import { NavComponent } from './share/header/nav/nav.component';
import { NotfoundComponent } from './share/notfound/notfound.component';
import { ShareModule } from './share.module'

// import { HeightfullDirective } from './heightfull.directive';




@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    LoginModule,
    MainpageModule,
    RouterModule.forRoot([{path: '**', component:NotfoundComponent}],{enableTracing: true}),
    BrowserAnimationsModule,
    MdCardModule,
    MdButtonModule,
    MdSidenavModule,
    MdMenuModule,
    MdToolbarModule,
    SubpageModule,
    ShareModule
],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ThemeDirective,
    NavComponent,
    NotfoundComponent,
    // HeightfullDirective
  
  ],

  providers: [LoginServiceService],
  bootstrap: [AppComponent],
})
export class AppModule { }

