import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
import { RouterModule, Routes} from '@angular/router';
// import { SuccessfulpageComponent } from './successfulpage/successfulpage.component';
import { LoginServiceService } from './login-service.service';
// import { LoginfComponent } from './login/loginf/loginf.component';
import { LoginModule } from './login/login.module';
import { HeaderComponent } from './share/header/header.component';
import { FooterComponent } from './share/footer/footer.component';





@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    LoginModule,
    RouterModule.forRoot([])
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

