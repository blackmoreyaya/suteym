import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/service.index';
import { Usuario } from 'src/app/models/usuario.model';
import { ModalUploadService } from 'src/app/components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-mantenimiento-usuario',
  templateUrl: './mantenimiento-usuario.component.html',
  styles: []
})
export class MantenimientoUsuarioComponent implements OnInit {

  usuarios: Usuario[] = [];
  desde: number = 0;

  totalRegistros: number = 0;
  cargando: boolean = true;


  constructor( public _usuarioService: UsuarioService,
                public _modalUploadService: ModalUploadService ) { }

  ngOnInit() {

    this.cargarUsuarios();
    this._modalUploadService.notificacion
        .subscribe( resp => this.cargarUsuarios() );

  }

  cargarUsuarios() {

    this.cargando = true;

    this._usuarioService.cargarUsuarios(this.desde).subscribe( (resp: any) => {
      // console.log(resp);
      this.totalRegistros = resp.total;
      this.usuarios = resp.usuarios;
      this.cargando = false;
    });

  }

  cambiarDesde ( valor: number ) {
    let desde = this.desde + valor;

    if (desde >= this.totalRegistros) {
      return;
    }

    if (desde < 0) {
      return;
    }

    this.desde += valor;
    this.cargarUsuarios();

  }

  buscarUsuario ( termino: string ) {

    if (termino.length <= 0) {
      this.cargarUsuarios();
      return;
    }

    this.cargando = true;

    this._usuarioService.buscarUsuario( termino )
          .subscribe((usuarios: Usuario[]) => {
            this.usuarios = usuarios;
            this.cargando = false;
            // console.log(this.usuarios);
          });

  }


  guardarUsuario( usuario: Usuario ) {
    // console.log( usuario );
    this._usuarioService.actualizarUsuario( usuario )
        .subscribe();
  }


  borrarUsuario( usuario: Usuario ) {

    console.log(usuario._id, this._usuarioService.usuario._id);

    if ( usuario._id === this._usuarioService.usuario._id ) {
      swal( 'No sse puede borrar usuario', 'No se puede borrar a usted mismo', 'error' );
      return;
    }

    swal({
      title: '¿Estas seguro de borrar este usuario?',
      text: 'Estas a punto de borrar a ' + usuario.nombre,
      icon: 'warning',
      buttons: ['Cancelar', 'Aceptar'],
      dangerMode: true
    })
      .then(borrar => {
        console.log(borrar);
        if (borrar) {
          this._usuarioService.borrarUsuario( usuario._id )
            .subscribe(borrado => {
              console.log(borrado);
              this.cargarUsuarios();
            });
        }
      });

  }


  mostrarModal( id: string ) {

    this._modalUploadService.mostrarModal( 'usuarios', id );

  }

}
