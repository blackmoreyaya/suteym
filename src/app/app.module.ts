import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos
import { PagesModule } from './components/pages/pages.module';

// Rutas
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { HeaderComponent } from './components/shared/header/header.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './components/shared/breadcrumbs/breadcrumbs.component';
import { NoPageFoundComponent } from './components/shared/no-page-found/no-page-found.component';

import { PagesComponent } from './components/pages/pages.component';
import { ProgressComponent } from './components/pages/progress/progress.component';
import { Graficas1Component } from './components/pages/graficas1/graficas1.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // HeaderComponent,
    // SidebarComponent,
    // BreadcrumbsComponent,
    // NoPageFoundComponent,
    // DashboardComponent,
    // ProgressComponent
    // PagesComponent,
    // Graficas1Component,
  ],
  imports: [
  BrowserModule,
    APP_ROUTING,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
