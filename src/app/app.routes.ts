import { Routes, RouterModule } from '@angular/router';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { LoginComponent } from './login/login.component';


const ROUTES: Routes = [
    { path: 'login', component: LoginComponent},
    { path: '**', component: NoPageFoundComponent }
];

export const APP_ROUTING = RouterModule.forRoot( ROUTES, { useHash: true } );
