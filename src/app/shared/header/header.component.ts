import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  bandera = false;
  claseTitular = 'search-bar';

  constructor() { }

  ngOnInit() {
  }

  abrirBuscador() {

    if ( this.bandera === false ) {
      this.claseTitular = 'search-bar open';
      this.bandera = true;
    } else {
      this.claseTitular = 'search-bar';
      this.bandera = false;
    }

  }

}
