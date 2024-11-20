import { Component } from '@angular/core';
import { RegistroService } from '../services/registro.service';
import { Contrato } from '../models/registro.model';

@Component({
  selector: 'app-insertar-registro',
  templateUrl: './insertar-registro.component.html',
  styleUrls: ['./insertar-registro.component.sass']
})

export class InsertarRegistroComponent {
  contrato: Contrato = new Contrato(0, '', 0, '', '', '', '', '', '');

  constructor(private registroService: RegistroService) {}

  agregarContrato() {
    this.registroService.agregarContrato(this.contrato).subscribe(
      (response) => {
        alert('Contrato agregado con éxito');
        this.contrato = new Contrato(0, '', 0, '', '', '', '', '', '');
      },
      (error) => {
        alert('Error al agregar el contrato');
        console.error(error);
      }
    );
  }
}
