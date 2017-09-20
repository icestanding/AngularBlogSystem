import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { LoginServiceService } from './service/login/login-service.service';
import { LoginModule } from './admin/login/login.module';
import { MainpageModule } from './front/mainpage/mainpage.module';
import { HeaderComponent } from './share/header/header.component';
import { FooterComponent } from './share/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule,MdSlideToggleModule } from '@angular/material';
import { ThemeDirective } from './directive/theme/theme.directive';
import { MdButtonModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdMenuModule } from '@angular/material'
import { MdToolbarModule }from '@angular/material'
import { SubpageModule } from './front/subpage/subpage.module';
import { NavComponent } from './share/header/nav/nav.component';
import { NotfoundComponent } from './share/notfound/notfound.component';
import { ShareModule } from './app-share.module';
import { AdminModule } from './admin/admin/admin.module';
import { MainpageComponent } from './front/mainpage/mainpage.component'
import { SubpageComponent } from './front/subpage/subpage.component'



@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    LoginModule,
    MainpageModule,
    RouterModule.forRoot(
      [
        {path: '',   component: MainpageComponent},
        {path: 'sub', component:SubpageComponent},
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
    SubpageModule,
    AdminModule,
    ShareModule,
    MdSlideToggleModule
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

