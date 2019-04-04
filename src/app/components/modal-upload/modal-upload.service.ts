import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalUploadService {

  public id: string;
  public tipo: string;

  public oculto: string = 'oculto';

  public notificacion = new EventEmitter<any>();

  constructor() { }

  ocultarModal() {

    this.oculto = 'oculto';
    this.id = null;
    this.tipo = null;

  }

  mostrarModal( tipo: string, id: string ) {

    this.oculto = '';
    this.id = id;
    this.tipo = tipo;

  }


}
