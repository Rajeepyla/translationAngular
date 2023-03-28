import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminDashboardComponent } from './modules/components/admin-dashboard/admin-dashboard.component';
import { HeadresComponent } from './modules/components/headres/headres.component';
import { FooterComponent } from './modules/components/footer/footer.component';
import { HomeComponent } from './modules/components/home/home.component';
import { AboutComponent } from './modules/components/about/about.component';
import { AuthGuard } from './auth.guard';
import { RxjsComponent } from './rxjs/rxjs.component';
import { OperatorsComponent } from './operators/operators.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LoginComponent,
    ForgotPasswordComponent,
    PagenotfoundComponent,
    AdminDashboardComponent,
    HeadresComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    RxjsComponent,
    OperatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
