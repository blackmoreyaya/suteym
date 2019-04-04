import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { ProfileComponent } from './profile/profile.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { MantenimientoUsuarioComponent } from './usuarios/mantenimiento-usuario/mantenimiento-usuario.component';

import { LoginGuard } from './../services/guards/login.guard';

const ROUTES: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [ LoginGuard ],
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard', icono: 'dashboard' } },
            { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráfica', icono: 'pie_chart' } },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress', icono: 'skip_next' } },
            { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil', icono: 'person' } },
            { path: 'crearUsuario', component: CrearUsuarioComponent, data: { titulo: 'Crear usuario', icono: 'person' } },
            { path: 'mantenimientoUsuarios', component: MantenimientoUsuarioComponent, data: { titulo: 'Mantenimiento usuario', icono: 'build' } },
            { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
        ]
    },
];

export const PAGES_ROUTING = RouterModule.forRoot( ROUTES );
