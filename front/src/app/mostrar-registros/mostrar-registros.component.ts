import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../services/registro.service';
import { Contrato } from '../models/registro.model';

@Component({
  selector: 'app-mostrar-registros',
  templateUrl: './mostrar-registros.component.html',
  styleUrls: ['./mostrar-registros.component.sass']
})

export class MostrarRegistrosComponent implements OnInit {
  contratos: Contrato[] = [];

  constructor(private registroService: RegistroService) {}

  ngOnInit() {
    this.cargarContratos();
  }

  cargarContratos() {
    this.registroService.getContratos().subscribe(
      (data) => {
        this.contratos = data;
      },
      (error) => {
        alert('Error al cargar los contratos');
        console.error(error);
      }
    );
  }
}
