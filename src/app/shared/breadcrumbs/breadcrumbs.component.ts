import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  bread: any = {
    titulo: '',
    icono: ''
  };

  constructor( private router: Router,
               private title: Title,
               private meta: Meta ) {

      this.getDataRoute().subscribe( data => {
        this.bread.titulo = data.titulo;
        this.bread.icono = data.icono;

        this.title.setTitle( this.bread.titulo );
        const metaTag: MetaDefinition = {
          content: this.bread.titulo
        };

        this.meta.updateTag( metaTag );

      });

  }

  ngOnInit() {
  }


  getDataRoute() {

    return this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd ),
      filter( ( evento: ActivationEnd ) => evento.snapshot.firstChild === null),
      map( ( evento: ActivationEnd ) => evento.snapshot.data )
    );

  }

}
