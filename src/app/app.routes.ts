import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { NoPageFoundComponent } from './components/shared/no-page-found/no-page-found.component';
import { Graficas1Component } from './components/pages/graficas1/graficas1.component';
import { LoginComponent } from './components/login/login.component';
import { PagesComponent } from './components/pages/pages.component';
import { ProgressComponent } from './components/pages/progress/progress.component';

const ROUTES: Routes = [
    { path: 'login', component: LoginComponent},
    { path: '**', component: NoPageFoundComponent }
];

export const APP_ROUTING = RouterModule.forRoot( ROUTES, { useHash: true } );
