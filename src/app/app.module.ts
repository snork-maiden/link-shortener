import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { LogInComponent } from './authorization/log-in/log-in.component';
import { SignUpComponent } from './authorization/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthButtonComponent } from './authorization/auth-button/auth-button.component';
import { AuthErrorComponent } from './authorization/auth-error/auth-error.component';
import { FormFieldComponent } from './authorization/form-field/form-field.component';
import { AddLinkComponent } from './dashboard/add-link/add-link.component';
import { LinkListComponent } from './dashboard/link-list/link-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    AuthorizationComponent,
    LogInComponent,
    SignUpComponent,
    DashboardComponent,
    AuthButtonComponent,
    AuthErrorComponent,
    FormFieldComponent,
    AddLinkComponent,
    LinkListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
