import { Comision } from './comision';

export class Evento {
  id_evento:number;
  id_organizador:number;
  descripcion:string;
  fecha:Date;
  lugar:string;
  horario: Date;
  comisiones: Array<Comision>;
  
  constructor(id_evento:number,
  id_organizador:number,
  descripcion:string,
  fecha:Date,
  lugar:string,
  horario: Date,
  comisiones: Array<Comision>){
    this.id_evento = id_evento;
    this.id_organizador = id_organizador;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.lugar = lugar;
    this.horario = horario;
    this.comisiones = comisiones;
  }
}
