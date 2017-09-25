import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { LoginServiceService } from './service/login/login-service.service';
import { LoginModule } from './login/login.module';
import { HeaderComponent } from './share/header/header.component';
import { FooterComponent } from './share/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule,MdSlideToggleModule, MdListModule } from '@angular/material';
import { ThemeDirective } from './directive/theme/theme.directive';
import { MdButtonModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdMenuModule } from '@angular/material'
import { MdToolbarModule }from '@angular/material'

import { NavComponent } from './share/header/nav/nav.component';
import { NotfoundComponent } from './share/notfound/notfound.component';
import { ShareModule } from './share/app-share.module';
import { AdminModule } from './admin/admin.module';
// import { MainpageComponent } from './front/mainpage/mainpage.component'
// import { SubpageComponent } from './front/subpage/subpage.component'
import { FrontComponent } from './front/front.component'
import { FrontModule } from './front/front.module'
import { AdminComponent } from './admin/admin.component'


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    LoginModule,
    FrontModule,
    RouterModule.forRoot(
      [
        { path: '',   component: FrontComponent},
        { path: 'admin', component: AdminComponent},
        {path: '**', component:NotfoundComponent}
      ],
      {enableTracing: true}
    ),
    BrowserAnimationsModule,
    MdCardModule,
    MdButtonModule,
    MdSidenavModule,
    MdMenuModule,
    MdToolbarModule,
    AdminModule,
    ShareModule,
    MdSlideToggleModule,
    MdListModule
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

