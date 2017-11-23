export class Comision {
	id_comision:number;
	descripcion:string;
	porcentaje:number;
	cantidad:number;
	
	constructor(
		comision:number,
		descripcion:string,
		porcentaje:number,
		cantidad:number){

		this.id_comision = comision;
		this.descripcion = descripcion;
		this.porcentaje = porcentaje;
		this.cantidad = cantidad;
	}
}
