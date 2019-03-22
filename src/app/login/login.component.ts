import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert';

import { UsuarioService } from '../services/service.index';
import { Usuario } from './../models/usuario.model';

declare function init_plug_admin();
declare function init_plug_demo();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor( public router: Router,
                public _usuarioService: UsuarioService ) { }

  rememberme: boolean = false;
  email: string;

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');
    init_plug_admin();
    init_plug_demo();

     this.email = localStorage.getItem('email') || '';

    if ( this.email.length > 1 ) {
      this.rememberme = true;
    }
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');
  }

  ingresar( forma: NgForm ) {

    let usuario = new Usuario ( null, forma.value.email, forma.value.password );

    this._usuarioService.login( usuario, forma.value.rememberme )
                  .subscribe( () => {
                    // window.location.href = '#/dashboard';
                    this.router.navigate( ['dashboard'] );
                  });

    // swal('Oops!', 'Something went wrong!', 'error');
    // this.router.navigate( ['/dashboard'] );
  }

}
