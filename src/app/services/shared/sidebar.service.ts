import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'widgets',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'Progress', url: '/progress' },
        { titulo: 'Graficas', url: '/graficas1' },
      ]
    },
    {
      titulo: 'Crear',
      icono: 'add_circle_outline',
      submenu: [
        { titulo: 'Usuario', url: '/crearUsuario' },
        { titulo: 'Agremiado', url: '/crearAgremiado' },
        { titulo: 'Puesto', url: '/crearPuesto' },
      ]
    },
    {
      titulo: 'Mantenimiento',
      icono: 'build',
      submenu: [
        { titulo: 'Usuario', url: '/mantenimientoUsuarios' }
      ]
    }
  ];

  constructor() { }
}
