import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

declare function init_plug_admin();
declare function init_plug_demo();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor( public router: Router ) { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');
    init_plug_admin();
    init_plug_demo();
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');
  }

  ingresar() {
    this.router.navigate( ['/dashboard'] );
  }

}
