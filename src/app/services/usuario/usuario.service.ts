import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario.model';

import { URL_SERVICIOS } from './../../config/config';

import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import swal from 'sweetalert';
import { SubirArchivoService } from './../subirArchivo/subir-archivo.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string;
  usuario: Usuario;

  constructor( public http: HttpClient,
                public router: Router,
                public _subirArchivoService: SubirArchivoService) {
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

  guardarStorage( id: string, token: string, usuario: Usuario ) {

    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify( usuario ));

    this.usuario = usuario;
    this.token = token;

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

                  this.guardarStorage( resp.id, resp.token, resp.usuario );
                  return true;

        return true;

      }));

  }


  actualizarUsuario( usuario: Usuario ) {

    let url = URL_SERVICIOS + '/usuario/' + usuario._id;
    url += '?token=' + this.token;

    return this.http.put(url, usuario).pipe(
      map( (resp: any) => {

        if ( usuario._id === this.usuario._id ) {
          let usuarioDB: Usuario = resp.usuario;
          this.guardarStorage(usuarioDB._id, this.token, usuarioDB);
        }

        swal('Usuario actualizado', usuario.nombre, 'success');

        return true;

      }));

  }

  cambiarImagen( archivo: File, id: string ) {

    this._subirArchivoService.subirArchivo( archivo, 'usuarios', id )
              .then( (resp: any) => {

                this.usuario.img = resp.usuario.img;
                swal('Imagen actualizada', this.usuario.nombre, 'success');

                this.guardarStorage( id, this.token, this.usuario );

              })
              .catch( resp => {
                console.log(resp);
              });
  }

  crearusuario( usuario: Usuario ) {

    let url = URL_SERVICIOS + '/usuario';
    url += '?token=' + this.token;

    return this.http.post( url, usuario ).pipe(
                map( (resp: any) => {

                  swal( 'Usuario registrado!', usuario.email, 'success' );
                  return resp;

                })
    );

  }


  cargarUsuarios( desde: number = 0 ) {

    let url = URL_SERVICIOS + '/usuario?desde=' + desde;

    return this.http.get( url );

  }


  buscarUsuario( termino: string ) {

    let url = URL_SERVICIOS + '/busqueda/coleccion/usuarios/' + termino;
    return this.http.get( url ).pipe(
                map( (resp: any) => resp.usuarios )
    );

  }


  borrarUsuario( id: string ) {

    let url = URL_SERVICIOS + '/usuario/' + id;
    url += '?token=' + this.token;

    return this.http.delete( url ).pipe(
                map( resp => {
                  swal('Usuario borrado', 'Se ha eliminado el usuario correctamente', 'success');
                  return true;
                })
            );

  }



}
