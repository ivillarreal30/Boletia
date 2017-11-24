import { Comision } from './comision';

export class Evento {
  id_evento:number;
  id_organizador:number;
  descripcion:string;
  fecha:Date;
  lugar:string;
  horario: Date;
  comisiones: Array<Comision>;
  costo:number;
  
  constructor(id_evento:number,
  id_organizador:number,
  descripcion:string,
  fecha:Date,
  lugar:string,
  horario: Date,
  comisiones: Array<Comision>,
  costo:number){
    this.id_evento = id_evento;
    this.id_organizador = id_organizador;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.lugar = lugar;
    this.horario = horario;
    this.comisiones = comisiones;
    this.costo = costo;
  }
}
