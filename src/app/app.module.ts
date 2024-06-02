import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { MaterialModule } from './utilities/material/material.module';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuComponent } from './utilities/menu/menu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { RecordsComponent } from './pages/records/records.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { PagesComponent } from './pages/pages/pages.component';
import { LoginComponent } from './security/login/login.component';
import { AccountComponent } from './accounts/account/account.component';
import { AuthFormComponent } from './security/auth-form/auth-form.component';
import { RegistersComponent } from './security/registers/registers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './security/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    MenuComponent,
    DashboardComponent,
    AccountsComponent,
    RecordsComponent,
    AnalyticsComponent,
    PagesComponent,
    LoginComponent,
    AccountComponent,
    AuthFormComponent,
    RegistersComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
