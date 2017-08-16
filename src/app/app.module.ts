import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes} from '@angular/router';
import { SuccessfulpageComponent } from './successfulpage/successfulpage.component';
import { LoginServiceService } from './login-service.service';
import { LoginfComponent } from './login/loginf/loginf.component';



const appRoutes: Routes = [

    {
      path: 'login', pathMatch:'full', component: LoginComponent,
      children: [
        {
          path: '',
          component: LoginfComponent
        }
      ]
    },
    {
      path: 'success', 
      component: SuccessfulpageComponent
    }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuccessfulpageComponent,
    LoginfComponent,
    // HttpModule
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

