import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';

const ROUTES: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard', icono: 'dashboard' } },
            { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráfica', icono: 'pie_chart' } },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress', icono: 'skip_next' } },
            { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
        ]
    },
];

export const PAGES_ROUTING = RouterModule.forRoot( ROUTES );
