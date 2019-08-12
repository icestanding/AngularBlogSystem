import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { LoginServiceService } from './service/login/login-service.service';
import { SidebarService } from './service/sidebar/sidebar.service';
import { LoginModule } from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotfoundComponent } from './share/notfound/notfound.component';
import { ShareModule } from './share/app-share.module';
import { AdminModule } from './admin/admin.module';
import { FrontComponent } from './front/front.component'
import { FrontModule } from './front/front.module';
import { AdminComponent } from './admin/admin.component';
import { MatCardModule,MatProgressSpinnerModule } from '@angular/material';
import { ColorService } from './service/color/color.service'
import { Routes  } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    // LoginModule,
    FrontModule,

    // BrowserAnimationsModule,
    // AdminModule,
    // ShareModule,
    // HttpModule,
    // MatCardModule,
    // MatProgressSpinnerModule,
],
  declarations: [
    AppComponent,
    TestComponent,
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }