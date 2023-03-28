import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { OperatorsComponent } from './operators/operators.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [ 
  {path: 'login', component:LoginComponent},
  {path: 'rxjs', component:RxjsComponent},
  {path: 'operators', component:OperatorsComponent},
  {path: 'forgotpassword', component:ForgotPasswordComponent},
  {path: 'admin', canActivate:[AuthGuard], loadChildren:()=> import('./modules/admin/admin.module').then((m)=> m.AdminModule)},
 {path: '**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
