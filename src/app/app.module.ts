import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { AuthorizationComponent } from './authorization/authorization.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    AuthorizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
