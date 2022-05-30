import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { AccountLayoutComponent } from './layout/account-layout/account-layout.component';
import { RegisterComponent } from './pages/auth-page/register/register.component';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TokenInterceptorService } from 'src/app/services/token-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AuthPageComponent,
    AccountPageComponent,
    HomeLayoutComponent,
    AccountLayoutComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
