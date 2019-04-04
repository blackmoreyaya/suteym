import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/service.index';


@Component ({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styles: []
})
export class CrearUsuarioComponent implements OnInit {

  forma: FormGroup;
  password: string = 'suteym';

  constructor( public _usuarioService: UsuarioService ) {}

  ngOnInit() {

    this.forma = new FormGroup ({

      nombre: new FormControl( null, Validators.required ),
      email: new FormControl( null, [ Validators.required, Validators.email ] )
      // password: new FormControl( null, Validators.required )

    });

    // this.nombre = this.forma.value.nombre;

    this.forma.setValue({
      nombre: 'suteym',
      email: 'suteym@suteym.com'
    //   password: 'suteym' + this.nombre
    });
  }

  crearPassword() {

    let dividodo = this.forma.value.nombre.split(' ', 1);
    this.password = 'suteym' + dividodo;
    this.password = this.password.toLowerCase();

  }


  registrarUsuario() {

    if ( this.forma.invalid ) {
      swal('Ojo', 'Necesitas llenar correctamente el formulario', 'error');
      return;
    }

    let usuario = new Usuario (
      this.forma.value.nombre,
      this.forma.value.email,
      this.password
    );

    this._usuarioService.crearusuario( usuario )
        .subscribe( resp => {
          console.log(resp);
        });

  }


}
