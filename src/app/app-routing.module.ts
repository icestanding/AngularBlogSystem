import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent} from './test/test.component'
import { FrontModule } from './front/front.module';

import { MainpageComponent } from './front/mainpage/mainpage.component';

const appRoutes: Routes = [
  { path: '', component: MainpageComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
