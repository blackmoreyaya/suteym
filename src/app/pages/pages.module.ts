import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTING } from './pages.routes';
import { ChartsModule } from 'ng2-charts';

// Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { ProfileComponent } from './profile/profile.component';

// Pipes Module
import { PipesModule } from './../pipes/pipes.module';

// Usuarios
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { MantenimientoUsuarioComponent } from './usuarios/mantenimiento-usuario/mantenimiento-usuario.component';

// Modal imágenes
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        IncrementadorComponent,
        GraficoDonaComponent,
        ProfileComponent,
        CrearUsuarioComponent,
        MantenimientoUsuarioComponent,
        ModalUploadComponent
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTING,
        FormsModule,
        ChartsModule,
        PipesModule,
        CommonModule,
        ReactiveFormsModule
    ]
})

export class PagesModule {}
