import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild( 'inputProgreso' )  inputProgreso: ElementRef;

  @Input() progreso: number = 50;
  @Input( 'nombre' ) leyenda: string = 'leyenda';

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cambiarValor( valor: number ) {

    if ( this.progreso >= 100 && valor > 0 ) {
      this.progreso = 100;
      return;
    }

    if ( this.progreso <= 0 && valor < 0 ) {
      this.progreso = 0;
      return;
    }

    this.progreso += valor;

    this.cambioValor.emit( this.progreso );

  }

  onChange( newValue: number ) {

    if ( newValue >= 100 ) {
      this.progreso = 100;
    } else if ( newValue <= 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    this.inputProgreso.nativeElement.value = this.progreso;
    this.cambioValor.emit( this.progreso );

    this.inputProgreso.nativeElement.focus();

  }

}
