import { Component, OnInit } from '@angular/core';

declare function init_plug_admin();
declare function init_plug_demo();

@Component({
  selector: 'app-no-page-found',
  templateUrl: './no-page-found.component.html',
  styleUrls: ['./no-page-found.component.css']
})
export class NoPageFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    init_plug_admin();
    init_plug_demo();

  }

}
