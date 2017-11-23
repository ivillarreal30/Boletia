import { Comision } from './comision';

export class Organizador {
	id_organizador:number;
	descripcion:string;
	comisiones:Array<Comision>;

	constructor(id_organizador:number,
	descripcion:string,
	comisiones:Array<Comision>){
		this.id_organizador = id_organizador;
		this.descripcion = descripcion;
		this.comisiones = comisiones;
	}
}
