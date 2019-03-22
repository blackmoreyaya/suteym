import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
    SidebarService,
    SharedService,
    UsuarioService,
    LoginGuard
} from './service.index';

@NgModule({
    imports: [
    CommonModule,
    HttpClientModule
    ],
    providers: [
        SidebarService,
        SharedService,
        UsuarioService,
        LoginGuard
    ],
    declarations: []
})
export class ServiceModule { }
