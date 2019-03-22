import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario.model';

import { URL_SERVICIOS } from './../../config/config';

import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string;
  usuario: Usuario;

  constructor( public http: HttpClient,
                public router: Router) {
    this.cargarStorage();
  }

  estaLogueado() {
    return this.token.length > 5 ? true : false;
  }

  cargarStorage() {

    if ( localStorage.getItem('token') ) {

      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));

    } else {

      this.token = '';
      this.usuario = null;

    }

  }

  logOut() {

    this.token = '';
    this.usuario = null;

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('id');

    this.router.navigate(['/login']);
    window.location.reload();
  }

  login ( usuario: Usuario, rememberme: boolean = false ) {

    if ( rememberme ) {

      localStorage.setItem( 'email', usuario.email );

    } else {

      localStorage.removeItem( 'email' );

    }

    let url = URL_SERVICIOS + '/login';

    return this.http.post( url, usuario )
                .pipe( map( (resp: any) => {

                localStorage.setItem('id', resp.id);
                localStorage.setItem('token', resp.token);
                localStorage.setItem('usuario', JSON.stringify(resp.usuario));

                this.usuario = resp.usuario;
                this.token = resp.token;

        return true;

      }));

  }

}
