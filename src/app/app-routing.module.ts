import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IphoneComponent } from './pages/iphone/iphone.component';
import { LoginComponent } from './shared/login/login.component';
import { IntranetComponent } from './pages/intranet/intranet.component';
import { AccesorioComponent } from './pages/accesorio/accesorio.component';

const routes: Routes = [
  {path:'',component: DashboardComponent},
  {path:'iphone',component: IphoneComponent},
  {path:'intranet',component: IntranetComponent},
  {path:'login',component: LoginComponent},
  {path:'accesorio',component: AccesorioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
