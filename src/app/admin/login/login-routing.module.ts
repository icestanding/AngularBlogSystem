
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule } from '@angular/material';
import { MdInputModule } from '@angular/material';


@NgModule({
  imports: [RouterModule.forChild([{path: 'login', component: LoginComponent}]),
    BrowserAnimationsModule,
    MdToolbarModule,
    MdInputModule],
  exports:[RouterModule]
})
export class HomeModule { }