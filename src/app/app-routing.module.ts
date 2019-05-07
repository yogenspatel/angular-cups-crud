import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule'
  },
  {
    path: '',
    loadChildren: './cups-dashboard/card-dashboard.module#CardDashBoardModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
