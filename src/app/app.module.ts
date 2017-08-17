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



// const appRoutes: Routes = [
//     {
//       path: 'login', pathMatch:'full', component: LoginComponent,
//       children: [
//         {
//           path: '',
//           component: LoginfComponent
//         }
//       ]
//     },
//     {
//       path: 'success', 
//       component: SuccessfulpageComponent
//     }
// ]


@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    LoginModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    // LoginComponent,
    // SuccessfulpageComponent,
    // LoginfComponent
  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

