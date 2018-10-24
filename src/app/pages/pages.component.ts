import { Component, OnInit, OnDestroy } from '@angular/core';

declare function init_plug_admin();
declare function init_plug_demo();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      init_plug_admin();
      init_plug_demo();
    }, 300);
  }

}
