export class Contrato {
  id: number;
  identificador: string;
  valor: number;
  nombreContratante: string;
  documentoContratante: string;
  nombreContratantista: string;
  documentoContratantista: string;
  fechaInicial: string;  // Fecha en formato string o Date según lo manejes
  fechaFinal: string;    // Fecha en formato string o Date según lo manejes

  constructor(
    id: number,
    identificador: string,
    valor: number,
    nombreContratante: string,
    documentoContratante: string,
    nombreContratantista: string,
    documentoContratantista: string,
    fechaInicial: string,
    fechaFinal: string
  ) {
    this.id = id;
    this.identificador = identificador;
    this.valor = valor;
    this.nombreContratante = nombreContratante;
    this.documentoContratante = documentoContratante;
    this.nombreContratantista = nombreContratantista;
    this.documentoContratantista = documentoContratantista;
    this.fechaInicial = fechaInicial;
    this.fechaFinal = fechaFinal;
  }
}
